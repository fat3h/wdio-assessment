class MyAccountPage {
    
    get customerName() {
        return $('#header > div.nav > div > div > nav > div:nth-child(1) > a > span').getText();
    }

    get pageHeading() {
        return $('#center_column > h1').getText();
    }

}

export default new MyAccountPage();