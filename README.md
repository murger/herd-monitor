## Installing

Requires [node](http://nodejs.org) and [npm](https://npmjs.com) to work.

```sh
git clone https://github.com/murger/herd-monitor.git
cd herd-monitor
npm i
```

## Running

```sh
npm start
```

This runs a web server (via [Parcel](https://parceljs.org/)) in parallel with a binary file which provides a few REST endpoints. macOS binary is configured as default, if you're on a different platform please change the path in the `start:api` task within the `package.json` file, into a suitable binary found within the `bin` folder.

Build it for a production environment: `npm run build`.

## Build Notes
- Create-react-app comes with various bells and whistles, to keep things concise, a custom boilerplate was used.
- In order to ensure code quality, [ESLint](https://eslint.org/) `npm run lint` and [Jest](https://jestjs.io/) (for snapshot testing) were included.
- Depending on the browser requirements, necessary [polyfills](https://www.npmjs.com/package/core-js) could be added.
- [Context API](https://reactjs.org/docs/context.html) was used (yay) to consume data along with a custom services layer to reduce the footprint of external libraries and keep everything simpler and easier to understand. I feel that this helps greatly in terms of maintenance and with onboarding new people. [Redux](https://redux.js.org/), [MobX](https://mobx.js.org/) or even
[unistore](https://www.npmjs.com/package/unistore) could also be considered for this role.
- [Preact](https://preactjs.com/) could be considered instead of React as it's snappier, given the size optimisation.
- There is support (responsivity) for mobile screens.
- Extensions are available in both [VSCode](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) and [WebStorm](https://plugins.jetbrains.com/plugin/9997-styled-components) for [styled-components](https://www.styled-components.com/) syntax highlighting.

## If I had more time...
- Would optimise re-renders due from how Context API behaves.
- Would have added more tests, unit and end to end with [Puppeteer](https://pptr.dev/) where relevant.
- Would have added type checking with [Flow](https://flow.org/) along with defaultProps.
- Would try replacing the side panel with a page via [Reach Router](https://reach.tech/router).
- Would finish the loading/error states for status updating, although this pattern is well illustrated in other ways.
