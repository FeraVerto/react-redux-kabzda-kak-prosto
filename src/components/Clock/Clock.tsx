import React, {useEffect, useState} from 'react'
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: "digital" | "analog"
}

export type DigitalViewPropsType = {
    date: Date
}



export const Clock: React.FC<PropsType> = (props) => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        //setInterval нужно зачищать
        //вызовется, когда компонент начнет умирать или перерисуется
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (
        <div>
            {props.mode === "digital"
                ? <DigitalClockView date={date}/>
                : <AnalogClockView date={date}/>
            }
        </div>
    )
}





