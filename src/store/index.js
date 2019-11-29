
import { createStore } from "redux";

const EDIT_CLICK = 'edit_click';
const CHANGING_VALUE = 'changing_value';
const SAVE_CHANGES = 'save_changes';


const initialState = {
  currentId: null,
  clothList: ['Apron', 'Belt', 'Cardigan', 'Dress', 'Earrings', 'Fur coat', 'Gloves', 'Hat']
    .map((name) => ({id: name, name})),
  editValue: '',
};

export const editClick = (id) => ({
  type: EDIT_CLICK,
  id
});

export const valueChanger = (value) => ({
  type: CHANGING_VALUE,
  value,
});

export const clothChanger = (id) => ({
  type: SAVE_CHANGES,
  id,
});

function reducer (state, action) {
  switch(action.type) {
    case EDIT_CLICK:
      const currentItem = state.clothList.find(cloth => cloth.id === action.id);

      return ({
        ...state,
        currentId: action.id,
        clothList: [...state.clothList],
        editValue: currentItem.name,
      });
    case CHANGING_VALUE:

      return ({
        ...state,
        editValue: action.value,
      });
    case SAVE_CHANGES:

      return ({
        ...state,
        clothList:  !state.editValue.length
          ?
          [...state.clothList].filter(cloth => cloth.id !== action.id)
          :
          [...state.clothList].map(cloth => cloth.id === action.id ? ({
          ...cloth,
          name: [state.editValue],
        }) : cloth),
        editValue: '',
        currentId: null,
      });
    default:
      return state;
  }
}

export const store = createStore(reducer, initialState);


