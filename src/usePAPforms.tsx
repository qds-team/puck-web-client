import { ReactElement, useState } from "react";
import axios from "axios";

export function usePAPforms(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function submit(){
       // let handleSubmit = async() => { try {axios.put('localhost:9999', FormData) } catch (err) { console.log(err); } };
        axios.put('localhost:9998', FormData)
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.log(error);
        });

    }

    function goTo(index: number){
        setCurrentStepIndex(index)
    }

    return {
        step: steps[currentStepIndex],
        submit
    }
}