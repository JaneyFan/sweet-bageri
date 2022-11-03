<template>
  <div class="login-container d-flex justify-center align-center ">
    <v-container class="d-flex justify-center align-center flex-column flex-wrap">
      <h2 class="mb-8">
          Log in
      </h2>
      <form>
        <v-text-field
          v-model="email"              
          label="E-mail"
          required             
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-btn
            class="px-14 bg-green"
            rounded="lg"            
            @click.prevent="login()"
          >
            Log in
          </v-btn>
          <v-row class="align-center my-5">
          <p class="ml-5">Need an account?</p>
          <v-btn variant="plain" to="/register" class="text-pink">Register Here</v-btn> </v-row>          
          
          
      </form>
    </v-container>
    
  </div>
</template>
  
<script setup>  
import useUsers from '@/modules/useUsers';  
const {login, email, password} = useUsers();

</script>

<style lang="scss" scoped>   
.login-container{
  min-height: 90vh;
  width: 100vw;
}

form {
  width: 50%;
}

</style>