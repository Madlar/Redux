import { createStore, compose } from "redux";
import rootReducer from "./reducer";
import { 
    sayHiOnDispatch,
    includeMeaningOfLife
} from './exampleAddons/enhancers'

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

// We don't have a preloadedState value here
// so we'll pass undefined as the second argument instead.
const store = createStore(rootReducer, undefined, composedEnhancer)

export default store