new Vue({
    el: '#app',
    data: {
        arrEmails: [],
        randomEmail: '',
    },
    methods: {
        getRandomEmail() {
            if (this.arrEmails.length < 10) {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then(axiosResponse => {
                            console.log(axiosResponse);
                            this.randomEmail = axiosResponse.data.response;
                            this.arrEmails.push(this.randomEmail);
                        });
                };
            };
        },
    },
});