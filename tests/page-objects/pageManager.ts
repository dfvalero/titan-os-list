import { Page, BrowserContext, TestInfo } from '@playwright/test';
import { HomePage } from './objects/homePage';
import { KeyboardPage } from './objects/keyboard';

export class PageManager {
    private readonly page: Page;

    private readonly context: BrowserContext;

    private readonly testInfo: TestInfo;

    private readonly homePage: HomePage;

    private readonly keyboard: KeyboardPage;

    constructor(page: Page, context: BrowserContext, testInfo: TestInfo) {
        this.page = page;
        this.context = context;
        this.testInfo = testInfo;
        this.homePage = new HomePage(this.page, this.context, this.testInfo);
        this.keyboard = new KeyboardPage(this.page, this.context, this.testInfo);
    }

    onHomePage() {
        return this.homePage;
    }

    onKeyboard() {
        return this.keyboard;
    }
}
