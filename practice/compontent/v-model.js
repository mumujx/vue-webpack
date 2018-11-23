import Vue from 'vue'

const compoent = {
    props: ['value'],
    template: `
        <div>
            <input type="text" @input="handleInput" :value="value"/>
        </div>
    `,
    methods: {
        handleInput(e) {
            // 获取input的value值并抛出
            this.$emit('input', e.target.value)
        }
    }
}

new Vue({
    el: '#root',
    components: {
        CompOne: compoent
    },
    template:`
        <div>
            <comp-one :value="value" @input="value = arguments[0]"></comp-one>
            <comp-one v-model="value"></comp-one>
        </div>
    `,
    data() {
        return {
            value: '123'
        }
    }

})
