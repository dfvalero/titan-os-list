import { test as base } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

export type TestOptions = {
    pageManager: PageManager;
};

export const test = base.extend<TestOptions>({
    pageManager: ({ page, context }, use, testInfo) => {
        const pm = new PageManager(page, context, testInfo);
        use(pm);
    },
});
