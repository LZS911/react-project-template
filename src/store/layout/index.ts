import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CONSTANT from '../../common/constant';
export interface ILayoutState {
  expandNavMenu: boolean;
  siderWidth: number;
}
const initialState: ILayoutState = {
  expandNavMenu: false,
  siderWidth: CONSTANT.SIDER_WIDTH,
};
const layout = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleNavMenuState: (state) => {
      state.expandNavMenu = !state.expandNavMenu;
    },
    changeSiderWidth: (state, action: PayloadAction<number>) => {
      state.siderWidth = action.payload;
    },
    resetLayoutState: () => initialState,
  },
});
export const { toggleNavMenuState, changeSiderWidth, resetLayoutState } = layout.actions;
export default layout.reducer;
