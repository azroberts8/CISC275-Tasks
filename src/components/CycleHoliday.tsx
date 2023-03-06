import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * 🏵 - EDC Orlando Music Festival - Mid November
 * 🐞 - Firefly Music Festival - Early June
 * 🎆 - Fourth of July - Early July
 * 🏴‍☠️ - Gasparilla - Late January
 * 🎉 - Spring Break - Mid to late March
 */
type Holiday = "🏵" | "🐞" | "🎆" | "🏴‍☠️" | "🎉";

/**
 * Helper function for determining the next holiday alphabetically
 * @param holiday The current holiday emoji
 * @returns The next holiday alphabetically
 */
function nextHolidayAlpha(holiday: Holiday): Holiday {
    const order: Holiday[] = ["🏵", "🐞", "🎆", "🏴‍☠️", "🎉"];
    return order[(order.indexOf(holiday) + 1) % 5];
}

/**
 * Helper function for determining the next holiday chronologically
 * @param holiday The current holiday emoji
 * @returns The next holiday chronologically
 */
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
