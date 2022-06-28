import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { add, completed, remove } from '../../features/toDoReducer';
import style from './main.module.css'

const Main = () => {

  const toDos = useSelector((state) => state.toDos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  console.log(toDos)

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = () => {
    if (text !== "") dispatch(add(text));
    setText("");
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleCompleted = (id) => {
    dispatch(completed(id));
  };


  console.log(text);
  return (
    <main>
      <div className={style.input_cont}>
        <input type="text" onChange={(e) => handleText(e)} value={text} />
        <button className={style.add_btn} onClick={handleAddClick} >Добавить</button>
      </div>
      <div className={style.addList}>
        {toDos.map((item, id) => {
          return (
            <div key={id} className={style.todo}>
              <button
                className={item.done ? style.completedNotActive : style.completedActive}
                onClick={() => handleCompleted(id)}
              >
                ★
              </button>
              {item.text}
              <button onClick={() => handleRemove(id)}>X</button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;