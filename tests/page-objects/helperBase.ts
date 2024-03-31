import { BrowserContext, Page, TestInfo } from '@playwright/test';

export class HelperBase {
    readonly page: Page;

    readonly context: BrowserContext;

    readonly testInfo: TestInfo;

    constructor(page: Page, context: BrowserContext, testInfo: TestInfo) {
        this.page = page;
        this.context = context;
        this.testInfo = testInfo;
    }
}
