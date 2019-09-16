import React from 'react';
import styled from "styled-components";

const TabBox = styled.div`
    margin-bottom:20px;
    .tab_nav{
        display:flex;padding:15px 0 20px;
        button{
            padding:3px 10px;background-color:#fab1a0;color:#fff;font-size:18px;border-radius:3px;margin-right:10px;
        }
        button.active{
            background-color:#ff7675;
        }
    }
    .tab_content{
        background-color:#dfe6e9;
        padding:40px 15px;
        min-height:100px;
        border-radius:3px;
        h2{
            margin-bottom:10px;
        }
    }
    .welcome{
        margin:30px 0;
    }
`;

const Tab = ({ current, contents, onSelect }) => {
    return(
        <TabBox>
            <ul className="tab_nav">
                { contents.map((item, index) => {
                    return (
                    <li key={item.id}>
                        <button onClick={() => onSelect(index)} className={index === current ? "active" : ""}>
                            {item.title}
                        </button>
                    </li>)
                })}
            </ul>
            <div className="tab_content">
                <h2>{contents[current].title}</h2>
                <p>{contents[current].desc}</p>
            </div>
        </TabBox>
    )
};

export default Tab;