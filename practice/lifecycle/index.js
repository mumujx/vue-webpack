import Vue from 'vue'

new Vue({
    el: '#root',
    template: '<div>{{text}}</div>',
    data: {
        text: 'aaa'
    },
    beforeCreate() {
        console.log(this, 'beforeCreate')
    },
    created() {
        console.log(this, 'created')
    },
    beforeMount() {
        console.log(this, 'beforeMount')
    },
    mounted() {
        console.log(this, 'mounted')
    },
    beforeUpdate() {
        console.log(this, 'beforeUpdate')
    },
    updated() {
        console.log(this, 'updated')
    },
    activated() {
        console.log(this, 'activated')
    },
    deactivated(){
        console.log(this, 'deaactivated')
    },
    beforeDestroy() {
        console.log(this, 'beforeDestroy')
    },
    destroyed() {
        console.log(this, 'destroyed')
    },
    render(h) {
        throw new TypeError('render error')
        console.log('render function invoke')
        return h('div', {}, this.text)
    },
    // 可以检测在渲染中的错误，只在开发环境使用，正式环境不能使用，且只对本组件有效，子组件是无效的
    renderError(h, err) {
        return h('div', {}, err.stack)
    },
    // 会向上冒泡，且可以在正式环境使用
    errorCaptured() {

    }
})
