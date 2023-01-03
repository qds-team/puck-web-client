import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { usePAPforms } from './usePAPforms';
import { UserForm } from './UserForm';
import { useState, FormEvent } from 'react';
import { FormData } from './types';

const INITIAL_DATA: FormData = {
    filePath: '',
    password: '',
};

function App() {
    const [data, setData] = useState(INITIAL_DATA);
    function updateFields(fields: Partial<FormData>) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    }
    const { step, submit } = usePAPforms([<UserForm {...data} updateFields={updateFields} />]);

    function onSubmit() {
        submit(data);
    }

    return (
        <div
            style={{
                position: 'relative',
                background: 'white',
                border: '1px solid black',
                padding: '2rem',
                margin: '1rem',
                borderRadius: '.5rem',
                fontFamily: 'Arial',
                maxWidth: 'max-content',
            }}
        >
            <form>
                {step}
                <div
                    style={{
                        marginTop: '1rem',
                        display: 'flex',
                        gap: '.5rem',
                        justifyContent: 'flex-end',
                    }}
                >
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
