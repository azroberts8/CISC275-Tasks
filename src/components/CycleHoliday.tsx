import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * 🏵 - EDC Orlando Music Festival
 * 🐞 - Firefly Music Festival
 * 🎆 - Fourth of July
 * 🏴‍☠️ - Gasparilla
 * 🎉 - Spring break
 */
type Holiday = "🏵" | "🐞" | "🎆" | "🏴‍☠️" | "🎉";

/**
 * Given the current holiday this will return the next holiday when sorted alphabetically
 * @param holiday The current holiday emoji
 * @returns The next holiday alphabetically
 */
function nextHolidayAlpha(holiday: Holiday): Holiday {
    const order: Holiday[] = ["🏵", "🐞", "🎆", "🏴‍☠️", "🎉"];
    return order[(order.indexOf(holiday) + 1) % 5];
}

/**
 * Given the current holiday this will return the next holiday when the holidays are sorted chronologically
 * @param holiday The current holiday emoji
 * @returns then ext holiday emoji chronologically
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
