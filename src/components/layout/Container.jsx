import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-2 py-4 md:py-10 lg:py-0">
        {children}
      </div>
    </>
  );
};

export default Container;
