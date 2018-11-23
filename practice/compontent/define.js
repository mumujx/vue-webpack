import Vue from 'vue'

const compoent = {
    // 不建议这个写法因为不严谨
    // props:['active', 'propOne'],
    props: {
        // active: {
        //     type: Boolean,
        //     // 这个属性要求父组件中必须有active属性，否则就会有个警告
        //     required: true,
        //     // 这个属性和required不会同时出现
        //     // default:false,
        //     // 自定义方法验证props传入的值是否符合规则
        //     // validator(value) {
        //     //     return  value === 'boolean'
        //     // }
        // },
        active: Boolean,
        propOne: String
        // onChange: Function
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
    methods: {
        handleChange() {
            // this.onChange();
            // 效果同上面的一样只是更简单
            this.$emit('change');
        }
    }
}
// 将compontent变为组件的方法：
// 方法1：全局声明
// Vue.compontent('CompOne', compoent)

new Vue({
    el: '#root',
    template:`
        <div>
            <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange" :on-change="handleChange"></comp-one>
            <comp-one :active="false" propOne="text2"></comp-one>
        </div>
    `,
    data: {
        prop1: 'text1'
    },
    mounted() {
        console.log(this.$refs.comp1)
    },
    // 方法2：在vue中声明
    components: {
        CompOne: compoent
    },
    methods: {
        handleChange() {
            this.prop1 +=1
        }
    }
})
