import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function toggleType(): void {
        if (questionType == "short_answer_question")
            setQuestionType("multiple_choice_question");
        else setQuestionType("short_answer_question");
    }

    function typeToText(): string {
        return questionType == "multiple_choice_question"
            ? "Multiple Choice"
            : "Short Answer";
    }

    return (
        <span>
            <Button onClick={toggleType}>Change Type</Button>
            <p>Question Type: {typeToText()}</p>
        </span>
    );
}
