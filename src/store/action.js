export const actions = {
  FETCH_VIDEO_DATA: 'FETCH_VIDEO_DATA',
  SAVE_VIDEO_DATA: 'SAVE_VIDEO_DATA',
};

export const fetchProductsData = () => ({
  type: actions.FETCH_VIDEO_DATA,
});
export const saveProductsData = (data) => ({
  type: actions.SAVE_VIDEO_DATA,
  data,
});
