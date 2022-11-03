<template>
    <div>        
        <HomeHeroComponent />
        <AssortmentComponent />
        <AboutComponent />
        <ContactUsComponent />            
    </div>
</template>
<script>
import HomeHeroComponent from '../components/HomepageComponents/HomeHeroComponent.vue'
import AssortmentComponent from '../components/HomepageComponents/AssortmentComponent.vue'
import AboutComponent from '../components/HomepageComponents/AboutComponent.vue'
import ContactUsComponent from '../components/HomepageComponents/ContactUsComponent.vue'

export default {
    name: 'HomeView',
    components:{
        HomeHeroComponent,
        AssortmentComponent,
        AboutComponent,
        ContactUsComponent, 
    }    
}
</script>
<style lang="">
    
</style>