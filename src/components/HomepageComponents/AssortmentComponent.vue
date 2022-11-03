<template>
  <div class="assortment assortment-bg" fluid fill-height>
    <v-row class="assortment-bg justify-center align-center pt-8">
      <h1>
        Cake Assortment 
      </h1>
        <v-carousel>
          <v-carousel-item
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-container fill-height class="d-flex justify-center align-center">                
              <v-row class="my-5 d-flex"> 
                <v-col cols="3" v-for="cake in cakes" :key="cake">                          
                  <v-card min-height="300">                            
                    <v-img :src="cake.cakeURL" height="300"></v-img>
                    <v-card-title class="black--text d-flex justify-center">
                    <h6>{{ cake.title}}</h6>
                    </v-card-title>                                                             
                  </v-card>                    
                </v-col>                  
              </v-row>
            </v-container>
          </v-carousel-item>

          <v-carousel-item
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-container fill-height class="d-flex justify-center align-center">                
              <v-row class="my-5 d-flex"> 
                <v-col cols="3" v-for="donut in donuts" :key="donut">                          
                  <v-card min-height="300">                            
                    <v-img :src="donut.donutURL" height="300"></v-img>
                    <v-card-title class="black--text d-flex justify-center">
                    <h6>{{ donut.title}}</h6>
                    </v-card-title>                                                             
                  </v-card>                    
                </v-col>                  
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
    </v-row>
  </div>
</template>
<script>
export default {
    data () {
      return {
        cakes: [
          {
            cakeURL: require("../../assets/images/birthday-cake-classic.jpg"),
            title: 'BIRTHDAY CAKE CLASSIC'
          },
          {
            cakeURL: require("../../assets/images/birthday-cake-luxury.jpg"),
            title: "BIRTHDAY CAKE LUXURY",
          },
          {
            cakeURL: require("../../assets/images/wedding-cake-classic.jpg"),
            title: "WEDDING CAKE CLASSIC",
          },
          {
            cakeURL: require("../../assets/images/wedding-cake-luxury.jpg"),
            title: "WEDDING CAKE LUXURY",
          },          
        ],
        donuts: [
          {
            donutURL: require("../../assets/images/events-cake-classic.jpg"),
            title: 'EVENTS CAKE CLASSIC'
          },
          {
            donutURL: require("../../assets/images/events-cake-luxury.jpg"),
            title: "EVENTS CAKE LUXURY",
          },
          {
            donutURL: require("../../assets/images/cupcake.jpg"),
            title: "CUPCAKES",
          },
          {
            donutURL: require("../../assets/images/donuts.jpg"),
            title: "DONUTS",
          },
          
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
.assortment {
    background-color: #DEE0E0;
}

h1 {
    font-size: 3rem;
    font-family: 'Dancing Script', cursive
}
    
</style>