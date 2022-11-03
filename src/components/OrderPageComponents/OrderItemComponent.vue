<template>
  <div class="order-container fill-height" fluid>
    <v-table
      fixed-header
      height="300px"
    >
      <thead class="title">
      <tr>
        <th>Orders</th>                
        <th>Status</th>
        <th>Assortment</th>
        <th>Standard</th>
        <th>Qty</th>
        <th>Client Name</th>
        <th>Delivery date</th>                
        <th></th>
      </tr>
      </thead>
        <tbody>
          <tr
          v-for="(order, index) in orders" :key="order"
          >
            
            <td>{{index+1}}</td>
            <td>{{order.status}}</td>
            <td>{{order.orderdetails.assortment}}</td>
            <td>{{order.orderdetails.standard}}</td>
            <td>{{order.orderdetails.quantity}}</td>
            <td>{{order.clientdetails.name}}</td>
            <td>{{order.orderdetails.datetime.toDate().toDateString()}}</td>
            <td>
              <router-link :to="'/view/' + order.id" class="mr-3"><v-icon class="c-btn" color="orange">mdi-eye-outline</v-icon></router-link>
              <router-link :to="'/edit/' + order.id" class="mr-3"><v-icon class="c-btn" color="orange">mdi-pencil</v-icon> </router-link>
              <a class="c-btn" @click="firebaseDeleteSingleItem(order.id)"><v-icon color="orange">mdi-delete </v-icon></a>
            </td>
          </tr>
        </tbody>
    </v-table>
  
  </div>
</template>
  
<script setup>
import { onMounted} from 'vue'
import useOrders from '@/modules/useOrders'
  
const { 
  getOrdersData,
  orders,
  firebaseDeleteSingleItem
  } = useOrders()

onMounted(() => {
  getOrdersData();
})

</script>

<style lang="scss" scoped>

a{
  text-decoration: none;
}
.c-btn:hover{
    cursor: pointer;
}
.title{
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
}
</style>