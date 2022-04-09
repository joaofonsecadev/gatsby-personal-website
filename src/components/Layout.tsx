import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main-footer">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
