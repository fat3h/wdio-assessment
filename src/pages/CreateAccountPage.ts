class CreateAccountPage {
    
    get firstNameField() {
        return $('#customer_firstname');
    }

    get lastNameField() {
        return $('#customer_lastname');
    }

    get passwordField() {
        return $('#passwd');
    }

    get addressField() {
        return $('#address1');
    }

    get cityField() {
        return $('#city');
    }

    get postCodeField() {
        return $('#postcode');
    }

    get stateField() {
        return $('#id_state');
    }

    get mobilePhoneField() {
        return $('#phone_mobile');
    }

    get registerButton() {
        return $('#submitAccount');
    }

    enterFirstName(testFirstName) {
        this.firstNameField.setValue(testFirstName);
    }

    enterLastName(testLastName) {
        this.lastNameField.setValue(testLastName);
    }

    enterPassword(testPassword) {
        this.passwordField.setValue(testPassword);
    }

    enterAddress(testAddress) {
        this.addressField.setValue(testAddress);
    }

    enterCity(testCity) {
        this.cityField.setValue(testCity);
    }

    enterPostCode(testPostCode) {
        this.postCodeField.setValue(testPostCode);
    }

    selectState(stateValue) {
        this.stateField.selectByAttribute('value', stateValue);
    }

    enterMobilePhone(testMobile) {
        this.mobilePhoneField.setValue(testMobile);
    }

}

export default new CreateAccountPage();