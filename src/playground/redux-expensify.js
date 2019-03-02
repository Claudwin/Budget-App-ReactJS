import {createStore, combineReducers} from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

const filtersReuducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReuducer = (state = filtersReuducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;  }
}
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReuducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'jbvjnjsnjsd',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //Date or amount
    startDate: undefined,
    endDate: undefined
  }
};