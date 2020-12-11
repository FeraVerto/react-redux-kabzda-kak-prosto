import React from "react";

/*/-------------------------------------------------Accordion---------------------------------------------------------------/*/

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string,
    collapsed: boolean
    /*accordionCollapsed: boolean*/
    setAccordionCollapsed: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitle setAccordionCollapsed={props.setAccordionCollapsed}
                        title={props.title}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>

}

/*/-------------------------------------------------AccordionTitle---------------------------------------------------------------/*/

export type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <div>
            <h3 onClick={(e)=>{props.setAccordionCollapsed()}}>{props.title}</h3>
        </div>

    )
}

/*/-------------------------------------------------AccordionBody---------------------------------------------------------------/*/

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {
                //Если состав массива будет меняться, то нельзя использовать index, лучше id
                props.items.map((i, index) => <li onClick={()=> props.onClick(i.value)} key={index}>{i.title}</li>)
            }
        </ul>
    )
}

export default Accordion
