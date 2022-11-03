<template>
    <div class="container-fluid about-container d-flex flex-row justify-center align-center">
        <div class="container w-100"> 
            <v-row class="contact-box justify-center">
                <v-sheet class="ml-2 mt-6 pa-2 d-flex justify-start">
                    <h1>Contact us</h1>
                </v-sheet>
            </v-row>
            <v-row class="shop-introduction-box justify-center my-4">
                <v-col class="inner-left-images" cols="8" sm="6" md="4">
                    <v-row class="inner-left-top-shopimages justify-center align-center">
                        <v-col cols="4" class="inner-left-top-shopimage" v-for="shop in shops" :key="shop">
                            <v-img :src="shop.shopURL" max-height="269"></v-img>
                        </v-col>
                    </v-row>
                    <v-row class="inner-left-bottom-map my-4">
                        <v-img src="../../assets/images/map.jpg" height="300"></v-img>
                    </v-row>
                </v-col>
                <v-col class="inner-right-shopinformation ml-12" cols="4" sm="6" md="4">
                    <v-sheet class="mb-4"> 
                        <h2>Address</h2>
                        <p>Spangsbjerg Kirkevej 103, 6700 Esbjerg</p>
                    </v-sheet>
                    <v-sheet class="mb-4">
                        <h2>Contact</h2>
                        <p>+45 76133200</p>
                    </v-sheet>
                    <v-sheet class="mb-4">
                        <h2>E-mail</h2>
                        <p>jian0177@easv365.dk</p>
                    </v-sheet>
                </v-col>    
            </v-row>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
        shops: [
            {
            shopURL: require("../../assets/images/shop1.jpg"),
            },
            {
            shopURL: require("../../assets/images/shop2.jpg"),
            },
            {
            shopURL: require("../../assets/images/shop3.jpg"),
            },
        ],
        }
    } 
}
</script>
<style lang="scss" scoped>

h1 {
    font-size: 3rem;
    font-family: 'Dancing Script', cursive
}
    
</style>