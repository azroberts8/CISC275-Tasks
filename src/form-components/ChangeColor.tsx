import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        key={color}
                        name="color"
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        checked={currentColor == color}
                        onChange={(e) => setCurrentColor(e.target.value)}
                    />
                ))}
                <p>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: currentColor }}
                    >
                        {currentColor}
                    </span>
                    .
                </p>
            </div>
        </div>
    );
}
