const vm = Vue.createApp({
    data() {
        return {
            img: "https://t1.uc.ltmcdn.com/es/posts/2/9/1/cual_es_el_significado_de_las_rosas_azules_26192_600.webp",
            attr: "src",
            counter: 0,
        };
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.contador--;
        },
    },
    template: `
        <img v-bind:[attr]="img"/>
        
        <button @click="counter--" :disabled="counter<1">-</button> 
            {{ counter }}
        <button @click="counter++" :disabled="counter>8">+</button>
    `
}).mount("#app");
