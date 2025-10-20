/* export default function TabButton(props){
    //  document.querySelector('button').addEventListener('click',()=>{
        // this is vanilla javascript
    // }) 
    function handleClick(){
        console.log("hello Vane");
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
};
 */
/* 
export default function TabButton({children, isSelected, onClick }){ //version 1
    //undefined can be empty string too
    return <li><button className={isSelected ? "active":undefined} onClick={onClick} >{children}</button></li>
}; */

export default function TabButton({children, isSelected, ...props }){ //version 1.1 using forwarding props
    //undefined can be empty string too
    return <li><button className={isSelected ? "active":undefined} {...props} >{children}</button></li>
};

/* export default function TabButton({label}){
    return <li><button>{label}</button></li>
}; */