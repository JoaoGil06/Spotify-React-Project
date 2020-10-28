export const initialState = {
  token:
    "BQAGWsNHvcj5k7BO-AxkKI84fzNqvfyQkOMGlvCm-iQpvsgTg7iaPMzBJaWWiTpxuHpBjuv-Bu4NZaH97qBcwn3PvPaSzadmx7mi9yoZnsXdnLT6Tpl-NvLGSLpr90oDtGG_2dvYKcep7NAaShgt6GxlTNICBxCgwDo4V5pZ22zYlHXN",
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
