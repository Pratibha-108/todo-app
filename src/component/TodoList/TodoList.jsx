import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import Styles from "./TodoList.module.css";



const TodoList = () => {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState(" ");

  //it works as componentDidMount Life cycle method
  useEffect(() => {
    console.log('componentDidMount');
    const items = localStorage.getItem('todolist');
    // null return
    if (items) {
      console.log(JSON.parse(items));
      setList(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate',list);
    localStorage.setItem('todolist', JSON.stringify(list));
  }, [list]);

  // useEffect(() => {
  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, []);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    //console.log(value);
    setInputText(value);
  };
  const btnClickHandler = () => {
    // list.push(inputText); we cant write like this because state cant change directly
    if (inputText.trim()) {
      const items = [...list]; //clone 
      items.push({
        item: inputText,
        isDone: false,
        isEditing : false,
        editingItem : inputText
      });
      setList(items);
    }
    setInputText(" ");
  };
  const keyUpHandler = (e) => {
    if (e.keyCode === 13) {
      btnClickHandler();
    }
  };

  const isDoneHandler = (itemIndex) => {
    //console.log("isDone Clicked",itemIndex)
    const items = [...list];
    items[itemIndex].isDone = true;
    setList(items);
  };
  
  const swapItems = (initIndex , finalIndex) =>{
      const items =[...list];
      const item = items[initIndex];
      items[initIndex] = items[finalIndex];
      items[finalIndex]=item;
      setList(items);
  };

  const deleteHandler = (itemIndex) => {
    console.log("deleteHandler", itemIndex)
    const items = [...list];
    items.splice(itemIndex, 1);
    setList(items);
  };
  
  const isEditingHandler = (itemIndex)=>{
    console.log("is editing",itemIndex)
    const items = [...list];
    items[itemIndex].isEditing = true;
    setList(items);
  };

  const cancelHandler = (itemIndex) => {
    console.log('cancel');
    const items = [...list];
    items[itemIndex].isEditing = false;
    items[itemIndex].editingItem = items[itemIndex].item;
    setList(items);
  };

  const editingChangeHandler = (event,itemIndex)=> {
    const value = event.target.value;
    const items = [...list];
    items[itemIndex].editingItem = value;
    console.log("editingchange handler",value,itemIndex);
    setList(items);
  };
   
  const saveHandler = (itemIndex) =>{
    console.log("savehandler",itemIndex)
    const items = [...list];
    const value = items[itemIndex].editingItem.trim();
    if(value){
        items[itemIndex].item = value;
        items[itemIndex].editingItem = value;
        items[itemIndex].isEditing = false ;
        setList(items);
    }  
  };

  return (
    <>
      <div className={Styles.inputfield}>
        < Input
          inputChangeHandler={inputChangeHandler}
          value={inputText}
          keyUpHandler={keyUpHandler} />
        <Button
          className = {Styles.plusIcon}  
          btnClickHandler={btnClickHandler}
          iconName = {"icon-expand-alt"} />
      </div>
      <div className={Styles.listContainer }>    
        <List 
          list={list}
          isDoneHandler={isDoneHandler}
          deleteHandler={deleteHandler}
          swapItemsHandler ={swapItems}
          isEditingHandler={isEditingHandler}
          cancelHandler = {cancelHandler}
          editingChangeHandler = {editingChangeHandler}
          saveHandler = {saveHandler}/>
      </div>
    </>    
  );
};

export default TodoList;