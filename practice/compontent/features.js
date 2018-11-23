import Vue from 'vue'

const childComponent = {
    template:`
        <div>child component:{{data.value}}</div>
    `,
    // 上级的vue实例是compoent
    mounted() {
        // console.log(this.yeye, this.value)
    },
    // 读取到祖父级别的vue实例
    inject: ['yeye', 'data']
}

const compoent = {
    name:'comp',
    components: {
        childComponent:childComponent
    },
    template: `
        <div :style="style">
            <div class="header">
                <slot name="header" value="1111"></slot>
            </div>
            <div class="body">
                <slot name="body"></slot>
                <child-component></child-component>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    `,
    data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            }
        }
    }
}

new Vue({
    el: '#root',
    components: {
        CompOne: compoent
    },
    // 所有这个vue下的组件节点都可以通过这个provide拿到这个组件的实例
    // provide不提供vue的reactive属性,但是可以自己定义如下
    provide() {
        const data = {}
        Object.defineProperty(data, 'value', {
            get: () => this.value,
            // 使这个属性可以被读取
            enumerable: true
        })
        return {
            yeye: this,
            data
        }
    },
    // slot="xxx"具名插槽
    // slot-scope是作用域插槽，名字可以自定义
    // ref用在组件上和用在html节点上是不同的，组件上现实的是vue实例，html节点上就是当前的html节点
    template:`
        <div>
            <comp-one ref="aaa">
                <span slot="header" slot-scope="props">this is header {{props.value}}</span>
                <span slot="body" ref="span"> this is body</span>
                <span slot="footer"> this is footer</span>
            </comp-one>
            <input type="text" v-model="value" />
        </div>
    `,
    data() {
        return {
            value: '123'
        }
    },
    mounted() {
        // console.log(this.$refs.aaa, this.$refs.span)
    }

})
