class Github {
    constructor() {
        this.client_id = '2dd5b9a1915d53578ace';
        this.client_secret = 'fa8b5124118056a822c9191aba7d747b1f2e8f7d';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}

