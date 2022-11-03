<template>
    <div class="container-fluid about-container d-flex flex-row justify-center align-center">
        <div class="container w-100">
            <v-row class="justify-center">
                <v-col cols="12" sm="6" md="4" class="outer-left d-flex flex-column justify-start">
                    <v-sheet class="ml-2 mt-6 pa-2 d-flex justify-start">
                        <h1>About</h1>
                    </v-sheet>
                    <v-sheet class="mx-2 px-2">
                        <h2>How we work</h2>
                    </v-sheet>
                    <v-sheet class="ma-2 pa-2">
                        <p>Serving a dessert is the real culmination of the evening. Children and adults are waiting impatiently for dessert. We bake the cake and prepare the cream as you want, using only natural ingredients of high quality. Putting the base cake.</p>
                        <p class="pt-3">We are waiting for the biscuit to infuse and soak. We think over the design, the color scheme and every detail of the cake and proceed to the decor.</p>
                    </v-sheet>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="outer-right d-flex flex-row justify-center align-center"> 
                    <v-col align-self="center" cols="5" class="inner-left justify-center align-center">
                            <v-img class="mt-6 mb-2" src="../../assets/images/about1.jpg" max-width="313"></v-img>
                            <v-img class="mt-2 mb-6" src="../../assets/images/about2.jpg" max-width="313"></v-img>
                    </v-col>                    
                    <v-col align-self="center" cols="7" class="inner-right d-flex ml-n2">
                        <v-img 
                        class=""
                        src="../../assets/images/about3.jpg" max-height="440"></v-img>
                    </v-col>
                </v-col>
            </v-row>
        </div>
    </div>
    <v-row> 
        <v-img
        src="../../assets/images/mellem.jpg"
        height="400"
        cover
        w-100
        class="mellem-img"
        >
        </v-img>        
    </v-row>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

h1 {
    font-size: 3rem;
    font-family: 'Dancing Script', cursive
}

.mellem-img {
    width: 100vw;    
    background-size: cover;
    background-position: center;
    
}



    
</style>