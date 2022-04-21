import { combineReducers, configureStore, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import user_reducer from './user';

import logger from 'redux-logger'


const rootReducer = combineReducers({
  user: user_reducer,
});


export type RootState = ReturnType<typeof rootReducer>;


/* const store2 = configureStore(
  {
  reducer: {
    user: rootReducer
  },
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: "myCustomApiService",
      },
      serializableCheck: false,
    }),
}
); */

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store;