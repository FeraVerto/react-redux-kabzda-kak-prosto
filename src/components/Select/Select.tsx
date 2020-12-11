import React, {ChangeEvent, FormEvent} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type RatingPropsType = {
    value: any
    collapsed: boolean
    setCollapsedSelect: () => void
    items: ItemType[]
    selectValue: any
    setSelectValue: (selectValue: any) => void
}

function Select(props: RatingPropsType) {

    let changeValueSelect = (e: FormEvent<HTMLDivElement>) => {
        props.setSelectValue(e.currentTarget.innerText)
        props.setCollapsedSelect()
    }

    return (
        <div className={s.select_block}>
            <div className={s.select} onClick={() => {
                props.setCollapsedSelect()
            }}>{props.selectValue}</div>
            <div className={s.option_block}>
                {!props.collapsed &&
                <Option selectValue={props.selectValue} collapsed={props.collapsed} items={props.items} onClick={changeValueSelect}/>}
            </div>
        </div>
    )
}

type OptionType = {
    onClick: (e: FormEvent<HTMLDivElement>) => void
    items: ItemType[]
    collapsed: boolean
    selectValue: any
}

function Option(props: OptionType) {
    console.log(props)
    let classNameOptionBlock = !props.collapsed ? `${s.option_block_none}`  : `${s.option_block}`
    return (
        <div className={classNameOptionBlock}>
            {props.items.map(i => <div className={s.option} onClick={props.onClick}>{i.title}</div>)}
        </div>
    )
}

export default Select;