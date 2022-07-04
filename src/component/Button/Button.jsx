import Icon from "../Icon/Icon";


const Button = ({btnClickHandler,disabled,className,iconName}) => {
    return(
       <button 
       className={className} 
       onClick={btnClickHandler} disabled={disabled}>
        <Icon
            iconName={iconName}

        />
       </button>
    );
};

export default Button;