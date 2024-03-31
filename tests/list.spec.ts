import { test } from './test-options';

test('User can use list navigation using arrows', async ({ pageManager }) => {
    await pageManager.onHomePage().navigateToMainPage();
    await pageManager.onHomePage().hasBasicElements();
    await pageManager.onHomePage().focusNext();
    await pageManager.onKeyboard().pressRight();
    await pageManager.onHomePage().isItemSelected('1');
    await pageManager.onHomePage().focusPrev();
    await pageManager.onKeyboard().pressLeft();
    await pageManager.onHomePage().isItemSelected('0');
});

test('User can use list navigation using arrows (with Enter and Space)', async ({
    pageManager,
}) => {
    await pageManager.onHomePage().navigateToMainPage();
    await pageManager.onHomePage().hasBasicElements();
    await pageManager.onHomePage().focusNext();
    await pageManager.onKeyboard().pressEnter();
    await pageManager.onHomePage().isItemSelected('1');
    await pageManager.onHomePage().focusPrev();
    await pageManager.onKeyboard().pressSpace();
    await pageManager.onHomePage().isItemSelected('0');
});

test('User can navigate with keyboard when list is focused', async ({ pageManager }) => {
    await pageManager.onHomePage().navigateToMainPage();
    await pageManager.onHomePage().hasBasicElements();
    await pageManager.onHomePage().focusList();
    await pageManager.onKeyboard().pressRight();
    await pageManager.onHomePage().isItemSelected('1');
    await pageManager.onKeyboard().pressLeft();
    await pageManager.onHomePage().isItemSelected('0');
});

test('User can navigate to the end of the list when being in the first item', async ({
    pageManager,
}) => {
    await pageManager.onHomePage().navigateToMainPage();
    await pageManager.onHomePage().hasBasicElements();
    await pageManager.onHomePage().focusList();
    await pageManager.onKeyboard().pressLeft();
    await pageManager.onHomePage().isItemSelected('19');
    await pageManager.onKeyboard().pressRight();
    await pageManager.onHomePage().isItemSelected('0');
});
