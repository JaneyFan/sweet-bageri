<template>
    <div class="order-status-container d-flex">  
      <v-row class="mt-5">
        <v-col md="6" class="mt-5">
          <v-btn rounded="lg" variant="flat"
          to="/orders"
          class="me-4 filter-btn"
          :class="isAll">All Orders</v-btn>

          <v-btn rounded="lg" variant="flat"
          to="/orders/Paid"
          class="me-4 filter-btn"
          :class="isPaid">Paid</v-btn>

          <v-btn rounded="lg" variant="flat"
          to="/orders/Unpaid"
          class="filter-btn"
          :class="isUnpaid">Unpaid</v-btn>
        </v-col>
        <v-col offset-md="4" md="2" class="mt-5">
            <v-btn
            rounded="lg"
            color="orange"
            to="/add">
            Add New
            </v-btn> 
        </v-col>
      </v-row> 
    </div>
 </template>
 
 <script setup>
    
import {useRoute} from 'vue-router'
import {computed } from 'vue' 
 
 const route = useRoute(); 
 console.log("route.params.status", route.params.status)
 
 const isAll = computed(() => {
   return route.params.status == undefined ? 'filter-btn-active' : ' '
 })
 
 const isPaid = computed(() => {
   return route.params.status == 'Paid' ? 'filter-btn-active' : ' '
 })
 
 const isUnpaid = computed(() => {
   return route.params.status == 'Unpaid' ? 'filter-btn-active' : ' '
 })
  
 </script>
 
 <style lang="scss" scoped>

 </style>