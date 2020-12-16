import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListWrapper = styled.div``;

const TodoList = ({ input, todos, onDelete, onUpdate, onChange, onInsert }) => {
    return (
        <TodoListWrapper>
            {todos.map((v, i) => (
                <TodoItem
                    key={v.id}
                    data={v}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                ></TodoItem>
            ))}
        </TodoListWrapper>
    );
};

export default TodoList;
