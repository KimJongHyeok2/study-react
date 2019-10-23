import React from 'react';

const Form = ({value, onChange, onCreate, onKeyPress, onOverlap}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
      <div className="create-button" onClick={onOverlap}>
        중복제거
      </div>
    </div>
  );
};

export default Form;