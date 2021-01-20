import React from "react";
import {DigitalViewPropsType} from "./Clock";

//можно положить в отдельную папку
export const formatClock = (time: number) => {
    return time < 10 ? "0" + time : time
}

export const DigitalClockView: React.FC<DigitalViewPropsType> = ({date}) => {
    return <>
        <span>{formatClock(date.getHours())}</span>:
        <span>{formatClock(date.getMinutes())}</span>:
        <span>{formatClock(date.getSeconds())}</span>
    </>
}