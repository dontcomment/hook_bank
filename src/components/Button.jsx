import React from "react";

const Button = ({ styles }) => {
  return (
    <div type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] cursor-pointer transition-all ease-in-out delay-150 hover:scale-110`}>
      Get Started
    </div>
  )
};

export default Button;
