import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
	isAuthenticated: boolean;
}
const initialState: InitialState = {
	isAuthenticated: false,
};
const userSlice = createSlice({
	name: 'users/user',
	initialState,
	reducers: {
		updateAuthStatus: (state, action) => {
			state.isAuthenticated = action.payload;
		},
	},
});

export const { updateAuthStatus } = userSlice.actions;
export default userSlice.reducer;
