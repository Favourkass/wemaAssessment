import React from "react";

interface InputInterface{
    placeholder?:string,
    value:string;
    onChange:(e:React.FormEvent<HTMLInputElement>) => void;
}
const Input = ({placeholder,value,onChange}:InputInterface) => {
  return (
      <input style={{ border: "2px solid #CCC", height: 38, width:'100%', borderRadius:5,paddingLeft:6}} placeholder={placeholder} onChange={onChange} value={value}/>
  );
};

export default Input;
