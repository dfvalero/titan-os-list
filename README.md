# Titan OS - Horizontal list

## Development

To be able to develop, Run the following command:

```
yarn start
```

## Personal Notes

- [create-react-app](https://create-react-app.dev/) has not been maintained the last years. I would suggest to use other tools like [vite](https://vitejs.dev/) or [next](https://nextjs.org/) that are well maintained and with huge community.
- For a production app, I would try not to use Redux for this use case. It looks like we can handle the state of this list with local state (useState/useReducer or Context API). I prefer to use Redux (or Context API) for global state like user configuration or user preferences.
- Infinite navigation is an MVP, it can be implemented in a better way using Virtual clones like [Swiper](https://swiperjs.com/demos#infinite-loop) does.
