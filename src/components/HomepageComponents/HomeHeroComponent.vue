<template>
    <div class="container-fluid hero-container d-flex flex-column justify-content-center align-items-center header-bg">
        <v-parallax
        lighten
        class="lighten-2 img-medium-emphasis align-start mt-16 pt-16"
        max-height="700"                
        :aspect-ratio="1"
        src="../../assets/images/hero.jpg"        
        cover        
        >
            <div class="d-flex flex-column fill-height justify-center align-center text-black">
            <h1 class="text-h4 font-weight-bold mb-4">
                Sweet Bageri
            </h1>
            <h3 class="subheading font-weight-thin">
                Turn the cake into art
            </h3>
            <v-btn class="bg-orange mt-4" rounded="pill" to="/menu">choose a cake</v-btn>
            </div>
        </v-parallax>    
        
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.header-bg {
    background-color: #efefef;
   
}
.subheading {
    font-size: 2rem;
    font-family: 'Dancing Script', cursive
}

</style>