import CoreConcept from './CoreConcept.jsx';
import {CORE_CONCEPTS} from '../data.js';


export default function CoreConcepts(){

    return (<section id="core-concepts">
              <h2>Core concepts</h2>
              <ul>
                {CORE_CONCEPTS.map((concepItem) => (<CoreConcept key={concepItem.title} {...concepItem}/>))}
                {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/> */}
                {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */} {/* using the properties name from the object  */}
              </ul>
            </section>);
}