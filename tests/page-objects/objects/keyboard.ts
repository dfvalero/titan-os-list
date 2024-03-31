import { HelperBase } from '../helperBase';

export class KeyboardPage extends HelperBase {
    async pressLeft() {
        await this.page.keyboard.down('ArrowLeft');
    }

    async pressRight() {
        await this.page.keyboard.down('ArrowRight');
    }

    async pressEnter() {
        await this.page.keyboard.down('Enter');
    }

    async pressSpace() {
        await this.page.keyboard.down(' ');
    }
}
