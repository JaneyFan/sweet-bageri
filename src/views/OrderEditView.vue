<template>
  <div class="ordereditview-container">
    <v-container class="mt-16 mb-9">      
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-row class="mb-16 d-flex align-center">
          <v-btn to="/orders" class="me-9">
            <v-icon class="left-arrow"> mdi-arrow-left</v-icon> 
          </v-btn>          
          <v-col
          cols="12"
          md="6"
          >
            <h2 class="text-orange">
              Editing order# {{ $route.params.id }}
            </h2>
          </v-col>
        </v-row>        
        <v-row class="mt-5">
          <h3>Client Details</h3>
        </v-row>
        <v-row class="mt-3">
          <v-col cols="12">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                label="Name"
                placeholder="Name"
                outlined
                dense
                required
                class="inputfield"
                v-if="orderItem.clientdetails"
                v-model="orderItem.clientdetails.name"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                label="Address"
                placeholder="Address"
                v-if="orderItem.clientdetails"
                v-model="orderItem.clientdetails.address"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field 
                label="Telephone Number"
                placeholder="Telephone Number"
                v-if="orderItem.clientdetails"
                v-model="orderItem.clientdetails.contactnumber"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field 
                label="Email"
                type="email"
                placeholder="Email"
                v-if="orderItem.clientdetails"
                v-model="orderItem.clientdetails.email"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="cake-assortment mt-9">
          <h3 class="h6-bold">
              Cake Assortment
          </h3>
        </v-row>
        <v-row class="mt-3">
          <v-col cols="12">            
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  :items="assortment"
                  label="Assortment"
                  v-if="orderItem.orderdetails"
                  v-model="orderItem.orderdetails.assortment"
                ></v-select>
              </v-col>
            </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="mt-2"
                >
                  <p>Standard</p>
                  <v-radio-group
                    v-if="orderItem.orderdetails"
                    v-model="orderItem.orderdetails.standard"
                    mandatory
                    row
                    class="mt-3"
                  >
                    <v-radio
                      label="Classic"
                      value="Classic"
                    ></v-radio>
                    <v-radio
                      label="Luxury"
                      value="Luxury"
                    ></v-radio>                      
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <p>Quantity</p>
                  <v-text-field
                    label="Quantity"
                    placeholder="Quantity"
                    outlined
                    dense
                    required
                    class="inputfield"
                    v-if="orderItem.orderdetails"
                    v-model= "orderItem.orderdetails.quantity"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-3 ">
                <v-col 
                  cols="12"
                  md="6"
                >
                  <v-row>
                    <v-col>
                      <p>Delivery date</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <Datepicker 
                        v-if="orderItem.orderdetails"
                        v-model="orderItem.orderdetails.datetime" 
                        label="Delivery date"/>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="mt-9">
                <v-col>
                  <h3>Status</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-select
                    :items="status"
                    label="Status"
                    v-if="orderItem"
                    v-model="orderItem.status"
                  ></v-select>
                </v-col>
              </v-row> 
              <v-row class="mt-9">
                <v-col>
                  <h3>Remarks</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <textarea 
                  name="remarks" 
                  v-if="orderItem.orderdetails"
                  v-model="orderItem.orderdetails.remarks"                      
                  >                    
                  </textarea>
                </v-col>
              </v-row>
          </v-col>
        </v-row>
      </v-form>
      <v-row class="btn-container d-flex justify-start mt-8 mb-15">
        <v-col
        cols="12"
        md="6"
        >
          <v-btn
            :disabled="!valid"
            @click="firebaseUpdateSingleItem(route.params.id)"
            class="bg-green mr-5" 
          >
          Save
          </v-btn>
          <v-btn @click="$router.go(-1)" class="bg-red">
          Cancel
          </v-btn>
          
        </v-col>
      </v-row>
    </v-container>

  </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import useOrders from '@/modules/useOrders';
import { useRoute } from "vue-router";

const {
  getOrderItem,
  orderItem,
  firebaseUpdateSingleItem,
} = useOrders()

const route = useRoute()

const valid = ref(true)

const assortment = ref([
  'Birthday Cake',
  'Wedding Cake',
  'Events Cake',
  'Cupcake',
  'Donuts',
]);

const status = ref([
  'Paid',
  'Unpaid',
]);

/* const timeout = ref(3000) */ 

onMounted(() => {  
getOrderItem(route.params.id);
});

</script>
  
<style lang="scss" scoped> 
  
textarea{
  background-color: lightgrey;
  border: 1px solid lightgrey;
  min-height: 100px;
  min-width: 100%;
} 
  
</style>