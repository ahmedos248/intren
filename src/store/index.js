import { createStore } from 'redux';
const initState = { value: 0 };
const counterReducer = (state = initState, action) => {
    return state;
};

const store = createStore(counterReducer);
export default store;