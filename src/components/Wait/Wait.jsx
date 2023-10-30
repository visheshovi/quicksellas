import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "110vw",
        height: "105vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <Circles
        height="90"
        width="85"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />{" "}
      <span
        style={{
          color: "green",
          fontWeight: "bolder",
          letterSpacing: "4px",
        }}
      >
        QuickSell
      </span>
    </div>
  );
};

export default Loading;
