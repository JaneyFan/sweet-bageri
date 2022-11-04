import {db} from '../firebase.js'
import {ref} from 'vue'
import {collection, onSnapshot, addDoc, doc, getDoc, updateDoc, deleteDoc, query, where, getDocs} from 'firebase/firestore';
import { useRouter } from 'vue-router'; 

const useOrders = () => {
  const orders = ref([])
  const orderItem = ref({})
  const router = useRouter()  
  
  const orderDataRef = collection (db, "Orders");

  let orderPaid = ref([])
  let orderUnpaid = ref([])

  const filterStatus = ref("All")
  let filteredOrders = ref([])

  const AddItemData = ref({})
 
  // Retrieve real-time data from firebase
  const getOrdersData = () => {
    onSnapshot(orderDataRef, (snapshot) => {
    orders.value = snapshot.docs.map(doc => {
      console.log("it is reaching this step")      
      return {          
        ...doc.data(),
        id: doc.id,          
      }        
  })
    filteredOrders.value = {
      ...orders.value,
      id: orders.value.id
    }; 
    }) 
  }

  const getOrderItem = (id) => {
    const orderItemRef = doc(db, "Orders", id);
    getDoc(orderItemRef).then((doc) => {
      if (doc.exists()) {
        orderItem.value = doc.data()
        console.log("Document data:", orderItem.value);
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("getting document error:", error);
    });
  }

  // Adding dynamic data to firebase
  const firebaseAddSingleItem = async() => {
    await addDoc(collection(db, "Orders"), {
       clientdetails: {
        name: AddItemData.value.name,
        address: AddItemData.value.address,
        email: AddItemData.value.email,
        contactnumber: AddItemData.value.contactnumber      
       },
       orderdetails: {
        datetime: AddItemData.value.datetime,
        assortment: AddItemData.value.assortment,
        standard: AddItemData.value.standard,  
        quantity: AddItemData.value.quantity,        
        remarks: AddItemData.value.remarks
       },
      status: AddItemData.value.status,      
    }).then(() => {           
      router.push("/orders")      
    })
  }

    // Update data to firebase
  const firebaseUpdateSingleItem = async(id) => {
    await updateDoc(doc(orderDataRef, id),{      
      clientdetails: {
        name: orderItem.value.clientdetails.name,
        address: orderItem.value.clientdetails.address,
        contactnumber: orderItem.value.clientdetails.contactnumber,
        email: orderItem.value.clientdetails.email        
        },
      orderdetails: {
        datetime: orderItem.value.orderdetails.datetime,
        assortment: orderItem.value.orderdetails.assortment,
        standard: orderItem.value.orderdetails.standard,        
        quantity: orderItem.value.orderdetails.quantity,
        remarks: orderItem.value.orderdetails.remarks
        },
      status: orderItem.value.status,
    }).then(() => {       
      router.push("/orders")
      console.log("Order updated successfully!")
    })
  }
 
  // Delete data from firebase
  const firebaseDeleteSingleItem = async(id) => {
    await deleteDoc(doc(orderDataRef, id)).then(() => {
      console.log("Data deleted", id)
      location.reload()
    })
  }

  // Filter data by status
const getOrdersStatus = async (status) => {
    filterStatus.value = status
    orderPaid.value = []
    orderUnpaid.value = []
    console.log("getall")

    const orderStatusRef = query(orderDataRef, where("status", "==", status));
    const querySnapshot = await getDocs(orderStatusRef);
    querySnapshot.forEach((doc) => {
      switch(doc.data().status){
        case 'Paid':
          orderPaid.value.push({...doc.data(), id: doc.id})
          break;
        case 'Unpaid':
          orderUnpaid.value.push({...doc.data(), id: doc.id})
          break;
      }
    })   
}

  const getFilteredOrders = (status) => {
    if(status != "All"){
      getOrdersStatus(status)
    }
    switch(status){      
      case 'Paid':
        console.log("Order was paid")
        filteredOrders.value = orderPaid.value
        break;
      case 'Unpaid':
        console.log("Order is unpaid")
        filteredOrders.value = orderUnpaid.value
        break;
      default:
        console.log("All")
        getOrdersData();
        break;
    }
  } 

  return {
    orders,    
    getOrdersData,
    AddItemData, 
    firebaseAddSingleItem,    
    orderItem,
    getOrderItem,
    firebaseUpdateSingleItem,
    firebaseDeleteSingleItem,
    getOrdersStatus, 
    orderPaid,
    orderUnpaid,
    filterStatus,
    getFilteredOrders, 
    filteredOrders,
  }
}


export default useOrders