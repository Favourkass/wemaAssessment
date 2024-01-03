import React from "react";
import logoIcon from "../../../assets/icons/logoIcon.png";
import Button from "../../../components/buttonTypeOne";
import Input from "../../../components/inputField";
import PasswordInput from "../../../components/inputPassword";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

export const loginRecoilState = atom({
  key:'loginRecoilState',
  default:{
    email:'',
    password:''
  }
})
const LoginPage = () => {
  const navigate = useNavigate()
  const [loginState, setLoginState] = useRecoilState(loginRecoilState)
  const handleInputChange = (field:any, value:any) => {
    setLoginState((prevData) => ({ ...prevData, [field]: value }));
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  
    if (!loginState.email || !loginState.password) {
      alert('All fields are required');
      return;
    }
  
    // Check if the email is valid
    if (!emailRegex.test(loginState.email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Check if the password is valid
    if (!passwordRegex.test(loginState.password)) {
      alert('Please enter a valid password. It should be at least 8 characters long and include a capital letter, a number, and a special character.');
      return;
    }
  
    // Proceed with navigation if all checks pass
    navigate('/');
  };
  
  

  return (
    <div style={styles.backgroundWrapper}>
      <div style={styles.headerWrapper}>
        <img src={logoIcon} alt="logo" />

        <div style={styles.rightWrapper}>
          <label>New to Xpress Rewards?</label>
          <Button
            buttonStyle={styles.buttonStyles}
            buttonText={"Sign up"}
            buttonTextStyle={styles.buttonTextStyle}
            click={() => {
              navigate('/signUp')
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
         
          //   height: '80vh',
        }}
      >
        <div style={styles.centerContainer}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={styles.header}>Welcome Back!</label>
            <label style={styles.headerSub}>
              Sign in to your Xpress reward partner’s dashboard
            </label>
            <div style={styles.lineStyle}></div>
            <label style={styles.inputHeader}>Email Address</label>
            <Input value={loginState.email} onChange={(e:any) => handleInputChange("email", e.target.value)} />
            <label style={styles.inputHeader}>Password</label>
            <PasswordInput value={loginState.password} handleChange={(e:any) => handleInputChange("password", e.target.value)} />
            <div style={{ marginTop: 10 }}>
              <label style={styles.passwordResetText}>Forgot Password?</label>
              <label style={styles.resetText}>Reset it</label>
            </div>
          </div>
          <Button
            buttonStyle={styles.buttonTwoStyles}
            buttonText={"Login"}
            buttonTextStyle={styles.buttonTwoTextStyle}
            click={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};
const styles = {
  buttonStyles: {
    width: "28%",
    height: 45,
    border: "1px solid rgba(3, 155, 240, 1)",
    borderRadius: 4,
    backgroundColor: "#F5F6F8",
  },
  lineStyle: {
    height: "2px",
    backgroundColor: "#CCC",
    width: "100%", // Adjust the width as needed
    marginTop: 25,
  },
  buttonTextStyle: {
    color: "rgba(3, 155, 240, 1)",
    fontSize: 14,
    fontWeight: "700",
  },
  backgroundWrapper: {
    backgroundColor: "#F5F6F8",
    height: "100vh",
    padding: 40,
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row" as const, // Specify the type explicitly
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightWrapper: {
    width: "20%",
    display: "flex",
    flexDirection: "row" as const, // Specify the type explicitly
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 522,
    padding: 50,
    marginTop: 160,
  },
  header: {
    fontFamily: "Inter",
    color: "#039BF0",
    fontSize: 34,
    fontWeight: "500",
  },
  headerSub: {
    display: "block",
    marginTop: 10,
    color: "#606060",
  },
  inputHeader: {
    color: "#1A1619",
    fontSize: "14",
    display: "block",
    marginTop: 40,
    marginBottom: 10,
  },
  passwordResetText: {
    color: "#606060",
  },
  resetText: {
    color: "#039BF0",
  },
  buttonTwoStyles: {
    width: "102%",
    height: 45,
    backgroundColor: "rgba(3, 155, 240, 1)",
    borderRadius: 4,
    marginTop: 20,
    border: "none",
  },
  buttonTwoTextStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
};
export default LoginPage;
