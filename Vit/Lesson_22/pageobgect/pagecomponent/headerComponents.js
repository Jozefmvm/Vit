class HeaderPlaywright {

   constructor(){
    this.headerPlaywrightLink = '.navbar__title.text--truncate';
    this.headerDocsLink = '//*[@class="navbar__item navbar__link" and @href="/docs/intro"]';
    this.headerDocsLinkActive = '//*[@class="navbar__item navbar__link navbar__link--active" and @href="/docs/intro"]';
    this.headerApiLink = '//*[@class="navbar__item navbar__link" and @href="/docs/api/class-playwright"]';
    this.headerApiLinkActive = '//*[@class="navbar__item navbar__link navbar__link--active" and @href="/docs/api/class-playwright"]';
    this.headerCommunityLink ='//*[@class="navbar__item navbar__link" and @href="/community/welcome"]';
    this.headerCommunityLinkActive = '//*[@class="navbar__item navbar__link navbar__link--active" and @href="/community/welcome"]';
    this.majorPageText = '//*[@class="theme-doc-markdown markdown"]/h2';

    this.subtitlesCommunityPage = ['Ambassadors','GitHub','Contributing','Community Slack','Stack Overflow','YouTube','News'];

   }
}


module.exports = { HeaderPlaywright };
