const vm = Vue.createApp({
    data() {
        return {
            text: 'Hola Mundito'
        };
    },
    methods: {
        input(event) {
            this.text = event.target.value;
        }
    },
    template: `
        <p>{{ text }}</p>
        <input 
            type='text' 
            @input='input' 
            :value='text' 
        />
    `
}).mount('#app');

// sintasis del v-model: eliminar el me
