const vm = Vue.createApp({
    data() {
        return {
            text: 'Pueta cerrada',
            open: false,
        };
    },
    computed: {
        label() {
            return this.open ? "Cerrar" : "Abrir";
        } 
    },
    watch: {
        open(value) {
            value ? this.text="Puerta abierta" : this.text="Puerta cerrada";
        }
    }

}).mount("#app");