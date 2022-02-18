import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function IconWithText(props) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: props.isCenter ? "center" : "",
            }}
        >
            {props.icon}
            &nbsp;{props.title}
        </div>
    );
}
