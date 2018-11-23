import Vue from 'vue'

// new Vue({
//     el: '#root',
//     template: '<div>this is content</div>'
// });

// vue实例的创建同上面的结果是相同的
const app = new Vue({
    template: '<div ref="div">{{text}} {{obj.a}}</div>',
    data: {
        text: 0,
        obj: {}
    }
    // watch: {
    //     text(newText, oldText){
    //         console.log(`${newText} : ${oldText}`)
    //     }
    // }
})
app.$mount('#root')
// app.text = 'text1'
// setInterval(() => {
//     app.text += 1
//     // app.$options.data += 1
//     // app.$data.text += 1
// },1000)

// vue实例上的属性（常用的）：
    // console.log(app.$el);
    // console.log(app.$data);
    // console.log(app.$props);
    // console.log(app.$options);  整个vue实例的对象
    // app.$options.render = (h) => {
    //     return h('div', {}, 'new render function')
    // }
    // console.log(app.$root === app)   $root即是整个vue
    // console.log(app.$children)  $children在组件中比较常用,如下
    {/* <item> <div></div></item>    在这个item组件中div就是他的children*/}
    // console.log(app.$slots)
    // console.log(app.$scopedSlots)
    // console.log(app.$refs)  指元素节点上的ref，返回的是当前html元素或者组件实例
    // console.log(app.$isServer)  判断是否在服务端渲染

// vue实例上的方法（常用的）：
    // 监听方法，同写在vue实例option中的watch效果一样
    // const unWatch = app.$watch('text', (newText, oldText) => {
    //     console.log(`${newText} : ${oldText}`)
    // });
    // 调用UNWatch之后就会销毁watch方法,
    // vue中的watch销毁会随着vue实例的销毁自动销毁不用手动
    // setTimeout(() => {
    //     unWatch()
    // },2000)

    // 事件监听方法$on和 $once  区别就是$once只监听一次事件
    // app.$once('test', (a, b) =>{
    //     console.log(`test emited ${1} ${2}`)
    // });
    // 事件触发$emit
    // app.$emit('test')
    // setInterval(() => {
    //     app.$emit('test')
    // },1000)

    // 强制组件重新渲染
    // let i = 0;
    // setInterval(() => {
    //     i++
    //     // app.obj.a = i
    //     // app.$forceUpdate()  但这种发放就是每次都要去重新渲染，浪费资源
    //
           // app.$set(app.obj, 'a', i)  这种方法就是给obj新增加一个属性并赋值
    // }, 1000)


