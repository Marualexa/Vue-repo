const vm = Vue.createApp({
    data() {
        return {
            text: 'Pueta cerrada',
            open: false,
            styles: {
                backgroundColor: '#b5e7a0'
            }
        };
    },
    computed: {
        label() {
            return this.open ? "Cerrar" : "Abrir";
        },
        styles() {
            return this.open ? ['open'] : ['closed'];
        }
    },
    watch: {
        open(value) {
            if(value) {
                this.text = 'Puerta abierta';
                this.styles.backgroundColor = '#eca1a6';
            } else {
                this.text = 'Puerta cerrada';
                this.styles.backgroundColor = '#b5e7a0';
            }
        }
    },
    template: `
        <div class='container' :class='styles'>
            <h2>{{ text }}</h2>
            <button @click='open = !open'>{{ label }}</button>
        </div>
    `
}).mount("#app");