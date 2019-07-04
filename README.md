## Installing

Requires [node](http://nodejs.org) and [npm](https://npmjs.com) to work.

## Running

Use NPM to preview this project in the development mode

```sh
npm start
```

This mode runs a web server (via [Parcel](https://parceljs.org/)) in parallel with a binary file which provides a few REST endpoints. macOS binary is configured as default, if you're on a different platform please change the path in the `start:api` task within the `package.json` file, into a suitable binary found within the `bin` folder.

## Build Notes
- create-react-app comes with various bells and whistles attached, to keep things concise, a custom boilerplate was employed.
- In order to ensure code quality, I've used eslint (`npm run lint`) and snapshot testing.
- Depending on the browser requirements, necessary polyfills could be added.
- Context API was used (yay) to consume data along with a custom services layer to reduce the footprint of external libraries and keep everything simpler and easier to understand. I feel that this helps greatly in terms of maintenance and with onboarding new people. [Redux](https://redux.js.org/), [MobX](https://mobx.js.org/) or even
[unistore](https://www.npmjs.com/package/unistore) could also be considered for this role.
- Would consider using [Dinero](https://sarahdayan.github.io/dinero.js/) if there was more work needed with money.
- [Preact](https://preactjs.com/) could be considered instead of React as it's snappier, given the size optimisation.

## If I had more time...
- Would have added more tests.
- Would remove the side panel and try using [Reach Router](https://reach.tech/router).
- Would finish the loading/error states for status updating, I thought this pattern is well illustrated in other ways, and did not want to keep you waiting! :D
