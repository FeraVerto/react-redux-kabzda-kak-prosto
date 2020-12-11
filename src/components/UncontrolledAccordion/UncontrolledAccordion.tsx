import React, {useReducer} from "react";
import {reducer, SET_COLLAPSED} from "./reducer";


type AccordionProps = {
    titleValue: string
    defaultCollapsed?: boolean
}


export function UncontrolledAccordion(props: AccordionProps) {
    console.log('Accordion rendering');

/*
    let [collapsed, setCollapsed] = useState(props.defaultCollapsed ? props.defaultCollapsed : false );
*/
    let [state, dispatch] = useReducer(reducer, props.defaultCollapsed ? {collapsed: props.defaultCollapsed} : {collapsed: false} );

    return (
        <div>
            <AccordionTitle onClick={() => {
                dispatch({type: SET_COLLAPSED});
            }} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
            <button>Click
            </button>
        </div>
    )
}

export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={(e) => {props.onClick()}}>{props.title}</h3>
    )
}

export function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
