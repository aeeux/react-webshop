import React from "react";

function Layout({ children }) {
  return (
    <>
      <div className="max-w-5xl mx-auto">{children}</div>
    </>
  );
}

export default Layout;
