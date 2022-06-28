import { createAction, createReducer } from "@reduxjs/toolkit";



const initialState = {
  toDos: [{
    text: 'Закончить текущую таску',
    favorite: false,
  },
  {
    text: 'Закончить текущую таску',
    favorite: false,
  },
  {
    text: 'Закончить текущую таску',
    favorite: false,
  },
  {
    text: 'Закончить текущую таску',
    favorite: false,
  },
  ]
};

export const add = createAction("add");
export const remove = createAction("remove");
export const completed = createAction("completed");

const todoReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(add, (state, action) => {
    state.toDos.push({
      text: action.payload,
      favorite: false,
    })
  })
  .addCase(remove, (state, action) => {
    state.toDos = state.toDos.filter((item, index) => 
      index !== action.payload
    )
  })
  .addCase("completed", (state, action) => {
    state.toDos[action.payload].done = !state.toDos[action.payload].done;
  });
});

export default todoReducer;