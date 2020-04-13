import {expect} from 'chai';
import Chance from 'chance';
import HomePage from 'src/pages/HomePage';
import SignInPage from 'src/pages/SignInPage';
import CreateAccountPage from 'src/pages/CreateAccountPage';
import MyAccountPage from 'src/pages/MyAccountPage';

let chance = new Chance();

describe('Account creation', () => {
    it('launches the home page and clicks on the Sign In button', () => {
        HomePage.open;
        expect(HomePage.title).to.include('My Store');
        HomePage.signInButton.click();
    });
    
    it('enters the email address in the Sign In page', () => {
        SignInPage.enterEmailAddress(chance.email());
        SignInPage.createAccountButton.click();
    });

    it('enters the customer details in the Create Account page', () => {
        CreateAccountPage.firstNameField.waitForExist();
        CreateAccountPage.enterFirstName('Joe');
        CreateAccountPage.enterLastName('Doe');
        CreateAccountPage.enterPassword('password');
        CreateAccountPage.enterAddress('833 Collins Street');
        CreateAccountPage.enterCity('New York');
        CreateAccountPage.enterPostCode('12345');
        CreateAccountPage.selectState('2');
        CreateAccountPage.enterMobilePhone('0412345678');
        CreateAccountPage.registerButton.click();
    });

    it('verifies the customer name on the My Account page', () => { 
        expect(MyAccountPage.pageHeading).to.equal('MY ACCOUNT');
        expect(MyAccountPage.customerName).to.equal('Joe Doe');
    });    
});