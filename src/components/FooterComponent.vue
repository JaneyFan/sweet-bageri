<template>
    <div class="footer container-fluid">
        <v-footer class="d-flex flex-column footer-bg">
            <div class="footer-bg text-white d-flex w-100 align-center px-10">
            <strong>Get connected with us on social networks!</strong>
            <v-spacer></v-spacer>
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="plain"
                size="small"
            ></v-btn>
            </div>
        </v-footer>
            <div class="px-4 py-2 bg-black text-white text-center w-100">
            {{ new Date().getFullYear() }} — <strong>© Sweet Bageri. All rights reserved.</strong>
            </div>
                
    </div>
</template>
<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    
}
</script>
<style lang="scss">
.footer-bg {
    background-color: #313131;
}
    
</style>