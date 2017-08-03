<template>
    <div>
        <div class="app-container">主题组件</div>
        <router-link to="/about">关于我们</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
<style lang="less">
    .app-container {
        color: #666;
    }
</style>

