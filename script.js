import { AppReducer, createStore} from "./store.js"
//TallyApp store is created
const store = createStore(AppReducer);

console.log(store.getState())

store.subscribe(()=>{ 
    console.log('state change occurred', store.getState());
})
// function that dispatches a series of actions on the store and logs the resulting state
function currentState(actions = []) {
    actions.forEach(action => {
            store.dispatch(action)});
    console.log('Current state:', store.getState());
}

// Run scenarios
currentState();
currentState([{ type: 'ADD' }, { type: 'ADD' }]);
currentState([{ type: 'SUBTRACT' }]);
currentState([{ type: 'RESET' }]);




//workaround if currentState doesnt work

//console.log(store.getState())


/*store.dispatch({ type: ADD }); 
store.dispatch({ type: ADD }); 
console.log(store.getState())



store.dispatch({ type: SUBTRACT }); 
console.log(store.getState())

store.dispatch({ type: RESET }); 
console.log(store.getState())
*/