const app = Vue.createApp({
    data() {
        return {
            text: "Hola Vue"
        };
    },
    template: `
        <div>
            <p>{{ text }}</p>
            <v-input v-model:value="text" />
        </div>
    `
});

app.component("v-input", {
    props: {
        value: String
    },
    methods: {
        input(e) {
            this.$emit("update:value", e.target.value);
        }
    },
    template: `<input type="text" v-bind:value="value" v-on:input="input" />`
});

const vm = app.mount("#app");