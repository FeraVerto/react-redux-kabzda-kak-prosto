import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: "UncontrolledRating",
    component: UncontrolledRating
}

const callback = action("Rating changed")

export const RatingChanging = () => {
    return <UncontrolledRating defaultValue={0} onChange={callback}/>
}

export const RatingChanging1 = () => {
    return <UncontrolledRating defaultValue={1} onChange={callback}/>
}

export const RatingChanging2 = () => {
    return <UncontrolledRating defaultValue={2} onChange={callback}/>
}

export const RatingChanging3 = () => {
    return <UncontrolledRating defaultValue={3} onChange={callback}/>
}

export const RatingChanging4 = () => {
    return <UncontrolledRating defaultValue={4} onChange={callback}/>
}

export const RatingChanging5 = () => {
    return <UncontrolledRating defaultValue={5} onChange={callback}/>
}

