import React, {useEffect, useState} from 'react'

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    //можно положить в отдельную папку
    const formatClock = (time: number) => {
        return time < 10 ? "0" + time : time
    }

    return (
        <div>
            <span>{formatClock(date.getHours())}</span>:
            <span>{formatClock(date.getMinutes())}</span>:
            <span>{formatClock(date.getSeconds())}</span>
        </div>
    )
}