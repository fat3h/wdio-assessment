class SignInPage {
    get open() {
        return browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    }
    
    get emailAddressField() {
        return $('#email_create');
    }

    get createAccountButton() {
        return $('#SubmitCreate');
    }
    
    enterEmailAddress(testEmailAddress) {
        this.emailAddressField.setValue(testEmailAddress);
    }

    clickCreateAccountButton() {
        this.createAccountButton.click();
    }
}

export default new SignInPage();