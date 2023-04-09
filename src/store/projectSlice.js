import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	footballCards: [],
	otherProducts: [],
	cartItems: [],
	extraServices: [],
	clubs: [],
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setUsers: (state, action) => {
			if (action.payload.users === null) {
				state.users = [];
			} else {
				state.users = action.payload.users;
			}
		},
		setPosts: (state, action) => {
			if (action.payload.posts === null) {
				state.posts = [];
			} else {
				state.posts = action.payload.posts;
			}
		},
		setStudioss: (state, action) => {
			if (action.payload.studios === null) {
				state.studios = [];
			} else {
				state.studios = action.payload.studios;
			}
		},
		setClubs: (state, action) => {
			if (action.payload.clubs === null) {
				state.clubs = [];
			} else {
				state.clubs = action.payload.clubs;
			}
		},
	},
});

export const { setClubs, setStudioss, setPosts, setUsers } =
	projectSlice.actions;

export default projectSlice.reducer;
