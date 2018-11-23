import Vue from 'vue'


new Vue({
    el: '#root',
    template:`
        <div>
            <div v-show="active">{{text}}</div>
            <div v-if="active">if content</div>
            <div v-else-if="text===1">else if content</div>
            <div v-else>else content</div>
            <div v-html="html"></div>
            <input text="text" v-model="text" />
            <input type="checkbox" v-model="active"/>
            <div>
                <input type="checkbox" :value="1" v-model="arr"/>
                <input type="checkbox" :value="2" v-model="arr"/>
                <input type="checkbox" :value="3" v-model="arr"/>
                <input type="checkbox" :value="4" v-model="arr"/>
            </div>
            <div>
                <label>
                    <input type="radio" value="man" v-model="picked"/>男
                </label>
                <label>
                    <input type="radio" value="woman" v-model="picked"/>女
                </label>
            </div>
            <ul>
                <li v-for="(item, index) in arr">{{item}}:{{index}}</li>
            </ul>
            <ul>
                <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
            </ul>
        </div>
    `,
    data: {
        arr: [1,2,3,4],
        obj: {
            a:1,
            b:2,
            c:3
        },
        text:0,
        active:true,
        html: '<span>this is html</span>',
        picked: ''
    }
})
