<template>
  <div class="addnew-container">
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
              Add New Orders
            </h2>
          </v-col>
        </v-row>
        
        <v-row class="mt-5">
          <h3>
              Client Details
          </h3>
        </v-row>
        <v-row class="mt-3">
          <v-col cols="12" class="form-container">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                label="Name"
                placeholder="Name"
                :rules="rules"
                hide-details="auto"
                outlined
                dense
                required
                class="inputfield"
                v-model= "AddItemData.name"
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
                v-model="AddItemData.address"
                :rules="rules"
                hide-details="auto"
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
                v-model="AddItemData.contactnumber"
                :rules="telephoneRules"
                hide-details="auto"
                type="tel"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                hint="Format: 12-34-5678"
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
                v-model="AddItemData.email"
                hide-details="auto"
                :rules="emailRules"
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
                  v-model="AddItemData.assortment"
                  :rules="selectRules"
                  hide-details="auto"
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
                    v-model="AddItemData.standard"
                    mandatory
                    row
                    :rules="selectRules"
                    hide-details="auto"
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
                  hide-details="auto"
                  outlined
                  dense
                  required
                  class="inputfield"
                  v-model= "AddItemData.quantity"
                  ></v-text-field>
                </v-col>
            </v-row>

              <v-row class="mt-3">
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
                      hide-details="auto"
                      required
                      v-model="AddItemData.datetime" 
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
                    v-model="AddItemData.status"
                    :rules = "selectRules"
                    hide-details="auto"
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
                    v-model="AddItemData.remarks"
                    :rules="rules"
                    hide-details="auto"
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
          @click="firebaseAddSingleItem()" 
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
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import useOrders from '@/modules/useOrders';

const {
  firebaseAddSingleItem,
  AddItemData,
} = useOrders()

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


const rules = ref([
  value => !!value || 'Required.',
  value => (value && value.length >= 3) || 'Min 3 characters',
]);


const telephoneRules = ref([
  value => !!value || 'Required.',
  value => (value && value.length >= 8) || 'Min 8 characters',
]);

const emailRules = ref([
  value => !!value || 'Required.',
  value => /.+@.+\..+/.test(value) || 'E-mail must be valid',
]);

const selectRules = ref([
  value => !!value || 'Required.',
]);

document.getElementsByClassName("dp__action dp__select").innerHTML = "Save";

</script>

<style lang="scss" scoped>

textarea{
  background-color: lightgrey;
  border: 1px solid lightgrey;
  min-height: 100px;
  min-width: 100%;
}

</style>