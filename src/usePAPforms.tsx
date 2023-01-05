import { ReactElement, useState } from 'react';
import axios from 'axios';
import {FormData} from './types'

export function usePAPforms(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    async function submit(formData: FormData){
       // let handleSubmit = async() => { try {axios.put('localhost:9999', FormData) } catch (err) { console.log(err); } };

       let pathResponse;
       let getPath; 

        try {
            pathResponse = await axios.put('http://localhost:9999/set-path', formData.filePath);
            const passwordResponse = await axios.put('http://localhost:9999/set-password', formData.password)
            getPath = await axios.get('http://localhost:9999/get-password');

            alert(pathResponse.data + '\n' + passwordResponse.data);
        } catch (err: any) {

            if(getPath !== pathResponse){
                alert('Error: Wrong Path >:(((')
            } else {
                alert(`Error: ${err.message}`)
            }
        }
    }


    return {
        step: steps[currentStepIndex],
        submit
    }
}