<template>
    <div class="vieworderdetails-container">
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
                        Viewing order# {{ $route.params.id }}
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
                                disabled="true"
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
                                disabled="true"
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
                                disabled="true"
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
                                    disabled="true"                                    
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
                                <v-text-field
                                :items="assortment"                               
                                v-if="orderItem.orderdetails"
                                v-model="orderItem.orderdetails.assortment"
                                disabled="true"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                            cols="12"
                            md="6"
                            class="mt-2"
                            >
                            <p>Standard</p>
                            <v-text-field
                                v-if="orderItem.orderdetails"
                                v-model="orderItem.orderdetails.standard"
                                mandatory
                                row
                                class="mt-3"
                                disabled="true"
                            >                                                    
                            </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                            cols="12"
                            md="6"
                            >
                            <p>Quantity</p>
                                <v-text-field                            
                                outlined
                                dense
                                required
                                class="inputfield"
                                v-if="orderItem.orderdetails"
                                v-model= "orderItem.orderdetails.quantity"
                                disabled="true"
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
                                    
                                    label="Delivery date"
                                    disabled/>                            
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
                            <v-text-field
                                :items="status"
                                v-if="orderItem"
                                v-model="orderItem.status"
                                disabled="true"
                                class="text-red"
                            ></v-text-field>
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
                                disabled                     
                                >                    
                                </textarea>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-form>
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
  getOrdersData,  
  orderItem,  
} = useOrders()

const route = useRoute()
const valid = ref(true)

onMounted(() => {  
getOrderItem(route.params.id);
getOrdersData(route.params.id);

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
  
  