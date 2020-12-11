import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Select from "./Select";

export default {
    title: "Select",
    component: Select
}

const callback = action("Option mode change event fired: clicked")
const callback2 = action("Select change")

export const SelectCollapsed = () => {
    return <Select value={"Masha"}
                   selectValue={"Выбирай"}
                   setSelectValue={callback}
                   collapsed={true}
                   setCollapsedSelect={callback2}
                   items={[
                       {title: 'Dimych', value: 1},
                       {title: 'Artem', value: 2},
                       {title: 'Valera', value: 3},
                       {title: 'Viktor', value: 4},
                   ]}
    />
}

export const SelectUncollapsed = () => {
    return <Select value={"Masha"}
                   selectValue={"Выбирай"}
                   setSelectValue={callback}
                   collapsed={false}
                   setCollapsedSelect={callback2}
                   items={[
                       {title: 'Dimych', value: 1},
                       {title: 'Artem', value: 2},
                       {title: 'Valera', value: 3},
                       {title: 'Viktor', value: 4},
                   ]}
    />
}

export const SelectChanging = () => {
    let [collapsedSelect, setCollapsedSelect] = useState(true);
    let [selectValue, setSelectValue] = useState("Выбирай")

    return <Select value={"Masha"}
                   selectValue={selectValue}
                   setSelectValue={setSelectValue}
                   collapsed={collapsedSelect}
                   setCollapsedSelect={()=> setCollapsedSelect(!collapsedSelect)}
                   items={[
                       {title: 'Dimych', value: 1},
                       {title: 'Artem', value: 2},
                       {title: 'Valera', value: 3},
                       {title: 'Viktor', value: 4},
                   ]}
    />
}
