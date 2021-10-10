## Person List

Gets Starwars Person List from https://graphql.org/swapi-graphql and saves it to state. ALso saves request loading state.

## Selectors

### `useLoadingState`

Returns request loading state from the store.

```javascript
import {useLoadingState} from 'features/person';

// Needs to be run from inside React component or other hook.
const {isLoading, hasError, isFulfilled} = useLoadingState();
```

### `usePersonList`

Returns random number value from the store

```javascript
import {usePersonList} from 'features/person';

// Needs to be run from inside React component or other hook.
const number = usePersonList();
```

## Action creators

### `useGetPersonList`

Performs Graph query to get person list from https://graphql.org/swapi-graphql. Records person list and loading state data to the store;

```javascript
import {useGetPersonListQuery} from 'features/person';

// Needs to be run from inside React component or other hook.
const getNumber = useGetPersonListQuery();
useEffect(() => {
  getPersonList();
  ...
}, []);
```

