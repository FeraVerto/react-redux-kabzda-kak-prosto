import React, {useState} from 'react';
import {SelectVariant} from "./SelectVariant";

export default {
    title: "SelectVariant",
    component: SelectVariant
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <SelectVariant onChange={setValue}
                       value={value}
                       items={[
                           {value: "1", title: "Ekat"},
                           {value: "2", title: "Moskow"},
                           {value: "3", title: "Kiev"}
                       ]}
        />
    </>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <SelectVariant onChange={setValue}
                       value={value}
                       items={[
                           {value: "1", title: "Ekat"},
                           {value: "2", title: "Moskow"},
                           {value: "3", title: "Kiev"}
                       ]}
        />
    </>
}