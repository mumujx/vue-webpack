<template>
    <!-- 这里的css样式设置使用了cssModules增强了代码的保密性和可读性，在vue-loader.config.js中设置的 -->
    <header :class="$style.mainHeader">
        <h1>ToDoList</h1>
    </header>
</template>

<style lang="stylus" module>
    .main-header{
        text-align center
        h1{
            font-size 100px
            color: rgba(175, 47, 47, 0.4)
            font-weight 100
            margin 20px
        }
    }
</style>

