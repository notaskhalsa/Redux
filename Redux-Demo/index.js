const redux = require("redux")
const reduxLogger = require("redux-logger")

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";


function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        info: 'first redux action'
    }
}

// const initialState = {
//     numOfCakes: 10
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCream: state.numOfIceCream - 1
//         }

//         default: return state 
//     }
// }

const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state 
    }
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }

        default: return state 
    }
}

const rootReducer = combineReducers({
    cakes: CakeReducer,
    iceCream: IceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state',store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();