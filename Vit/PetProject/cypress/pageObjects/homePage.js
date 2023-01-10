class home{



    constructor(){
        this.majorImg = () => cy.get('a[href^="/deals/?_encoding=UTF8&ref_=nav_cs_gb"]');
        this.easyReternsLink = () => cy.get('a[href^="/gp/help/customer/display.html/?nodeId"]:not(.see-more)');
        this.electronicsLink = () => cy.get('a[href^="/b?node=16225009011"]:not(.see-more)');
        this.beautyPicksLink = () => cy.get('a[href^="/b/?node=16225006011"]:not(.see-more)');
        this.fitnessLink = () => cy.get('a[href^="/s?k=work+from+home+fitness&ref=nb_sb_noss_1"]:not(.see-more)');
        this.goToLeftSideLink = () => cy.get('.a-icon.a-icon-previous-rounded');
        this.discoverOurBeautyLink = () => cy.get('a[href^="/b/?_encoding=UTF8&node=16225006011"]');
        this.PageBanner = () => cy.get('.fst-h1-st.pageBanner');
    }


    clickOnHomeLink(link){
        link.click({force: true});
    }


}

module.exports = { home };
