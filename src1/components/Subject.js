import React from 'react';

//함수방식
const Subject = ({ subject, onChangeMode }) => {
    return (
        <header>
             <h1>
                 <a href="" onClick={(e)=>{
                     e.preventDefault();
                     onChangeMode('welcome');
                 }}>{subject.title}</a>
             </h1>
             {subject.sub}
         </header>
    );
};
// 함수방식일 때 기본값 설정 // 기본값은 프롭스가 넘어오지 않았을 때 오류를 막기위해 사용된다.
Subject.defaultProps = {
    title: '기본이름',
    sub: '기본서브타이틀'
};

export default Subject;
