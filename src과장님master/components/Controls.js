import React from 'react';
import styled from "styled-components";

const ControlsBox = styled.div`
    margin-top:20px;text-align:center;
    button{
        padding:5px 12px;background-color:#574b90;color:#fff;font-size:16px;border-radius:3px;margin-right:10px;
    }
`;

const Controls = ({ onDelete, onMode }) => {
    return (
        <>
            <ControlsBox>
                <button onClick={() => onMode("create")}>추가</button>
                <button onClick={() => onMode("update")}>수정</button>
                <button onClick={onDelete}>삭제</button>
            </ControlsBox>
        </>
    )
};

export default Controls;