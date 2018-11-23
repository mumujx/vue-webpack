import Vue from 'vue'

const compoent = {
    props: ['props1'],
    name: 'comp',
    // template: `
    //     <div :style="style">
    //         <slot></slot>
    //     </div>
    // `,
    render(createElement) {
        return createElement('div',{
            style: this.style
            // on: {
            //     click: () => { this.$emit('click') }
            // }
        },[
            this.$slots.header,
            this.props1
        ])
    },
    data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            }
        }
    },
    value: 'component value'
}

new Vue({
    el: '#root',
    components: {
        CompOne: compoent
    },
    data() {
        return {
            value: '123'
        }
    },
    methods: {
        handleClick() {
            console.log('clicked!')
        }
    },
    // ref用在组件上和用在html节点上是不同的，组件上现实的是vue实例，html节点上就是当前的html节点
    // template:`
    //     <div>
    //         <comp-one ref="comp">
    //             <span ref="span">{{value}}</span>
    //         </comp-one>
    //     </div>
    // `
    render(createElement) {
        // vue提供的创建的函数
        // return this.$createElement()
        return createElement('comp-one',{
            ref:'comp',
            props: {
                props1: this.value
            },
            // on: {
            //     click: this.handleClick
            // }
            nativeOn: {
                click: this.handleClick
            }
        },[
            createElement('span',{
                ref: 'span',
                slot: 'header',
                // domProps: {
                //     innerHTML: '<span>345</span>'
                // }
                attrs: {
                    id: 'id-test'
                }
            },this.value)
        ])
    }

})
