import React from "react";
import ListComponent from "./list/ListComponent";
import BilanComponent from "./bilan/BilanComponent";
import SendMailComponent from "./email/SendMailComponent";
import FooterComponent from "./footer/FooterComponent";
function AppComponent() {
  return (
    <>
      <ListComponent />
      <BilanComponent />
      <SendMailComponent />
      <FooterComponent />
    </>
  );
}

export default AppComponent;
