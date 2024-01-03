import React, { useEffect, useState } from "react";
import logoIcon from "../../../assets/icons/logoIcon.png";
// import upload from "../../../assets/icons/upload.png";
import Button from "../../../components/buttonTypeOne";
import Input from "../../../components/inputField";
import Select from "../../../components/selectComponent";
// import ImageUploader from "../../../components/imageUploader";
import PasswordInput from "../../../components/inputPassword";
import { signUpState } from "../signUp";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import InputModal from "../../../components/centerModal";
import pendingIcon from "../../../assets/icons/iconPending.png";



export const resetSignUpState = (setSignUpData:any) => {
    setSignUpData((prevData:any) => ({
      ...prevData,
      businessName: '',
      businessEmail: "",
      businessPhoneNumber: '',
      businessCategory: '',
      accountNumber: '',
      logo: '',
      houseNumber: '',
      accountNo: "",
      street: '',
      city: '',
      state: '',
      contactName: '',
      contactPhoneNumber: '',
      contactEmailAddress: '',
      password: '',
      confirmPassword: '',
    }));
  };


export const loadStoredSignUpData = () => {
  const storedData = localStorage.getItem("signUpData");
  return storedData ? JSON.parse(storedData) : {};
};
const SignUpPageTwo = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  useEffect(() => {
    // Load stored data when the component mounts
    const storedData = loadStoredSignUpData();
    setSignUpData((prevData) => ({ ...prevData, ...storedData }));
  }, [setSignUpData]);

  const handleInputChange = (field: any, value: any) => {
    setSignUpData((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleNextClick = () => {
    // Save sign-up data to local storage
    localStorage.setItem("signUpData", JSON.stringify(signUpData));
    if (
      !signUpData.houseNumber ||
      !signUpData.street ||
      !signUpData.city ||
      !signUpData.state ||
      !signUpData.contactName ||
      !signUpData.contactPhoneNumber ||
      !signUpData.contactEmailAddress ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      alert("Please fill out all fields");
      return;
    }

    setShowModal(true);
  };
  const handleSelectChange = (
    field: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setSignUpData((prevData) => ({ ...prevData, [field]: value }));
  };
  return (
    <div style={styles.backgroundWrapper}>
      <div style={styles.headerWrapper}>
        <img src={logoIcon} alt="logo" />

        <div style={styles.rightWrapper}>
          <label>Already have an account?</label>
          <Button
            buttonStyle={styles.buttonStyles}
            buttonText={"Sign in"}
            buttonTextStyle={styles.buttonTextStyle}
            click={() => {
              navigate("/login");
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
            <label style={styles.header}>Welcome to Xpress Rewards</label>
            <label style={styles.headerSub}>
              Complete the form below to get started
            </label>
            <div style={styles.lineStyle}></div>
            <label style={styles.inputHeaderTwo}>Business Address</label>
            <div style={styles.twoFieldWrapper}>
              <div style={{ width: "35%" }}>
                <label style={styles.inputHeader}>House Number</label>
                <Input
                  value={signUpData.houseNumber}
                  onChange={(e: any) =>
                    handleInputChange("houseNumber", e.target.value)
                  }
                />
              </div>
              <div style={{ width: "60%" }}>
                <label style={styles.inputHeader}>Street</label>
                <Input
                  value={signUpData.street}
                  onChange={(e: any) =>
                    handleInputChange("street", e.target.value)
                  }
                />
              </div>
            </div>
            <div style={styles.twoFieldWrapper}>
              <div style={{ width: "44%" }}>
                <label style={styles.inputHeader}>City</label>
                <Input
                  value={signUpData.city}
                  onChange={(e: any) =>
                    handleInputChange("city", e.target.value)
                  }
                />
              </div>
              <div style={{ width: "52%" }}>
                <label style={styles.inputHeader}>State</label>
                <Select
                  value={signUpData.state}
                  options={options}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    handleSelectChange("state", event)
                  }
                />
              </div>
            </div>
            <label style={styles.inputHeaderTwo}>
              Contact Person Information
            </label>
            <label style={styles.inputHeader}>Contact Name</label>
            <Input
              value={signUpData.contactName}
              onChange={(e: any) =>
                handleInputChange("contactName", e.target.value)
              }
            />

            <label style={styles.inputHeader}>Contact Phone Number</label>
            <Input
              value={signUpData.contactPhoneNumber}
              onChange={(e: any) =>
                handleInputChange("contactPhoneNumber", e.target.value)
              }
            />
            <label style={styles.inputHeader}>Contact Email Address</label>
            <Input
              value={signUpData.contactEmailAddress}
              onChange={(e: any) =>
                handleInputChange("contactEmailAddress", e.target.value)
              }
            />
            <label style={styles.inputHeaderTwo}>Password</label>
            <label style={styles.inputHeader}>Password</label>
            <PasswordInput
              value={signUpData.password}
              handleChange={(e: any) =>
                handleInputChange("password", e.target.value)
              }
            />
            <label style={styles.inputHeader}>Confirm Password</label>
            <PasswordInput
              value={signUpData.confirmPassword}
              handleChange={(e: any) =>
                handleInputChange("confirmPassword", e.target.value)
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <div style={{ width: "35%" }}>
              <Button
                buttonStyle={styles.buttonTwoStyles}
                buttonText={"Submit"}
                buttonTextStyle={styles.buttonTwoTextStyle}
                click={handleNextClick}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginTop: 15,
                  marginLeft: 10,
                  color: "#808080",
                }}
              >
                Step 2 of 2
              </label>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <InputModal
          children={
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: 10,
              }}
            >
              <img src={pendingIcon} alt="" />
              <label
                style={{
                  color: "#F90",
                  fontSize: "30px",
                  fontWeight: "bold",
                  display: "block",
                  marginTop: 20,
                }}
              >
                Pending
              </label>
              <text
                style={{ textAlign: "center", width: "70%", marginTop: "20px" }}
              >
                Your registration is awaiting approval from our partnership team
              </text>
              <Button
                buttonStyle={{
                  ...styles.buttonTwoStyles,
                  width: "80%",
                  marginTop: 30,
                }}
                buttonText={"Done"}
                buttonTextStyle={styles.buttonTwoTextStyle}
                click={() => {
                  setShowModal(false);
                  resetSignUpState(setSignUpData); 
                  navigate("/login");
                }}
              />
            </div>
          }
        />
      )}
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
  buttonTextStyle: {
    color: "rgba(3, 155, 240, 1)",
    fontSize: 14,
    fontWeight: "700",
  },
  backgroundWrapper: {
    backgroundColor: "#F5F6F8",
    // height: "100vh",
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
    marginTop: 60,
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
    marginTop: 20,
    marginBottom: 10,
  },
  passwordResetText: {
    color: "#606060",
  },
  resetText: {
    color: "#039BF0",
  },
  buttonTwoStyles: {
    width: "100%",
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
  inputHeaderTwo: {
    marginTop: 40,
    color: "#039BF0",
    fontSize: "14",
    display: "block",
    fontWeight: "500",
  },
  divStyle: {
    border: "2px dashed #ABA7AF", // Adjust the width and color as needed
    width: "100%",
    height: "250px", // Adjust the height as needed
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column" as const,
  },
  lineStyle: {
    height: "2px",
    backgroundColor: "#CCC",
    width: "100%", // Adjust the width as needed
    marginTop: 25,
  },
  uploadText: {
    display: "block",
    marginTop: 10,
    marginBottom: 20,
    color: "#4B3A5A",
  },
  twoFieldWrapper: {
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "space-between",
  },
};
export default SignUpPageTwo;
