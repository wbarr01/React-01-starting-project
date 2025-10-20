import { useState } from 'react';// use in name are hooks
import {EXAMPLES} from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples(){

    const [selectedTopic, setSelectedTopic] =useState();//only call inside react componens function and top level or by other hook, not inside another function

    function handleSelect(selectedButon){
    //selectedButton => 'components','jsx','',''
    setSelectedTopic(selectedButon);
    console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p> ;

    if(selectedTopic){
        tabContent =  (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
            </div>
            )
    }
    const buttons = (<>
            <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleSelect('state')}>State</TabButton>
            {/* <TabButton label="Components"/> */}
           </>);

    return ( 
        <Section title="Examples" id="examples">
           {/* instead of "menu" (html element) can pass custom component like {Section} */}
          <Tabs ButtonsContainer="menu" 
                buttons={buttons}> 
            {tabContent} 
          </Tabs>
          {/*  {!selectedTopic && <p>Please select a topic.</p> }
           {selectedTopic  && (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
           </div>
          )} */}
        </Section>)
}