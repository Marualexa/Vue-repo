const vm = Vue.createApp({
    data() {
        return {
            text: "Accede a tu cuenta",
            open: false,
            username: ""
        };
    },
    watch: {
        open(value) {
            if (value) {
                this.text = "Cierra sesión";
            } else {
                this.text = "Accede a tu cuenta";
                this.username = "";
            }
        }
    },
    computed: {
        label() {
            return this.open ? "Salir" : "Acceder";
        },
        styles() {
            return this.open ? ['open'] : ['closed'];
        }
    },
    template: `
    <div class="container" :class="styles">
        <h2>{{ text }}</h2>
        <div v-if="open">
            <p>Hola, {{ username }}</p>
        </div>
        <div v-else>
            <div>Username</div>
            <input type="text" v-model="username" />    
        </div>
        <button @click="open = !open">
            <div v-if="!open">Acceder</div>
            <div v-else>Salir</div>
        </button>
    </div>
    `
}).mount("#app");