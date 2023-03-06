import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🏵" | "🐞" | "🎆" | "🏴‍☠️" | "🎉";

function nextHolidayAlpha(holiday: Holiday): Holiday {
    const order: Holiday[] = ["🏵", "🐞", "🎆", "🏴‍☠️", "🎉"];
    return order[(order.indexOf(holiday) + 1) % 5];
}

function nextHolidayChron(holiday: Holiday): Holiday {
    const order: Holiday[] = ["🏴‍☠️", "🎉", "🐞", "🎆", "🏵"];
    return order[(order.indexOf(holiday) + 1) % 5];
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🏵");
    return (
        <span>
            <Button onClick={() => setHoliday(nextHolidayAlpha(holiday))}>
                Next Alphabetically
            </Button>
            <Button onClick={() => setHoliday(nextHolidayChron(holiday))}>
                Next in Year
            </Button>
            <p>Holiday: {holiday}</p>
        </span>
    );
}
