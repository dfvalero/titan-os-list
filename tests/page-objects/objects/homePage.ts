import { expect } from '@playwright/test';
import { HelperBase } from '../helperBase';

export class HomePage extends HelperBase {
    async navigateToMainPage() {
        await this.page.goto('/');
    }

    async hasBasicElements() {
        await expect(this.page.getByText('Titan OS - List')).toBeVisible();
        await expect(this.page.getByTestId('collection')).toBeVisible();
    }

    async focusPrev() {
        await this.page.getByLabel('Previous item').focus();
    }

    async focusNext() {
        await this.page.getByLabel('Next item').focus();
    }

    async focusList() {
        await this.page.getByTestId('collection').focus();
    }

    async isItemSelected(item: string) {
        await expect(this.page.getByTestId('collection')).toHaveAttribute('data-selected', item);
    }
}
