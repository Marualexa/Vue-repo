const app = Vue.createApp({
    template: `
        <div> 
            <v-layout>
                <template v-slot:header>
                    <button>Titulo</button>
                </template>
                <template v-slot:content>
                    Lorem ispum dolor sit amet.
                </template>
            </v-layout>
        </div>

        <div> 
        <v-layout>
            <template v-slot:header>
                <h1>Titulo</h1>
            </template>
            <template v-slot:content>
                Lorem ispum dolor sit amet.
            </template>
        </v-layout>
    </div>
    `
});

app.component("v-layout", {
    template: `
    <header>
        <slot name="header"></slot>    
    </header>
    <div>
        <slot name="content"></slot>    
    </div>
    `
});

const vm = app.mount("#app");