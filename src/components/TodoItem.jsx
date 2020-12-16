import React, { useState } from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
    border: 1px solid black;
    padding: 20px;
`;

const TodoItem = ({ data, onUpdate, onDelete }) => {
    const [editing, setEditing] = useState(false);
    const [tmpInput, setTmpInput] = useState("");

    const onFix = () => {
        setEditing(true);
    };
    return (
        <ItemWrapper>
            {editing ? (
                <>
                    <input
                        type="text"
                        defaultValue={data.text}
                        onChange={(e) => {
                            setTmpInput(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            tmpInput === ""
                                ? onUpdate(data.id, data.text)
                                : onUpdate(data.id, tmpInput);

                            setEditing(false);
                        }}
                    >
                        등록
                    </button>
                </>
            ) : data.done ? (
                <>
                    <span>{data.text}</span>
                    <button onClick={onFix}>수정</button>
                    <button
                        onClick={() => {
                            onDelete(data.id);
                        }}
                    >
                        삭제
                    </button>
                </>
            ) : (
                <>
                    <span>{data.text}</span>
                    <button onClick={onFix}>수정</button>
                    <button
                        onClick={() => {
                            onDelete(data.id);
                        }}
                    >
                        삭제
                    </button>
                </>
            )}
        </ItemWrapper>
    );
};

export default TodoItem;
