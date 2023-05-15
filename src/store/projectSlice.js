import { createSlice } from "@reduxjs/toolkit";
import localimg from "../ownassets/firstsesion1.png";
import defaultImg from "../ownassets/firstsesion.png";
const initialState = {
	footballCards: [],
	otherProducts: [],
	cartItems: [],
	extraServices: [],
	clubs: [],
	deliveryInfo: {},
	clientSecret: null,
	languages: {},
	banner: localimg,
	cardinfo: {},
	cardInfoImages: {},
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setLanguages: (state, action) => {
			if (action.payload.languages === null) {
				state.languages = {};
			} else {
				state.languages = action.payload.languages;
			}
		},
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
		setExtraServices: (state, action) => {
			if (action.payload.extraServices === null) {
				state.extraServices = [];
			} else {
				state.extraServices = action.payload.extraServices;
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
		setBanner: (state, action) => {
			if (action.payload.banner === null) {
				state.banner = localimg;
			} else {
				state.banner = action.payload.banner;
			}
		},
		setCardInfo: (state, action) => {
			if (action.payload.cardinfo === null) {
				state.cardinfo = {
					overallRatting: "98",
					mainPosition: "POR",
					name: "Up Card",
					subpValue1: "67",
					subpValue2: "87",
					subpValue3: "99",
					subpValue4: "44",
					subpValue5: "98",
					subpValue6: "65",
					subp1: "SAL",
					subp2: "PAR",
					subp3: "SAQ",
					subp4: "REF",
					subp5: "VEL",
					subp6: "POS",
				};
			} else {
				state.cardinfo = action.payload.cardinfo;
			}
		},
		setCardInfoImages: (state, action) => {
			if (action.payload.cardInfoImages === null) {
				state.cardInfoImages = {
					imglink: defaultImg,
					country:
						"https://cdn.shopify.com/s/files/1/2412/8291/files/es_120x.png",
					team: "https://cdn.shopify.com/s/files/1/2412/8291/files/FootballGreatest_120x.png?v=11203880791753341527",
				};
			} else {
				state.cardInfoImages = action.payload.cardInfoImages;
			}
		},
	},
});

export const {
	setLanguages,
	setClubs,
	setFootballCards,
	setOtherProducts,
	setCartItems,
	setDeliveryInfo,
	setClientSecretId,
	setBanner,
	setCardInfo,
	setCardInfoImages,
	setExtraServices,
} = projectSlice.actions;

export default projectSlice.reducer;
