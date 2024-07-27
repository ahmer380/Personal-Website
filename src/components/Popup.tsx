import React from "react";

interface PopupProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "0px 20px 20px 20px",
          borderRadius: 5,
          minWidth: "300px",
          maxWidth: "50%",
          maxHeight: "90%",
          overflow: "auto",
          boxSizing: "border-box",
        }}
      >
        {children}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 15 }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
