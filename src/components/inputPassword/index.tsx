import React, {useState} from 'react';
import hidePasswords from '../../assets/icons/iconEyeOpen.png';
import showPassword from '../../assets/icons/iconEyeOpen.png';


const PasswordInput = ({placeholder, handleChange, value}:any) => {

  const [hidePassword, setHidePassword] = useState(true);

  

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const inputType = hidePassword ? 'password' : 'text';

  

  

  return (
    <div style={{display: 'flex', flexDirection: 'row', position:'relative', width:'102%'}}>
      <input
        style={{ border: "2px solid #CCC", height: 38, width:'110%', borderRadius:5,paddingLeft:6}}
        placeholder={placeholder}
        value={value}
        type={inputType}
        onChange={handleChange}
       
      />
      <div
        style={{position:'absolute', right:'5%', top:'25%'}}
        onClick={togglePasswordVisibility}>
        {hidePassword ? (
          <img src={showPassword} alt="" />
        ) : (
          <img src={hidePasswords} alt="" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;