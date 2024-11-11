

//Reducer function to manage the store state.
function AppReducer(state = {count: 0}, action) {
    switch (action.type) {
        case 'ADD':
            return {count:state.count + 1}; //increases tally by 1
        case 'SUBTRACT':
            return {count:state.count - 1}; //decreases tall by 1
        case 'RESET':
            return {count: 0} //resets the state to 0
        default:
            return state; // returns current state if the action type is not valid
    }
}


//creates state store that manages tally app state 
function createStore(reducer) {
    let state; // var to hold the state of the app
    let listeners = []; //. var to hold the list of listeners that be alerted when the state changes 

    //retrieve current state 
    const getState = () => state;
    
    // subscribe to state changes
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {                 // Returns an unsubscribe function.
            listeners = listeners.filter(l => l !== listener);
        };
    };

    //carries out actions to update the state
    const dispatch = (action) => {
        state = reducer(state, action); // Updates the state using the reducer.
        listeners.forEach(listener => listener()) // Notifies all listeners.
    };

    // Initialize the state by dispatching an empty action
    dispatch({});

    return { getState, subscribe, dispatch };

}


export {AppReducer, createStore}

/*//TallyApp store is created
const store = createStore(TallyAppReducer);
console.log(store.getState())

function currentState(actions = []) {
    actions.forEach(action => {
        if (action && action.type) {
            store.dispatch(action);
        } else {
            console.warn("Invalid action:", action);
        }});
    const store = createStore(TallyAppReducer);
    console.log('Current state:', store.getState());
}

// Run scenarios
currentState();
currentState([{ type: ADD }, { type: ADD }]);
currentState([{ type: SUBTRACT }]);
currentState([{ type: RESET }]);
*/



//Test case 

//console.log(store.getState())


/*store.dispatch({ type: ADD }); 
store.dispatch({ type: ADD }); 
console.log(store.getState())



store.dispatch({ type: SUBTRACT }); 
console.log(store.getState())

store.dispatch({ type: RESET }); 
console.log(store.getState())
*/