<template lang="">
    <div class="header" fluid>        
        <v-app-bar flat app dense class="header justify-space-between">
            <v-toolbar-title class="header-logo">
                <router-link to="/">
                    <v-img src="@/assets/images/logoblack.png" max-width="200px" max-height="50px" contain></v-img>
                </router-link>                
            </v-toolbar-title>               
          <!--   <v-spacer></v-spacer> -->    
            <v-toolbar-items class="mr-5">
                <v-btn variant="plain" to="/">Home</v-btn>
                <v-btn variant="plain" to="/menu">Menu</v-btn>
                <v-btn variant="plain" to="/orders">Orders</v-btn>
                <v-btn v-if="!isLoggedin" variant="plain" to="/login">Log in</v-btn>
                <!-- <v-btn v-else variant="plain" to="/admin">Admin</v-btn> -->
                <!-- <v-btn v-if="isLoggedin" variant="plain" @click="logout()">Log out</v-btn> -->
                <v-btn v-else variant="plain" @click="logout()">Log out</v-btn>                            
                                          
            </v-toolbar-items>   
        </v-app-bar>
    </div>     

</template>
<script setup>
import { onMounted} from 'vue';
import useUsers from '@/modules/useUsers';

const { 
    isLoggedin,
    logout,
    isLoggedinTest
      } = useUsers()

onMounted(() => {
  isLoggedinTest(),
  isLoggedin
});

</script>
<style lang="scss" scoped>
.header {    
    background-color: #efefef;   
}    
</style>