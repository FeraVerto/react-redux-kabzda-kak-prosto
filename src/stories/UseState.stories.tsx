import React, {useState} from 'react';

export default {
    title: "useState demo",
}

function generateDate() {
    return 1
}

export const Example = () => {
    //использовать при тяжелом подсчете
    const [counter, setCounter] = useState<number>(generateDate)// [0, f(newValue)]

    return <>
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </>
}

