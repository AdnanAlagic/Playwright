class LandingPage {

    constructor (page) {
        this.page = page;
        this.city = page.getByRole('button', { name: 'Akzeptieren' });
    }

    async goTo() {
        await this.page.goto('https://www.m-net.de/privatkunden');
    }

}

module.exports = {LandingPage};
