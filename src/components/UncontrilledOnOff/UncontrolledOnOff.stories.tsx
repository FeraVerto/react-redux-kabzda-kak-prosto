import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff
}


export const ModeChangingOn = () => {
    return <UncontrolledOnOff defaultOn={true}/>
}

export const ModeChangingOff = () => {
    return <UncontrolledOnOff defaultOn={false}/>
}