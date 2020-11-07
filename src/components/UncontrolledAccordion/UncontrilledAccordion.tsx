import React from "react";

type AccordionProps = {
    title: string,
    collapsed: boolean
}

function UncontrilledAccordion(props: AccordionProps) {
    console.log('Accordion rendering');
    return <div>
        {props.collapsed === false && <AccordionBody />}
        <button>Click</button>
    </div>

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle( props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrilledAccordion;