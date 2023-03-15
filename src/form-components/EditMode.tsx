import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

interface User {
    userName: string;
    isStudent: boolean;
    setUserName: (u: string) => void;
    setIsStudent: (s: boolean) => void;
}

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="editingCheck"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                <div>
                    {editMode ? (
                        <EditForm
                            userName={userName}
                            setUserName={setUserName}
                            isStudent={isStudent}
                            setIsStudent={setIsStudent}
                        />
                    ) : (
                        <DefaultText
                            userName={userName}
                            isStudent={isStudent}
                            setUserName={setUserName}
                            setIsStudent={setIsStudent}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

function EditForm({
    userName,
    setUserName,
    isStudent,
    setIsStudent
}: User): JSX.Element {
    return (
        <div>
            <Form.Group controlId="nameInput">
                <Form.Label>User Name: </Form.Label>
                <Form.Control
                    value={userName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserName(e.target.value)
                    }
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="is-student"
                label="Is Student"
                checked={isStudent}
                onChange={() => setIsStudent(!isStudent)}
            />
        </div>
    );
}

function DefaultText({ userName, isStudent }: User): JSX.Element {
    return <div>{`${userName} is ${isStudent ? "" : "not "}a student.`}</div>;
}
