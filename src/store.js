import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { print1, print2, print3 } from './exampleAddons/middleware'

const compsedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(print1, print2, print3)
    // other store enhancer if any
)

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, compsedEnhancer)

export default store