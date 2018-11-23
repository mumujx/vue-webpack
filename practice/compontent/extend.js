import Vue from 'vue'

const compoent = {
    props: {
        active: Boolean,
        propOne: String
    },
    template: `
        <div>
            <input type="text" v-model="text" />
            <span @click="handleChange">{{propOne}}</span>
            <span v-show="active">see me if active</span>
        </div>
    `,
    // 如果一个组件不是在new Vue中定义的，
    // 那么这个组件中的data就必须用方法来定义，然后返回数据
    data() {
        return {
            text: 0
        }
    },
    mounted() {
        console.log('comp mounted')
    },
    methods: {
        handleChange() {
            // this.onChange();
            // 效果同上面的一样只是更简单
            this.$emit('change');
        }
    }
}
// 实现组件与组件之间的继承方法：
// 方法一：
// const CompVue = Vue.extend(compoent)

// new CompVue({
//     el:'#root',
//     // 若是想覆盖子组件中的props就要使用propsData
//     propsData: {
//         propOne: 'xxxx'
//     },
//     // 这个data可以和子组件中的data合并，即覆盖相同的属性
//     data: {
//         text: '123'
//     },
//     // 先加载子组件中的mounted，然后在加载这个mounted
//     mounted() {
//         console.log('comp1 mounted')
//     }
// })

// 方法二：
const compoent2 = {
    extends: compoent,
    data() {
        return {
            text: '1111'
        }
    },
    mounted() {
        console.log('comp2 mounted')
    }
}
new Vue({
    el: '#root',
    components: {
        Comp:compoent2
    },
    template:`
        <comp></comp>
    `
})
