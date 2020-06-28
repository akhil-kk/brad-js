class Github {
    constructor() {
        this.client_id = '2dd5b9a1915d53578ace';
        this.client_secret = 'fa8b5124118056a822c9191aba7d747b1f2e8f7d';
        this.repos_count = 5;
        TouchList.repos_sort ='created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}

