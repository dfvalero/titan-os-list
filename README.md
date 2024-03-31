# Titan OS - Horizontal list

## Development

To be able to develop, Run the following command:

```
yarn start
```

## Testing

We have two commands in order to run our e2e tests.

To run the tests in headless mode, run this command:

```
yarn test:e2e
```

To run the tests in the UI Mode (better developer experience), run this command:

```
yarn test:e2e:ui
```

## Personal Notes

- [create-react-app](https://create-react-app.dev/) has not been maintained the last years. I would suggest to use other tools like [vite](https://vitejs.dev/) or [next](https://nextjs.org/) that are well maintained and with huge community.
- For a production app, I would try not to use Redux for this use case. It looks like we can handle the state of this list with local state (useState/useReducer or Context API). I prefer to use Redux (or Context API) for global state like user configuration or user preferences.
- Infinite navigation is an MVP, it can be implemented in a better way using Virtual clones like [Swiper](https://swiperjs.com/demos#infinite-loop) does.
- Improve the UI:
  - Show loader state when loading the collection or loading more items
  - Wait until all images are loaded before showing the list (to avoid layout shift)
- I just added few e2e tests using [Playwright](https://playwright.dev/). We should add the following in order to have a more robust app:
  - More e2e use cases
  - Integration and unit tests using [Jest](https://jestjs.io/). For example for the keyboard logic.
