import Vue from 'vue'

new Vue({
    el: '#root',
    // template: `
    //     <div :id="aaa" @click="handleClick">
    //         {{isActive ? 'actived' : 'no actived'}}
    //         <p v-html="html"></p>
    //         {{arr.join(' ')}}<br/>
    //         {{Date.now()}}
    //     </div>
    // `,
    template: `
        <div
            :class="[{active: !isActive}]"
            :style="[styles,styles2]"

        >
            <p>{{getJoinedArr(arr)}}</p>
        </div>
    `,
    data: {
        isActive: false,
        html:"<span>1234</span>",
        arr:[1,2,3,4],
        aaa: 'main',
        // 多个style样式可以用数组，vue会自动合并，且根据浏览器自动添加前缀
        styles: {
            color: 'red',
            // 消除浏览器的默认样式
            appearance: 'none'
        },
        styles2: {
            color: 'blue'
        }
    },
    methods: {
        handleClick() {
            alert('clicked!')
        },
        // 如果arr的结构复杂那么可以在methods中先处理，然后在模板中调用，更好的方法是computed
        getJoinedArr(arr) {
            return arr.join(' ')
        }
    }
})
