### Build Notes
- create-react-app comes with various bells and whistles attached, to keep
things concise, a custom boilerplate was used.
- Depending on the browser requirements, necessary polyfills could be added.
- Preact could be considered instead of React as it's snappier, given the size
optimisation.
- Context API was used to consume data and custom a services layer to reduce the
footprint of external libraries and keep everything simpler, easier to
understand. This helps greatly in terms of maintenance and onboarding new
people.
- Would consider using Dinero if we'd need to work with money.
