import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from "./OnOff";


export default {
    title: "OnOff",
    component: OnOff
}

export const ModeChanging = () => {
    let [on, setOn] = useState(false);
    return <OnOff defaultOn={true} onChange={()=>{setOn(false)}}/>
}

export const ModeChanging2 = () => {
    let [on, setOn] = useState(true);
    return <OnOff defaultOn={false} onChange={()=>{setOn(true)}}/>
}
