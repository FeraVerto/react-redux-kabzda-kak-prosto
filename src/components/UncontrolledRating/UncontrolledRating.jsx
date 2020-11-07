import React, {useState} from "react";



function UncontrolledRating() {
    console.log('Rating rendering');

    let [value, setValue] = useState(0);

    return (
        <div>
            <Star setValue={setValue} selected={value > 0}/>
            <Star setValue={setValue} selected={value > 1}/>>
            <Star setValue={setValue} selected={value > 2}/>
            <Star setValue={setValue} selected={value > 3}/>
            <Star setValue={setValue} selected={value > 4}/>
        </div>
    )
}

/*type StarPropsType = {
    selected: boolean,
    setValue: (value: 0| 1 | 2 | 3 | 4 | 5) => void
}*/

const Star = (props) => {
    return <span onClick={props.setValue(5)}> {props.selected ? <b>star</b> : "star"} </span>
}

export default UncontrolledRating;