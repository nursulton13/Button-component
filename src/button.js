import React from "react";
import { toast } from "react-toastify";

const handleClick = (value, status) => {
  switch (status) {
    case "success":
      toast.success(value);
      break;
    case "danger":
      toast.error(value);
      break;
    case "warning":
      toast.warning(value);
      break;

    default:
      toast(value);
      break;
  }
};

export default function Button(props) {
  return (
    <button
      className={props.classes}
      type={props.type}
      disabled={props.disabled}
      onClick={() => handleClick(props.toastText, props.status)}
      style={{
        padding: `${props.paddingY} ${props.paddingX}`,
      }}
    >
      {props.img ? (
        <span className={`${props.classes.includes("circle") ? "" : "me-2"}`}>
          {props.img}
        </span>
      ) : (
        ""
      )}
      {props.classes.includes("circle") ? "" : props.name}
    </button>
  );
}
