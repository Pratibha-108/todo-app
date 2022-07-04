const Input = (props) => {
    return(
       <input 
            type ="text"  
            onChange={props.inputChangeHandler}
            onKeyUp={props.keyUpHandler}
            value={props.value} />
    );
};

export default Input;