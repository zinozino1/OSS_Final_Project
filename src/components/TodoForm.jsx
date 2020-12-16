import React from "react";
import styled from "styled-components";

const TodoFormWrapper = styled.div`
    border: 1px solid black;
    paddding: 20px;
`;

const TodoForm = ({ input, onChange, onInsert }) => {
    const onClick = () => {
        onInsert();
        onChange("");
    };
    return (
        <TodoFormWrapper>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    value={input}
                />
                <button onClick={onClick}>등록</button>
            </form>
        </TodoFormWrapper>
    );
};

export default TodoForm;
