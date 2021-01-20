import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {ControlledOnOff} from "./components/ControlledOnOff/ControlledOnOff";
import {UncontrolledOnOff} from "./components/UncontrilledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";
import {SelectVariant} from "./components/SelectVariant/SelectVariant";
import {Clock} from "./components/Clock/Clock";
import {AnalogClock} from "./components/AnalogClock/AnalogClock";

function App() {
    console.log('App render')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false);
    let [collapsedSelect, setCollapsedSelect] = useState(true);
    let [selectValue, setSelectValue] = useState("Выбирай")

    let setCollapsed = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    let setSelectCollapsed = () => {
        setCollapsedSelect(!collapsedSelect)
    }

    return (

        <div>

            {/*<Select value={"ghbchgjdgf"}
                    selectValue={selectValue}
                    setSelectValue={setSelectValue}
                    collapsed={collapsedSelect}
                    setCollapsedSelect={setSelectCollapsed}
                    items={[
                        {title: 'Dimych', value: 1},
                        {title: 'Artem', value: 2},
                        {title: 'Valera', value: 3},
                        {title: 'Viktor', value: 4},
                    ]}/>
*/}

            <AnalogClock/>
            {/*<SelectVariant />*/}

            {/* <Accordion title={'Page title no collapsed'}
                       collapsed={false}
                       setAccordionCollapsed={setCollapsed}
                       items={[
                           {title: 'Dimych', value: 1},
                           {title: 'Artem', value: 2},
                           {title: 'Valera', value: 3},
                           {title: 'Viktor', value: 4},
                       ]}
                       onClick={(id) => alert(`hi  ${id}`)}
            />*/}

            {/*<OnOff onChange={setOn}/>{on.toString()}
            <ControlledOnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff/>*/}

            {/*
            <PageTitle title={'У нас тут весело! Смотри сколько фигни:'}/>
*/}

            {/* <Accordion title={'Page title collapsed'}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={setCollapsed}
                       items={[
                           {title: 'Dimych', value: 1},
                           {title: 'Artem', value: 2},
                           {title: 'Valera', value: 3},
                           {title: 'Viktor', value: 4},
                       ]}

            />*/}

            {/*<UncontrilledAccordion titleValue={'У нас тут весело!'}/>*/}

            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
