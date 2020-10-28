export const initialState = {
  token:
    "BQDjyVmMpDn7XW7dHzLU1r0bEaLIxwpRMU4YzmleUIUVRt6nRqb67klDHOR_ple63qvhL8ZAwtlgrRTC-JfDU9lfubTQqwQYwRY2B4LqsyASIlhJhpM4rHwuRWDykc1zOav-nqt8F7ZLnnmqJhjceaj2bE0iZp8GhtYUTblxL_cfqKh7",
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
