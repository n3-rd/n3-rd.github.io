<template>
    <div class="home-screen h-[100vh]">
    <Header/>
        <Title/>
        <!-- <MainImage/> -->
        <CustomCursor/>
    </div>
</template>
<script>
import Title from './sub_components/Title.vue';
import MainImage from './sub_components/MainImage.vue';
import CustomCursor from './sub_components/CustomCursor.vue';
import Header from './Header.vue';
export default {
    name: "HomeScreen",
    components: {
    Title,
    MainImage,
    CustomCursor,
    Header
},
}
</script>
<style lang="scss">
.home-screen {
    min-height: 100vh;
}
</style>