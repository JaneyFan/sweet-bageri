import { ref } from 'vue'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'vue-router'

const useUsers = () => {
  // const auth = getAuth()
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const router = useRouter()
  const user = ref(null)
  const isLoggedin = ref(false)

  let snackbar = ref(false)
  let snackbarText = ref('')
  
  const register = () => {     
    createUserWithEmailAndPassword(auth, email.value, password.value)  
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      console.log("Successfully registered!");
      console.log(auth.currentUser);
      snackbar.value=true;
      snackbarText.value="Successfully registered!";
      router.push('/orders')
      // ...
    })
     
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
      // ..
    });
} 

  const login = async () => {
  console.log("proceed to login")  

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      user.value = userCredential.user;
      console.log("userInfo", user.value) 
      localStorage.setItem("userLoginInfoFireBase", user.value.email);
      console.log("userLoginInfoFireBase", localStorage.getItem("userLoginInfoFireBase"));      
      router.push("/orders");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
      } else {
          alert(errorMessage);
      }
      console.log(error); 
    })
  }

  const logout = () => {
    signOut(auth).then(() => {
      console.log("User logged out", user.value)
      localStorage.removeItem("userLoginInfoFireBase");      
      router.push("/login");
    }).catch((error) => {
      console.log(error)
    })
  }

  const isLoggedinTest = () => {
      user.value = auth.currentUser;
      //debugger
      onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user: ", user)
        isLoggedin.value = true
      } else {
        console.log("no user")
        isLoggedin.value = false
      }
    });
    console.log("isLoggedin", isLoggedin.value)
  }
  
  return {
    login,  
    email,
    password,
    user,
    auth,
    logout,
    isLoggedin,
    isLoggedinTest,
    errorMessage,
    register,
    snackbar,
    snackbarText
  }
}

export default useUsers;