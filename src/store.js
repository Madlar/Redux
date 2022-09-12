import { createStore } from "redux";
import rootReducer from "./reducer";
import { sayHiOnDispatch } from './exampleAddons/enhancers'

// We don't have a preloadedState value here
// so we'll pass undefined as the second argument instead.
const store = createStore(rootReducer, undefined, sayHiOnDispatch)

export default store