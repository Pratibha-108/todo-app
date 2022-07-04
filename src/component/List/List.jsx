import Button from "../Button/Button";
import Input from "../Input/Input";
import Styles from "./List.module.css";

const List = ({ 
    list,
    isDoneHandler,
    deleteHandler,
    swapItemsHandler,
    isEditingHandler,
    cancelHandler,
    editingChangeHandler,
    saveHandler
}) => {   //destructuring props ke objects se list nikali

    const listItem = list.map((task, index) => (
        <li className={Styles.itemContainer} key={index}>
            { /*Conditional Styling */}
            {!task.isEditing && (
                <span className={task.isDone ? Styles.itemDone : ' '}>
                    {task.item}
                </span>
            )}

            {task.isEditing &&(
                <Input value ={task.editingItem} 
                 inputChangeHandler={(event)=>{editingChangeHandler(event,index) }}/> 
            )}

            <span className={Styles.BtnContainer}>
                {!task.isEditing && (
                     <Button 
                     className={Styles.editIcon}
                     iconName={"icon-pencil"} 
                     disabled={task.isDone} 
                     btnClickHandler={()=>{isEditingHandler(index)}}/> 
                )}

                {task.isEditing && (
                    <>
                        <Button
                        className={Styles.saveIcon}
                        iconName={"icon-save"}  
                        btnClickHandler={()=>{saveHandler(index)}} 
                        disabled={task.editingItem.trim().length === 0}/>
                       

                        <Button 
                        className={Styles.cancelIcon}
                        iconName={"icon-remove"}  
                        btnClickHandler={()=>{cancelHandler(index)}}/>
                    </>  
                )}
               
                {/*Conditional Rendering */}

                {task.isDone && (
                    <Button
                      className={Styles.deleteIcon}
                      iconName={"icon-trash"} 
                      btnClickHandler={() => { deleteHandler(index) }} 
                      />
                )}
                {!task.isDone && (
                    <Button 
                    className={Styles.doneIcon}
                    iconName={"icon-ok"} 
                    btnClickHandler={() => { isDoneHandler(index) }} 
                    disabled={task.isEditing} />
                )}
                <Button
                    className={Styles.upIcon}
                    iconName={"icon-arrow-up"} 
                    btnClickHandler={() => { swapItemsHandler(index, index - 1) }}
                    disabled={index === 0} />

                <Button
                     className={Styles.downIcon}
                     iconName={"icon-arrow-down"} 
                    btnClickHandler={() => { swapItemsHandler(index, index + 1) }}
                    disabled={index === (list.length - 1)} />
                
                
            </span>

        </li>
    ));//array of jsx you must provide key 
    // const listitme = list.map(  (item)=> { return(<li>{item}</li>) }   )

    return (
        <div className={Styles.List}>
            <ul>
                {listItem}
            </ul>
        </div>
    );
};

export default List;