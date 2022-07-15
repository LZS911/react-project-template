import { createSlice } from '@reduxjs/toolkit';
export interface ILayoutState {
  expandNavMenu: boolean;
}
const initialState: ILayoutState = {
  expandNavMenu: true,
};
const layout = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleNavMenuState: (state) => {
      state.expandNavMenu = !state.expandNavMenu;
    },
  },
});
export const { toggleNavMenuState } = layout.actions;
export default layout.reducer;
