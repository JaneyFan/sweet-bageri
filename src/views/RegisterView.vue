<template>
    <div class="register-container d-flex justify-center align-center ">
      <v-container class="d-flex justify-center align-center flex-column flex-wrap">        
        <h2 class="mb-8">
            Register
        </h2>
        <form>
          <v-text-field
            v-model="email"              
            label="E-mail"
            required
            :rules="emailRules"             
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            :rules="passwordRules"
          ></v-text-field>
          <v-checkbox
            v-model="terms"
            color="secondary"
            label="I agree to terms and conditions"
            ></v-checkbox>
            <div v-if="terms">
                <v-btn
                :disabled="valid"
                class="px-14 bg-green"
                rounded="lg" 
                @click.prevent="register()"
                >
                Register
                </v-btn>
            </div>
            <div v-else>
                <v-btn
                :disabled="!valid"
                class="px-14 bg-green"
                rounded="lg"                         
                @click.prevent="register()"
                >
                Register
                </v-btn>                  
            </div>  
            <v-snackbar
              v-model="snackbar"
              :multi-line="multiLine"
              :timeout="timeout"
            >
              {{ snackbarText }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>          
        </form>
      </v-container>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';  
import useUsers from '@/modules/useUsers';  
const {register, email, password, snackbar, snackbarText} = useUsers();
const terms = ref(false);
const valid = ref(false);

const emailRules = ref([
  value => !!value || 'Required.',
  value => /.+@.+\..+/.test(value) || 'E-mail must be valid',
]);

const passwordRules = ref([
  value => !!value || 'Required.',
  value => (value && value.length >= 6) || 'Min 6 characters',
]);

document.getElementsByClassName ("dp__action dp__select").innerHTML = "register";

</script>

<style lang="scss" scoped> 
.register-container{
    min-height: 90vh;
    width: 100vw;
}

form {
    width: 50%;
}

</style>