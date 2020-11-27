import { combineReducers } from "redux";

const likes = (state = [], action) => {
  switch (action.type) {
    case "LIKE":
      // return [
      //   ...state,
      //   {
      //     id: action.payload.id
      //   }
      // ];
      return [...state, action.payload.id];
    case "UNLIKE":
      return [
        ...state.slice(0, state.indexOf(action.payload)),
        ...state.slice(state.indexOf(action.payload) + 1)
      ];

    default:
      return state;
  }
};

export default combineReducers({ likes });
