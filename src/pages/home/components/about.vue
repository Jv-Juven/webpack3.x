<template>
    <div class="about">
        <header>
            关于我们的页面
        </header>
    </div>
</template>
<script>
export default {
    name: 'about',
    mounted() {
        console.log(this.$store);
    }
}
</script>
<style lang="stylus" scoped>
.about
    font-size 14px
    color #455
</style>
