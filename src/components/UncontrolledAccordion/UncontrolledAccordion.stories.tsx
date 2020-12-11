import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "UncontrolledAccordion",
    component: UncontrolledAccordion
}

/*const callback = action("accordion mode change event fired: clicked")*/

export const AccCollapsed = () => {
    return <UncontrolledAccordion defaultCollapsed={true} titleValue={'У нас тут весело!'}/>
}

export const AccUncollapsed = () => {
    return <UncontrolledAccordion defaultCollapsed={false} titleValue={'У нас тут весело!'}/>
}
