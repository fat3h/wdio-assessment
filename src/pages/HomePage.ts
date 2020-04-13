class HomePage {
    get open() {
        return browser.url('http://automationpractice.com/index.php');
    }

    get title() {
        return browser.getTitle();
    }

    get signInButton() {
        return $('#header > div.nav > div > div > nav > div.header_user_info > a'); 
    }

}

export default new HomePage();