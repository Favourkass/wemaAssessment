import React from "react";

interface ButtonInterface {
  buttonStyle: any;
  click:any;
  buttonTextStyle: any;
  buttonText: string;
  disabled?: any;
}
const Button = ({
  buttonText,
  buttonTextStyle,
  buttonStyle,
  click,
  disabled,
}: ButtonInterface) => {
  return (
    <button style={buttonStyle} onClick={click}>
      <label style={buttonTextStyle}>{buttonText}</label>
    </button>
  );
};

export default Button;
