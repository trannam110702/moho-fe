import React, { useEffect } from "react";
import LoadingWrapper from "./style";

const Loading = (props) => {
  return (
    <LoadingWrapper loading={props.loading} className="container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
