import uuid from 'uuid';

// initialData
const initialData = {
  mode: 'view',
  targetTodo: null,
  list: [],
};

// action
const ADD = 'todo/add';
const REMOVE = 'todo/remove';
const EDIT = 'todo/edit';
const EDITDONE = 'todo/editdone';
const TOGGLE_DONE = 'todo/tododone';
const CHANGE_MODE = 'todo/changemode';

// reducer
const reducer = (prevState = initialData, action) => {
  console.log(prevState, action);
  switch (action.type) {
    case ADD:
      return {
        ...prevState,
        list: [{id: uuid.v4(), ...action.payload}, ...prevState.list],
      };
    case REMOVE:
      return {
        ...prevState,
        list: prevState.list.filter(todo => todo.id !== action.payload),
      };
    case EDIT:
      return {
        ...prevState,
        targetTodo: action.payload,
      };
    case EDITDONE:
      return {
        ...prevState,
        list: prevState.list.map(todo => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
        targetTodo: null,
      };
    case TOGGLE_DONE:
      return {
        ...prevState,
        list: prevState.list.map(todo => {
          if (todo.id === action.payload) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    case CHANGE_MODE:
      return {
        ...prevState,
        mode: prevState.mode === 'view' ? 'edit' : 'view',
      };
    default:
      return prevState;
  }
};

// dispatch
export const addTodo = todo => ({type: ADD, payload: todo});
export const removeTodo = id => ({type: REMOVE, payload: id});
export const editTodo = todo => ({type: EDIT, payload: todo});
export const editDone = todo => ({type: EDITDONE, payload: todo});
export const toggleDone = id => ({type: TOGGLE_DONE, payload: id});
export const changeMode = () => ({type: CHANGE_MODE});

export default reducer;
