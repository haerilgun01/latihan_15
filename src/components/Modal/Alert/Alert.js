import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
        toastStyle={{ backgroundColor: "#b81d24" }}
      />
    </div>
  );
};

export const showAlert = {
  success: (message) => {
    toast.success(message);
    
  },
  error: (message) => {
    toast.error(message);
  },
};

export default Alert;
