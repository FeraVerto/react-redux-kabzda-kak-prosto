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