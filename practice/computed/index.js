import Vue from 'vue'

new Vue({
    el: '#root',
    template: `
        <div>
            <p>Name:{{name}}</p>
            <p>getName:{{getName()}}</p>
            <p>Number:{{number}}</p>
            <p>FullName:{{fullName}}</p>
            <p><input type="text" v-model="number" /></p>
            <p>FirstName:<input type="text" v-model="firstName" /></p>
            <p>LastName<input type="text" v-model="lastName" /></p>
            <p>Name: <input type="text"  v-model="name" /></p>
            <p>Obj: <input type="text" v-model="obj.a" /></p>
        </div>
    `,
    data: {
        firstName: 'Lu',
        lastName: 'Jiao',
        number: 0,
        fullName: '',
        obj: {
            a: 123
        }
    },
    // computed其实是get和set方法
    computed: {
        name() {
            console.log('new name')
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch: {
        firstName: {
            handler (newName, oldName) {
                this.fullName = newName + '' + this.lastName
            },
            immediate: true,
            // 更深入的监听数据的变化
            deep: true
        }
    },
    methods: {
        // 这个方法和computed结果是一样的，
        // 但是这个没有缓存，每次渲染时都会执行计算，浪费性能
        getName() {
            console.log('getName invoked')
            return `${this.firstName} ${this.lastName}`
        }
    }
})
