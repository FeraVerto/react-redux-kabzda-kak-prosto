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

    //перерисовывается каждый раз
    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    //рисуется только при первой загрузке
    useEffect(() => {
        console.log("useEffect only first render (componentDdMount)")
        document.title = counter.toString()
    }, [])

    //зависит от counter
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


export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            //setText(state => state + e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)

        //аналог ComponentWillUnmount
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}


export const setTimeoutExamlpe = () => {

    const [text, setText] = useState('')

    useEffect(() => {
        const interval = setTimeout(() => {
            setText('3 seconds')
        }, 3000)

        //аналог ComponentWillUnmount
        return () => {
            clearInterval(interval)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}


//императорский говнокод
//не воспринимать всерьез
export const setIntervalExample = () => {
    console.log("setTimeoutExample")

    let [counter, setCounter] = useState(1)

    let [dateHourse, setHourseDate] = useState<number>(+new Date().getHours())
    let [dateMinute, setMinuteDate] = useState<number>(+new Date().getMinutes())
    let [dateSeconds, setSecondsDate] = useState<number>(+new Date().getSeconds())

    /*let [date, setDate] = useState<Date>()*/

    useEffect(() => {
        //setInterval берет значение из замыкания, которое было при первом запуске, а это 1,
        //useEffect() больше не регистрируется, тк как нет зависимостей и поэтому все время будет выводиться 2
        //если вместо (state) => state + 1 написать counter => counter + 1
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

        const hoursInterval = setInterval(() => {
            setHourseDate(+new Date().getHours())
        }, 1000)

        const minuteInterval = setInterval(() => {
            setMinuteDate(+new Date().getMinutes())
        }, 1000)

        const secondInterval = setInterval(() => {
            setSecondsDate(+new Date().getSeconds())
        }, 1000)

        return () => {
            clearInterval(hoursInterval)
            clearInterval(minuteInterval)
            clearInterval(secondInterval)
        }

    }, [])

    return (
        <>
            {`${dateHourse} : ${dateMinute} : ${dateSeconds}`}
        </>
    )
}
