
export default function CoreConcept({image,title,description,type="defaultexample"}){// destructuring
  return (
  <li>
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
} 

/* 
  function CoreConcept({...concept}){// grouping
  return (
  <li>
    <img src={concept.image} alt={concept.title}/>
    <h3>{concept.title}</h3>
    <p>{concept.description}</p>
  </li>
  );
  } */

/* function CoreConcept(props){
  return (
  <li>
    <img src={props.image} alt={props.title}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
  );
} */