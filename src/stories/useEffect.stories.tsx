import React, {useEffect, useState} from 'react'

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB - работа с локальной базой данных в браузере
        //document.getElementId
        //document.title = "User"
    }, [counter]) //прописываем зависимости, чтобы useEffect каждый раз не пеерерисовывался

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render (componentDdMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])


    return (
        <>
            Hello, {fake}{counter}
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    )
}

/*
export const setTimeoutExample = () => {
    console.log("setTimeoutExample")

    const [counter, setCounter] = useState(1)

    let [dateHourse, setHourseDate] = useState<number>(+new Date().getHours())
    let [dateMinute, setMinuteDate] = useState<number>(+new Date().getMinutes())
    let [dateSeconds, setSecondsDate] = useState<number>(+new Date().getSeconds())

    /!*let [date, setDate] = useState<Date>()*!/

    useEffect(() => {
        //setInterval берет значение из замыкания, которое было при первом запуске, а это 1,
        //useEffect() больше не регистрируется, тк как нет зависимостей и поэтому все время будет выводиться 2
        //если вместо (state) => state + 1 написать counter => counter + 1
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

        setInterval(() => {
            setHourseDate(+new Date().getHours())
        }, 1000)

        setInterval(() => {
            setMinuteDate(+new Date().getMinutes())
        }, 1000)

        setInterval(() => {
            setSecondsDate(+new Date().getSeconds())
        }, 1000)

    }, [])

    return (
        <>
            {/!*Hello, Fake: {fake} - Counter: {counter}*!/}
            {`${dateHourse} : ${dateMinute} : ${dateSeconds}`}
            {/!*{date}*!/}
            {/!*<button onClick={() => setCounter(counter + 1)}>Counter +</button>
            <button onClick={() => setFake(fake + 1)}>Fake +</button>*!/}
        </>
    )
}*/
