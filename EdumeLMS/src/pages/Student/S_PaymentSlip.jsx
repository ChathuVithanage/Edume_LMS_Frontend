import React, { Component } from "react";

import S_Payment from "./s_component/S_Payment";
import S_Footer from "./s_component/S_Footer";
import S_Header from "./s_component/S_Header";

function S_PaymentSlip() {


  return (
    <div>
      <S_Header/>
      <S_Payment/>
      <S_Footer/>
    </div>
  );
}

export default S_PaymentSlip;
