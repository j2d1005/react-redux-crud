import React from 'react';
import styled from "styled-components";

const Box = styled.div`
    margin-top:20px;padding:15px;background-color:#dfe6e9;
    &.create{
        background-color:rgba(99, 205, 218, 0.5);
        button{
            background-color:rgba(61, 193, 211,1.0);
        }
    }
    h2{
        font-size:18px;margin-bottom:10px;
    }
    input{
        display:block;width:100%;padding:3px 10px;border:none;background-color:rgba(255,255,255,.8);margin-bottom:15px;border-radius:2px;
    }
    textarea{
        display: block;width:100%;min-height:50px;border:none;background-color:rgba(255,255,255,.8);border-radius:2px;resize: none;margin-bottom:15px;padding:5px 10px;
    }
    .group{
        text-align:right;
    }
    button{
        padding:5px 12px;background-color:#596275;color:#fff;font-size:16px;border-radius:3px;margin-left:10px;
    }
`;

const Form = ({ title, desc, mode, blankCheck, onChangeTitle, onChangeDesc, onSubmit, onMode }) => {
    return(
        <Box className={`form ${mode}`}>
            <h2>{mode}</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" value={title} onChange={onChangeTitle} placeholder="Title" ref={blankCheck} />
                <textarea placeholder="Description" name="desc" value={desc} onChange={onChangeDesc}>
                </textarea>
                <div className="group">
                    <button type="submit">{mode === "create" ? "등록" : "수정"}</button>
                    <button onClick={() => onMode("read")}>취소</button>
                </div>
            </form>
        </Box>
    )
};

export default Form;