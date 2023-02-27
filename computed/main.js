const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Diana',
            lastName: 'Martinez',
            now: new Date(),
        };
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        today() {
            return this.now.toLocaleDateString();
        }
    },
    template: `
    <div>
        {{ fullName }} 
    </div>
    <div>
        {{ today }}
    </div>
    `
}).mount('#app');