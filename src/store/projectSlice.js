import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	footballCards: [],
	otherProducts: [],
	cartItems: [],
	extraServices: [],
	clubs: [],
	deliveryInfo: {},
	clientSecret: null,
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setFootballCards: (state, action) => {
			if (action.payload.footballCards === null) {
				state.footballCards = [];
			} else {
				state.footballCards = action.payload.footballCards;
			}
		},
		setOtherProducts: (state, action) => {
			if (action.payload.otherProducts === null) {
				state.otherProducts = [];
			} else {
				state.otherProducts = action.payload.otherProducts;
			}
		},
		setCartItems: (state, action) => {
			if (action.payload.cartItems === null) {
				state.cartItems = [];
			} else {
				state.cartItems = action.payload.cartItems;
			}
		},
		setClubs: (state, action) => {
			if (action.payload.clubs === null) {
				state.clubs = [];
			} else {
				state.clubs = action.payload.clubs;
			}
		},
		setDeliveryInfo: (state, action) => {
			if (action.payload.deliveryInfo === null) {
				state.deliveryInfo = {};
			} else {
				state.deliveryInfo = action.payload.deliveryInfo;
			}
		},
		setClientSecretId: (state, action) => {
			if (action.payload.clientSecret === null) {
				state.clientSecret = null;
			} else {
				state.clientSecret = action.payload.clientSecret;
			}
		},
	},
});

export const {
	setClubs,
	setFootballCards,
	setOtherProducts,
	setCartItems,
	setDeliveryInfo,
	setClientSecretId,
} = projectSlice.actions;

export default projectSlice.reducer;
