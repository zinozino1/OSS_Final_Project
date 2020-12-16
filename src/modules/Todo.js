// action type

const TODO_CHANGE = "todo/CHANGE";
const TODO_INSERT = "todo/INSERT";
const TODO_DELETE = "todo/DELETE";
const TODO_UPDATE = "todo/UPDATE";

// action creator

export const todoChange = (input) => {
    return {
        type: TODO_CHANGE,
        input,
    };
};

export const todoInsert = () => {
    return {
        type: TODO_INSERT,
    };
};

export const todoDelete = (id) => {
    return {
        type: TODO_DELETE,
        id,
    };
};

export const todoUpdate = (id, input) => {
    return {
        type: TODO_UPDATE,
        data: { id, input },
    };
};

// initial state

const initialState = {
    input: "",
    todos: [],
};

// reducer
let id = 1;
const todo = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CHANGE:
            return { ...state, input: action.input };
        case TODO_INSERT:
            return {
                ...state,
                todos: state.todos.concat({
                    id: id++,
                    text: state.input,
                    done: false,
                }),
            };
        case TODO_DELETE:
            return {
                ...state,
                todos: state.todos.filter((v, i) => {
                    return v.id !== action.id;
                }),
            };
        case TODO_UPDATE:
            return {
                ...state,
                todos: state.todos.map((v, i) => {
                    return v.id === action.data.id
                        ? { ...v, text: action.data.input }
                        : v;
                }),
            };

        default:
            return state;
    }
};
export default todo;
