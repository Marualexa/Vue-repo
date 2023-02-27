const app = Vue.createApp({
    data() {
        return {
            items: ["uno", "dos", "tres"]
        };
    },
    methods: {
        remove(i) {
            const items = this.items.filter((el, index) => index !== i);
            this.items = items;
        }
    },
    template: `
        <ul>
            <v-item
                v-for="(item, i) in items"
                v-bind:text="item"
                v-on:remove="remove(i)"
            />
        </ul>
    `
});

app.component("v-item", {
    props: {
        text: String
    },
    methods: {
        rm() {
            this.$emit("remove");
        }
    },
    template: `<li v-on:click="rm">{{ text }}</li>`
});

const vm = app.mount("#app");