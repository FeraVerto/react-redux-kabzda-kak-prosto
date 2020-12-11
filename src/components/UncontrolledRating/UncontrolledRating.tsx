import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType,
    onChange?: (value: RatingValueType) => void
}


export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('Rating rendering');

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
           {/* <Star setValue={() => {
                setValue(1);
                props.onChange = (1)
            }} selected={value > 0} value={value}/>
            <Star setValue={() => {
                setValue(2);
                props.onChange = (2)
            }} selected={value > 1} value={value}/>
            <Star setValue={() => {
                setValue(3);
                props.onChange = (3)
            }} selected={value > 2} value={value}/>
            <Star setValue={() => {
                setValue(4);
                props.onChange = (4)
            }} selected={value > 3} value={value}/>
            <Star setValue={() => {
                setValue(5);
                props.onChange = (5)
            }} selected={value > 4} value={value}/>*/}
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    value: RatingValueType,
    setValue: (value: RatingValueType) => void
}

const Star = (props: StarPropsType) => {
    return <span onClick={() => {
        props.setValue(props.value)
    }}> {props.selected ? <b>star </b> : "star "} </span>
}
