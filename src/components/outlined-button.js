import { React, useState } from "react";

export default function OutlinedButton(props) {
    const [isFilled, setisFilled] = useState(false);
    return (
        <button
            onClick={() => {
                window.location.href =
                    "https://api.whatsapp.com/send?phone=5551993712339";
            }}
            style={{
                padding: 12,
                color: isFilled ? "#fff" : "#2e1aa9",
                border: `2px solid ${isFilled ? "rgb(132 7 159)" : "#2e1aa9"}`,
                borderRadius: 4,
                cursor: "pointer",
                background: isFilled ? "rgb(132 7 159)" : "#fff",
                transition: "0.2s",
                fontSize: 18,
            }}
            onMouseEnter={() => {
                setisFilled(!isFilled);
            }}
            onMouseLeave={() => {
                setisFilled(!isFilled);
            }}
        >
            {props.text}
        </button>
    );
}
