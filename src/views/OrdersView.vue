<template>
    <div class="orders-container">
      <v-container fill-height>        
       <OrderStatusComponent class="my-12"/>
       <OrderItemComponent class="mb-8"/>        
      </v-container>
    </div>
  </template>

<script setup>
import OrderStatusComponent from '@/components/OrderPageComponents/OrderStatusComponent.vue';
import OrderItemComponent from '@/components/OrderPageComponents/OrderItemComponent.vue';  
</script>
  
<style lang="scss" scoped>
.orders-container {
    height: 100vh
}
</style>