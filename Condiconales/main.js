const app = Vue.createApp({
    data() {
        return {
            text: "Accede a tu cuenta",
            open: false,
            username: "",
            posts: [{
                title: "Titulo 1",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 2",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 3",
                description: "Lorem ipsum..."
            }, {
                title: "Titulo 4",
                description: "Lorem ipsum..."
            }]
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
            <div class="list">
                <item
                    v-for="(item, i) in posts"
                    :key="i"
                    :post="item"
                />
            </div>
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
})

app.component("item", {
    props: ["post"],
    template: `
    <div class="item">
        <div class="title">{{ post.title }}</div>
        <p>{{ post.description }}</p>
    </div>
    `
});

const vm = app.mount("#app");