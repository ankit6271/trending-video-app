import {actions} from "./action"

const initialState = {
  data: null,
};
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_VIDEO_DATA:
      return {
        ...state,
        data: action.data,
      };
    default: return state;
  }
};


