<template>
    <v-container class="fill-height" fluid>
        <v-row>  
            <v-img
            src="../../assets/images/cakepage.jpg"
            height="500"
            cover
            w-100
            class="cakepage-hero-bg font-weight-bold"
            >        
            <h1 class="text-black">Cake Assortment</h1>
            </v-img>
        </v-row>        
        <v-row class="cake-menu fill-height justify-center">
            <v-col cols="12" sm="12" md="8" class="mt-5">
                <v-table class="text-center">
                    <h2>Cake Menu</h2>
                </v-table>                
                    <div class="py-1" id="info">                    
                        <v-table class="cake-table ">
                            <thead>
                                <tr>
                                    <th class="text-col text-h6">
                                    Cake Name
                                    </th>
                                    <th class="text-col text-h6">
                                    Images
                                    </th>
                                    <th class="text-col text-h6">
                                    Price/Kr.
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                v-for="cake in cakes"
                                :key="cake.name"
                                >
                                    <td>
                                        <span class="font-weight-bold">{{ cake.name }}</span><br>
                                        <span>{{ cake.description }}</span>
                                    </td>
                                    <td>
                                        <v-img :src="cake.cakeURL" height="100">
                                        </v-img>
                                    </td>
                                    <td>{{ cake.price }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </div>                
            </v-col>            
        </v-row>
    </v-container>
</template>
<script>

export default {
    data () {
      return {
        cart: [],
        cakes: [
          {
            name: 'Birthday Cake Classic',
            description: 'The classic birthday cake flavor is vanilla cake and sprinkles mixed in, offers a representative for Halo Top, which makes a birthday-flavored frozen dessert.',
            cakeURL: require("../../assets/images/birthday-cake-classic.jpg"),
            price: 159,
          },
          {
            name: 'Birthday Cake Luxury',
            description: 'The luxury birthday cake flavor is chocolate cake and sprinkles mixed in, offers a representative for Halo Top, which makes a birthday-flavored frozen dessert.',
            cakeURL: require("../../assets/images/birthday-cake-luxury.jpg"),
            price: 237,
          },
          {
            name: 'Wedding Cake Classic',
            description: 'The classic wedding cake flavor is chocolate cake and sprinkles mixed in, offers a representative for Halo Top, which makes a birthday-flavored frozen dessert.',
            cakeURL: require("../../assets/images/wedding-cake-classic.jpg"),
            price: 305,
          },
          {
            name: 'Wedding Cake Luxury',
            description: 'The luxury wedding cake flavor is chocolate cake and sprinkles mixed in, offers a representative for Halo Top, which makes a birthday-flavored frozen dessert.',
            cakeURL: require("../../assets/images/wedding-cake-luxury.jpg"),
            price: 505,
          },
          {
            name: 'Events Cake Classic',
            description: 'Based on your requirements we can make a cake for your events.',
            cakeURL: require("../../assets/images/events-cake-classic.jpg"),
            price: 305,
          },
          {
            name: 'Events Cake Luxury',
            description: 'Based on your requirements we can make a cake for your events.',
            cakeURL: require("../../assets/images/events-cake-luxury.jpg"),
            price: 305,
          },
          {
            name: 'Cupcake-10pcs in box',
            description: 'Customized cupcakes',
            cakeURL: require("../../assets/images/cupcake.jpg"),
            price: 200,
          },
          {
            name: 'Donuts-10pcs in box',
            description: '5 different flavors',
            cakeURL: require("../../assets/images/donuts.jpg"),
            price: 200,
          },
     
        ],
      }
    },    
}
</script>
<style lang="scss" scoped>

.cakepage-hero-bg{
    position: relative;
    text-align: center;    
    opacity: 0.95;
    padding-top: 200px;
    padding-bottom: 200px;
}
h1 {
    font-size: 4.5rem;
    font-family: 'Dancing Script', cursive;    
}
.cake-menu {
    background-color: #e1e9eb;
    height: 100vh;
}

h2 {
    text-align: center;
}
.text-col {
    text-align: center; 
    color: #000000;
}

#cart-checkout {
    text-align: left;
    color: #000000;    
}

#cart-checkout p:first-child {
    line-height: 14px;   
}
    
</style>