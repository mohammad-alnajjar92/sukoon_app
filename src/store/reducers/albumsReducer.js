const STORE_ALBUMS = 'STORE_ALBUMS';

export const initialState = {
  albums: [],
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ALBUMS: {
      return {
        ...state,
        albums: [...action?.payload],
      };
    }

    default:
      return state;
  }
};

export default albumsReducer;
