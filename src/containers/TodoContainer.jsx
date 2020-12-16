import React from "react";
import { connect } from "react-redux";
import {
    todoChange,
    todoInsert,
    todoDelete,
    todoUpdate,
} from "../modules/Todo";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoContainer = ({
    input,
    todos,
    todoChange,
    todoInsert,
    todoDelete,
    todoUpdate,
}) => {
    return (
        <div>
            <TodoForm
                input={input}
                onChange={todoChange}
                onInsert={todoInsert}
            ></TodoForm>
            <TodoList
                input={input}
                todos={todos}
                onDelete={todoDelete}
                onUpdate={todoUpdate}
                onChange={todoChange}
                onInsert={todoInsert}
            ></TodoList>
        </div>
    );
};
export default connect(
    (state) => ({
        input: state.todo.input,
        todos: state.todo.todos,
    }),
    { todoChange, todoInsert, todoDelete, todoUpdate },
)(TodoContainer);
