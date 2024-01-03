import React, { useEffect } from "react";

const InputModal = ({ onClose, children }: any) => {
  useEffect(() => {
    const handleBackdropClick = (event: any) => {
      if (event.target.classList.contains("mmmodalsss-backdrop")) {
        onClose();
      }
    };

    document.addEventListener("click", handleBackdropClick);

    return () => {
      document.removeEventListener("click", handleBackdropClick);
    };
  }, [onClose]);
  return (
    <div>
      <div
        className="mmmodalsss-backdrop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor:
            "rgba(0, 0, 0, 0.8)" /* Update the background color with transparency */,
          zIndex: 9,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "400px",
          borderRadius: "20px",
          backgroundColor: "#e4e7ec",
          border: "1px solid black",
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default InputModal;
