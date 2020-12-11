import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion
}

const callback = action("accordion mode change event fired: clicked")
const onClickCallback = action("some item was clicked")
export const CollapsedMode = () => <Accordion title={"Menu"}
                                              collapsed={true}
                                              setAccordionCollapsed={callback}
                                              items={[]}
                                              onClick={onClickCallback}
/>
export const UncollapsedMode = () => <Accordion title={"Users"}
                                                collapsed={false}
                                                setAccordionCollapsed={callback}
                                                items={[
                                                    {title: 'Dimych', value: 1},
                                                    {title: 'Artem', value: 2},
                                                    {title: 'Valera', value: 3},
                                                    {title: 'Viktor', value: 4},
                                                ]}
                                                onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion title={"Menu"}
                      collapsed={value}
                      setAccordionCollapsed={() => setValue(!value)}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title: 'Artem', value: 2},
                          {title: 'Valera', value: 3},
                          {title: 'Viktor', value: 4},
                      ]}
                      onClick={(value) => alert(`user with ID ${value} should be happy`)}
    />
}
