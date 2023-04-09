import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	setDoc,
	onSnapshot,
	addDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";
import {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";

var FirebaseConfig = {
	apiKey: "AIzaSyCRgDbNA14WDc6O3oIXZsElpldIZjdHdrs",
	authDomain: "upcard-eb05d.firebaseapp.com",
	databaseURL: "https://upcard-eb05d-default-rtdb.firebaseio.com",
	projectId: "upcard-eb05d",
	storageBucket: "upcard-eb05d.appspot.com",
	messagingSenderId: "84482438842",
	appId: "1:84482438842:web:8fce22f1936c439feaf483",
	measurementId: "G-THMDWDSY3K",
};
initializeApp(FirebaseConfig);
const storage = getStorage();
const dbs = getFirestore();
const getauth = getAuth();
const uploadImage = async (file) => {
	const filename = new Date();
	const imgref = `image/${filename}${file.name}`;
	const storageRef = ref(storage, `${imgref}`);

	const resp = await uploadBytes(storageRef, file);
	if (resp) {
		const imglink = await getDownloadURL(storageRef);
		return { imglink, imgref };
	}
};
const login = async (email, password) => {
	let resp = null;
	await signInWithEmailAndPassword(getauth, email, password)
		.then((data) => {
			resp = { uid: data.user.uid, error: null };
		})
		.catch((error) => {
			resp = { error: error?.code, uid: null };
		});
	return resp;
};
const logout = async () => {
	getauth.signOut();
};
const getData = async () => {
	const projectSnaps = await getDocs(collection(dbs, "projects"));
	const projectlist = projectSnaps.docs.map((doc) => {
		return { id: doc?.id, data: doc.data() };
	});
	return projectlist;
};
const getClubs = async () => {
	const projectSnaps = await getDocs(collection(dbs, "FootballClubs"));
	const projectlist = projectSnaps.docs.map((doc) => {
		return { id: doc?.id, ...doc.data() };
	});
	return projectlist;
};
const postData = async (data) => {
	const docRef = await addDoc(collection(dbs, "projects"), {
		title: data.title,
		subtitle: data.subtitle,
		weblink: data.weblink,
		imge: data.imglink,
		imgRef: data.imgRef,
	});
	if (docRef) {
		return { data: docRef?.id, error: null };
	} else {
		return { data: null, error: "Data can not be posted." };
	}
};
const deltImage = async (fileref) => {
	const desertRef = ref(storage, `${fileref}`);

	const resp = await deleteObject(desertRef);
	return resp;
};
const countries = [
	{
		name: "Afghanistan",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/flag-of-Afghanistan_120x.png?v=7514689766803995729",
	},
	{
		name: "Albania",
		code: "AL",
		flag: "https://media-1.api-sports.io/flags/al.svg",
	},
	{
		name: "Algeria",
		code: "DZ",
		flag: "https://media-1.api-sports.io/flags/dz.svg",
	},
	{
		name: "American Samoa",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/as_120x.png?v=17234350116751501940",
	},
	{
		name: "Andorra",
		code: "AD",
		flag: "https://media-3.api-sports.io/flags/ad.svg",
	},
	{
		name: "Angola",
		code: "AO",
		flag: "https://media-3.api-sports.io/flags/ao.svg",
	},
	{
		name: "Anguilla",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ai_120x.png?v=6002053575925082607",
	},

	{
		name: "Antigua and Barbuda",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ag_120x.png?v=292719181897477242",
	},
	{
		name: "Argentina",
		code: "AR",
		flag: "https://media-2.api-sports.io/flags/ar.svg",
	},
	{
		name: "Armenia",
		code: "AM",
		flag: "https://media-1.api-sports.io/flags/am.svg",
	},
	{
		name: "Aruba",
		code: "AW",
		flag: "https://media-2.api-sports.io/flags/aw.svg",
	},
	{
		name: "Australia",
		code: "AU",
		flag: "https://media-3.api-sports.io/flags/au.svg",
	},
	{
		name: "Austria",
		code: "AT",
		flag: "https://media-1.api-sports.io/flags/at.svg",
	},
	{
		name: "Azerbaijan",
		code: "AZ",
		flag: "https://media-1.api-sports.io/flags/az.svg",
	},

	{
		name: "Bahamas",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/bs_120x.png?v=15709144579375800035",
	},
	{
		name: "Bahrain",
		code: "BH",
		flag: "https://media-3.api-sports.io/flags/bh.svg",
	},
	{
		name: "Bangladesh",
		code: "BD",
		flag: "https://media-2.api-sports.io/flags/bd.svg",
	},
	{
		name: "Barbados",
		code: "BB",
		flag: "https://media-3.api-sports.io/flags/bb.svg",
	},
	{
		name: "Belarus",
		code: "BY",
		flag: "https://media-1.api-sports.io/flags/by.svg",
	},
	{
		name: "Belgium",
		code: "BE",
		flag: "https://media-2.api-sports.io/flags/be.svg",
	},
	{
		name: "Belize",
		code: "BZ",
		flag: "https://media-1.api-sports.io/flags/bz.svg",
	},
	{
		name: "Benin",
		code: "BJ",
		flag: "https://media-2.api-sports.io/flags/bj.svg",
	},
	{
		name: "Bermuda",
		code: "BM",
		flag: "https://media-3.api-sports.io/flags/bm.svg",
	},
	{
		name: "Bhutan",
		code: "BT",
		flag: "https://media-3.api-sports.io/flags/bt.svg",
	},
	{
		name: "Bolivia",
		code: "BO",
		flag: "https://media-1.api-sports.io/flags/bo.svg",
	},

	{
		name: "Bosnia",
		code: "BA",
		flag: "https://media-3.api-sports.io/flags/ba.svg",
	},
	{
		name: "Bosnia and Herzegovina",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ba_120x.png?v=13733948312322011390",
	},
	{
		name: "Botswana",
		code: "BW",
		flag: "https://media-1.api-sports.io/flags/bw.svg",
	},
	{
		name: "Brazil",
		code: "BR",
		flag: "https://media-1.api-sports.io/flags/br.svg",
	},
	{
		name: "British Virgin Islands",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/British-Virgin-Islands_120x.png?v=16822990245730502786",
	},

	{
		name: "Brunei Darussalam",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bn_120x.png?v=12693832858875315130",
	},
	{
		name: "Bulgaria",
		code: "BG",
		flag: "https://media-1.api-sports.io/flags/bg.svg",
	},
	{
		name: "Burkina Faso",
		code: "BF",
		flag: "https://media-1.api-sports.io/flags/bf.svg",
	},
	{
		name: "Burundi",
		code: "BI",
		flag: "https://media-3.api-sports.io/flags/bi.svg",
	},
	{
		name: "Cambodia",
		code: "KH",
		flag: "https://media-2.api-sports.io/flags/kh.svg",
	},
	{
		name: "Cameroon",
		code: "CM",
		flag: "https://media-3.api-sports.io/flags/cm.svg",
	},
	{
		name: "Canada",
		code: "CA",
		flag: "https://media-3.api-sports.io/flags/ca.svg",
	},
	{
		name: "Cabo Verde",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/CaboVerde_120x.png?v=5535433354164035820",
	},
	{
		name: "Cayman Islands",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ky_120x.png?v=2403709379085152048",
	},
	{
		name: "Central African Republic",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/cf_120x.png?v=14919561102173802824",
	},
	{
		name: "Chad",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/td_120x.png?v=3623906560255041086",
	},
	{
		name: "Chile",
		code: "CL",
		flag: "https://media-2.api-sports.io/flags/cl.svg",
	},
	{
		name: "China",
		code: "CN",
		flag: "https://media-1.api-sports.io/flags/cn.svg",
	},
	{
		name: "Chinese Taipei",
		code: "TW",
		flag: "https://media-3.api-sports.io/flags/tw.svg",
	},
	{
		name: "Colombia",
		code: "CO",
		flag: "https://media-1.api-sports.io/flags/co.svg",
	},
	{
		name: "Comoros",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/km_120x.png?v=11625254726392730973",
	},
	{
		name: "Congo",
		code: "CD",
		flag: "https://media-2.api-sports.io/flags/cd.svg",
	},

	{
		name: "Congo DR",
		code: "CG",
		flag: "https://media-3.api-sports.io/flags/cg.svg",
	},
	{
		name: "Cook Islands",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ck_120x.png?v=12731223320757724300",
	},

	{
		name: "Costa Rica",
		code: "CR",
		flag: "https://media-3.api-sports.io/flags/cr.svg",
	},
	{
		name: "CÃ´te d'Ivoire",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/Ivory-Coast_120x.png?v=6201976125066245865",
	},
	{
		name: "Crimea",
		code: "UA",
		flag: "https://media-1.api-sports.io/flags/ua.svg",
	},
	{
		name: "Croatia",
		code: "HR",
		flag: "https://media-2.api-sports.io/flags/hr.svg",
	},
	{
		name: "Cuba",
		code: "CU",
		flag: "https://media-2.api-sports.io/flags/cu.svg",
	},
	{
		name: "CuraÃ§ao",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/Curacao_120x.png?v=6629194398583067557",
	},
	{
		name: "Cyprus",
		code: "CY",
		flag: "https://media-2.api-sports.io/flags/cy.svg",
	},

	{
		name: "Czechia",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/cz_120x.png?v=18184797904213582312",
	},
	{
		name: "Denmark",
		code: "DK",
		flag: "https://media-2.api-sports.io/flags/dk.svg",
	},
	{
		name: "Djibouti",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/dj_120x.png?v=3689900579880268880",
	},
	{
		name: "Dominica",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/dm_120x.png?v=6344568164107369079",
	},

	{
		name: "Dominican Republic",
		code: "DO",
		flag: "https://media-3.api-sports.io/flags/do.svg",
	},

	{
		name: "Ecuador",
		code: "EC",
		flag: "https://media-1.api-sports.io/flags/ec.svg",
	},
	{
		name: "Egypt",
		code: "EG",
		flag: "https://media-1.api-sports.io/flags/eg.svg",
	},

	{
		name: "El Salvador",
		code: "SV",
		flag: "https://media-3.api-sports.io/flags/sv.svg",
	},
	{
		name: "England",
		code: "GB",
		flag: "https://media-3.api-sports.io/flags/gb.svg",
	},
	{
		name: "Equatorial Guinea",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/gq_120x.png?v=13914748868367703481",
	},
	{
		name: "Eritrea",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/er_120x.png?v=14753841614057455189",
	},
	{
		name: "Estonia",
		code: "EE",
		flag: "https://media-1.api-sports.io/flags/ee.svg",
	},
	{
		name: "Eswatini",
		code: "SZ",
		flag: "https://media-1.api-sports.io/flags/sz.svg",
	},
	{
		name: "Ethiopia",
		code: "ET",
		flag: "https://media-3.api-sports.io/flags/et.svg",
	},

	{
		name: "Faroe Islands",
		code: "FO",
		flag: "https://media-2.api-sports.io/flags/fo.svg",
	},
	{
		name: "Fiji",
		code: "FJ",
		flag: "https://media-2.api-sports.io/flags/fj.svg",
	},
	{
		name: "Finland",
		code: "FI",
		flag: "https://media-3.api-sports.io/flags/fi.svg",
	},
	{
		name: "France",
		code: "FR",
		flag: "https://media-2.api-sports.io/flags/fr.svg",
	},
	{
		name: "French Guiana",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/FrenchGuiana_120x.png?v=17067840019344050491",
	},
	{
		name: "Gabon",
		code: "GA",
		flag: "https://media-2.api-sports.io/flags/ga.svg",
	},
	{
		name: "Gambia",
		code: "GM",
		flag: "https://media-2.api-sports.io/flags/gm.svg",
	},
	{
		name: "Georgia",
		code: "GE",
		flag: "https://media-2.api-sports.io/flags/ge.svg",
	},
	{
		name: "Germany",
		code: "DE",
		flag: "https://media-3.api-sports.io/flags/de.svg",
	},
	{
		name: "Ghana",
		code: "GH",
		flag: "https://media-2.api-sports.io/flags/gh.svg",
	},
	{
		name: "Gibraltar",
		code: "GI",
		flag: "https://media-3.api-sports.io/flags/gi.svg",
	},
	{
		name: "Greece",
		code: "GR",
		flag: "https://media-1.api-sports.io/flags/gr.svg",
	},
	{
		name: "Grenada",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/gd_120x.png?v=13663686359761330242",
	},
	{
		name: "Guadeloupe",
		code: "GP",
		flag: "https://media-3.api-sports.io/flags/gp.svg",
	},
	{
		name: "Guam",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/gu_120x.png?v=12782376302397673926",
	},
	{
		name: "Guatemala",
		code: "GT",
		flag: "https://media-3.api-sports.io/flags/gt.svg",
	},
	{
		name: "Guinea",
		code: "GN",
		flag: "https://media-1.api-sports.io/flags/gn.svg",
	},
	{
		name: "Guinea Bissau",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/gw_120x.png?v=5673671005819955093",
	},
	{
		name: "Guyana",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/Guyana_120x.png?v=11072979576351532707",
	},
	{
		name: "Haiti",
		code: "HT",
		flag: "https://media-2.api-sports.io/flags/ht.svg",
	},

	{
		name: "Honduras",
		code: "HN",
		flag: "https://media-1.api-sports.io/flags/hn.svg",
	},
	{
		name: "Hong Kong",
		code: "HK",
		flag: "https://media-2.api-sports.io/flags/hk.svg",
	},
	{
		name: "Hungary",
		code: "HU",
		flag: "https://media-3.api-sports.io/flags/hu.svg",
	},
	{
		name: "Iceland",
		code: "IS",
		flag: "https://media-3.api-sports.io/flags/is.svg",
	},
	{
		name: "India",
		code: "IN",
		flag: "https://media-2.api-sports.io/flags/in.svg",
	},
	{
		name: "Indonesia",
		code: "ID",
		flag: "https://media-3.api-sports.io/flags/id.svg",
	},

	{
		name: "Iran",
		code: "IR",
		flag: "https://media-3.api-sports.io/flags/ir.svg",
	},
	{
		name: "Iraq",
		code: "IQ",
		flag: "https://media-2.api-sports.io/flags/iq.svg",
	},
	{
		name: "Ireland",
		code: "IE",
		flag: "https://media-1.api-sports.io/flags/ie.svg",
	},
	{
		name: "Israel",
		code: "IL",
		flag: "https://media-2.api-sports.io/flags/il.svg",
	},
	{
		name: "Italy",
		code: "IT",
		flag: "https://media-3.api-sports.io/flags/it.svg",
	},

	{
		name: "Ivory Coast",
		code: "CI",
		flag: "https://media-2.api-sports.io/flags/ci.svg",
	},
	{
		name: "Jamaica",
		code: "JM",
		flag: "https://media-1.api-sports.io/flags/jm.svg",
	},
	{
		name: "Japan",
		code: "JP",
		flag: "https://media-3.api-sports.io/flags/jp.svg",
	},
	{
		name: "Jordan",
		code: "JO",
		flag: "https://media-2.api-sports.io/flags/jo.svg",
	},
	{
		name: "Kazakhstan",
		code: "KZ",
		flag: "https://media-2.api-sports.io/flags/kz.svg",
	},
	{
		name: "Kenya",
		code: "KE",
		flag: "https://media-1.api-sports.io/flags/ke.svg",
	},

	{
		name: "Kosovo",
		code: "XK",
		flag: "https://media-2.api-sports.io/flags/xk.svg",
	},
	{
		name: "Kuwait",
		code: "KW",
		flag: "https://media-1.api-sports.io/flags/kw.svg",
	},
	{
		name: "Kyrgyzstan",
		code: "KG",
		flag: "https://media-2.api-sports.io/flags/kg.svg",
	},
	{
		name: "Laos",
		code: "LA",
		flag: "https://media-3.api-sports.io/flags/la.svg",
	},
	{
		name: "Latvia",
		code: "LV",
		flag: "https://media-2.api-sports.io/flags/lv.svg",
	},
	{
		name: "Lebanon",
		code: "LB",
		flag: "https://media-1.api-sports.io/flags/lb.svg",
	},
	{
		name: "Lesotho",
		code: "LS",
		flag: "https://media-2.api-sports.io/flags/ls.svg",
	},
	{
		name: "Liberia",
		code: "LR",
		flag: "https://media-3.api-sports.io/flags/lr.svg",
	},
	{
		name: "Libya",
		code: "LY",
		flag: "https://media-2.api-sports.io/flags/ly.svg",
	},
	{
		name: "Liechtenstein",
		code: "LI",
		flag: "https://media-2.api-sports.io/flags/li.svg",
	},
	{
		name: "Lithuania",
		code: "LT",
		flag: "https://media-1.api-sports.io/flags/lt.svg",
	},
	{
		name: "Luxembourg",
		code: "LU",
		flag: "https://media-3.api-sports.io/flags/lu.svg",
	},
	{
		name: "Macao",
		code: "MO",
		flag: "https://media-1.api-sports.io/flags/mo.svg",
	},
	{
		name: "Macedonia",
		code: "MK",
		flag: "https://media-1.api-sports.io/flags/mk.svg",
	},
	{
		name: "Madagascar",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mg_120x.png?v=9835382869844537267",
	},
	{
		name: "Malawi",
		code: "MW",
		flag: "https://media-1.api-sports.io/flags/mw.svg",
	},
	{
		name: "Malaysia",
		code: "MY",
		flag: "https://media-2.api-sports.io/flags/my.svg",
	},
	{
		name: "Maldives",
		code: "MV",
		flag: "https://media-1.api-sports.io/flags/mv.svg",
	},
	{
		name: "Mali",
		code: "ML",
		flag: "https://media-3.api-sports.io/flags/ml.svg",
	},
	{
		name: "Malta",
		code: "MT",
		flag: "https://media-1.api-sports.io/flags/mt.svg",
	},
	{
		name: "Martinique",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mq_120x.png?v=15752232433351297941",
	},
	{
		name: "Mauritania",
		code: "MR",
		flag: "https://media-2.api-sports.io/flags/mr.svg",
	},
	{
		name: "Mauritius",
		code: "MU",
		flag: "https://media-3.api-sports.io/flags/mu.svg",
	},
	{
		name: "Mexico",
		code: "MX",
		flag: "https://media-3.api-sports.io/flags/mx.svg",
	},
	{
		name: "Moldova",
		code: "MD",
		flag: "https://media-2.api-sports.io/flags/md.svg",
	},
	{
		name: "Mongolia",
		code: "MN",
		flag: "https://media-1.api-sports.io/flags/mn.svg",
	},
	{
		name: "Montenegro",
		code: "ME",
		flag: "https://media-3.api-sports.io/flags/me.svg",
	},
	{
		name: "Morocco",
		code: "MA",
		flag: "https://media-2.api-sports.io/flags/ma.svg",
	},
	{
		name: "Mozambique",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mz_120x.png?v=213293992727605590",
	},
	{
		name: "Myanmar",
		code: "MM",
		flag: "https://media-2.api-sports.io/flags/mm.svg",
	},
	{
		name: "Namibia",
		code: "NA",
		flag: "https://media-3.api-sports.io/flags/na.svg",
	},
	{
		name: "Nepal",
		code: "NP",
		flag: "https://media-2.api-sports.io/flags/np.svg",
	},
	{
		name: "Netherlands",
		code: "NL",
		flag: "https://media-2.api-sports.io/flags/nl.svg",
	},

	{
		name: "New Caledonia",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/NewCaledonia_120x.png?v=11381607086051056128",
	},
	{
		name: "New Zealand",
		code: "NZ",
		flag: "https://media-1.api-sports.io/flags/nz.svg",
	},
	{
		name: "Nicaragua",
		code: "NI",
		flag: "https://media-1.api-sports.io/flags/ni.svg",
	},

	{
		name: "Nigeria",
		code: "NG",
		flag: "https://media-1.api-sports.io/flags/ng.svg",
	},
	{
		name: "North Macedonia",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/…ublic-Of-Macedonia_120x.png?v=5689035796784045642",
	},
	{
		name: "North Korea",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/North-Korea_120x.png?v=17052392833394044921",
	},

	{
		name: "Northern Mariana Islands",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mp_120x.png?v=515481299204295244",
	},
	{
		name: "Northern Ireland",
		code: "GB",
		flag: "https://media-1.api-sports.io/flags/gb.svg",
	},
	{
		name: "Norway",
		code: "NO",
		flag: "https://media-1.api-sports.io/flags/no.svg",
	},
	{
		name: "Oman",
		code: "OM",
		flag: "https://media-1.api-sports.io/flags/om.svg",
	},
	{
		name: "Pakistan",
		code: "PK",
		flag: "https://media-1.api-sports.io/flags/pk.svg",
	},
	{
		name: "Palestine",
		code: "PS",
		flag: "https://media-2.api-sports.io/flags/ps.svg",
	},
	{
		name: "Panama",
		code: "PA",
		flag: "https://media-2.api-sports.io/flags/pa.svg",
	},
	{
		name: "Papua New Guinea",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/pg_120x.png?v=260300595828951739",
	},

	{
		name: "Paraguay",
		code: "PY",
		flag: "https://media-2.api-sports.io/flags/py.svg",
	},
	{
		name: "Peru",
		code: "PE",
		flag: "https://media-1.api-sports.io/flags/pe.svg",
	},
	{
		name: "Philippines",
		code: "PH",
		flag: "https://media-3.api-sports.io/flags/ph.svg",
	},
	{
		name: "Poland",
		code: "PL",
		flag: "https://media-1.api-sports.io/flags/pl.svg",
	},
	{
		name: "Portugal",
		code: "PT",
		flag: "https://media-2.api-sports.io/flags/pt.svg",
	},
	{
		name: "Puerto Rico",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/pr_120x.png?v=8656754852208200207",
	},
	{
		name: "Qatar",
		code: "QA",
		flag: "https://media-3.api-sports.io/flags/qa.svg",
	},
	{
		name: "RA union",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/Reunion_120x.png?v=8939322895512955119",
	},
	{
		name: "Romania",
		code: "RO",
		flag: "https://media-2.api-sports.io/flags/ro.svg",
	},
	{
		name: "Russia",
		code: "RU",
		flag: "https://media-2.api-sports.io/flags/ru.svg",
	},
	{
		name: "Rwanda",
		code: "RW",
		flag: "https://media-3.api-sports.io/flags/rw.svg",
	},

	{
		name: "Samoa",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ws_120x.png?v=3569609496250696981",
	},
	{
		name: "San Marino",
		code: "SM",
		flag: "https://media-1.api-sports.io/flags/sm.svg",
	},
	{
		name: "São Tomé e Príncipe",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/st_120x.png?v=7736599402539948199",
	},
	{
		name: "Saudi Arabia",
		code: "SA",
		flag: "https://media-1.api-sports.io/flags/sa.svg",
	},
	{
		name: "Scotland",
		code: "GB",
		flag: "https://media-3.api-sports.io/flags/gb.svg",
	},
	{
		name: "Senegal",
		code: "SN",
		flag: "https://media-1.api-sports.io/flags/sn.svg",
	},
	{
		name: "Serbia",
		code: "RS",
		flag: "https://media-1.api-sports.io/flags/rs.svg",
	},
	{
		name: "Seychelles",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/sc_120x.png?v=16863686744992951078",
	},
	{
		name: "Sierra Leone",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/sl_120x.png?v=3160713488275745615",
	},
	{
		name: "Singapore",
		code: "SG",
		flag: "https://media-1.api-sports.io/flags/sg.svg",
	},
	{
		name: "Saint Marten",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/SaintMartin_120x.png?v=15103171336872790358",
	},
	{
		name: "Slovakia",
		code: "SK",
		flag: "https://media-2.api-sports.io/flags/sk.svg",
	},
	{
		name: "Slovenia",
		code: "SI",
		flag: "https://media-1.api-sports.io/flags/si.svg",
	},
	{
		name: "Solomon Islands",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/sb_120x.png?v=3816017687821039616",
	},

	{
		name: "Somalia",
		code: "SO",
		flag: "https://media-3.api-sports.io/flags/so.svg",
	},

	{
		name: "South Africa",
		code: "ZA",
		flag: "https://media-2.api-sports.io/flags/za.svg",
	},
	{
		name: "South Korea",
		code: "KR",
		flag: "https://media-1.api-sports.io/flags/kr.svg",
	},
	{
		name: "South Sudan",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/South-Sudan_120x.png?v=13209999441000210238",
	},
	{
		name: "Spain",
		code: "ES",
		flag: "https://media-3.api-sports.io/flags/es.svg",
	},
	{
		name: "Sri Lanka",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/lk_120x.png?v=9563936876168774243",
	},

	{
		name: "St. Kitts and Nevis",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/kn_120x.png?v=11556978721348157923",
	},
	{
		name: "St. Lucia",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/Flag-Saint-Lucia_120x.png?v=11657731491791018162",
	},
	{
		name: "St. Vincent and the Grenadines",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/…nd-The-Grenadines_120x.png?v=17920491579304728362",
	},
	{
		name: "Sudan",
		code: "SD",
		flag: "https://media-2.api-sports.io/flags/sd.svg",
	},
	{
		name: "Surinam",
		code: "SR",
		flag: "https://media-2.api-sports.io/flags/sr.svg",
	},
	{
		name: "Switzerland",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ch_120x.png?v=7636229591714799341",
	},
	{
		name: "Sweden",
		code: "SE",
		flag: "https://media-1.api-sports.io/flags/se.svg",
	},
	{
		name: "Switzerland",
		code: "CH",
		flag: "https://media-1.api-sports.io/flags/ch.svg",
	},
	{
		name: "Syria",
		code: "SY",
		flag: "https://media-2.api-sports.io/flags/sy.svg",
	},
	{
		name: "Tajikistan",
		code: "TJ",
		flag: "https://media-3.api-sports.io/flags/tj.svg",
	},
	{
		name: "Tanzania",
		code: "TZ",
		flag: "https://media-2.api-sports.io/flags/tz.svg",
	},
	{
		name: "Thailand",
		code: "TH",
		flag: "https://media-2.api-sports.io/flags/th.svg",
	},
	{
		name: "Timor-Leste",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/TimorLeste_120x.png?v=4994906315782301964",
	},
	{
		name: "Togo",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/tg_120x.png?v=11920631849618356743",
	},
	{
		name: "Tonga",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/to_120x.png?v=13269035888546186531",
	},
	{
		name: "Trinidad and Tobago",
		code: null,
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/tt_120x.png?v=17874592008270658334",
	},
	{
		name: "Trinidad-And-Tobago",
		code: "TT",
		flag: "https://media-1.api-sports.io/flags/tt.svg",
	},
	{
		name: "Tunisia",
		code: "TN",
		flag: "https://media-1.api-sports.io/flags/tn.svg",
	},
	{
		name: "Turkey",
		code: "TR",
		flag: "https://media-3.api-sports.io/flags/tr.svg",
	},
	{
		name: "Turkmenistan",
		code: "TM",
		flag: "https://media-3.api-sports.io/flags/tm.svg",
	},
	{
		name: "Turks and Caicos Islands",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/tc_120x.png?v=12982124382386792573",
	},
	{
		name: "UAE",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ae_120x.png?v=15118619228851453400",
	},
	{
		name: "Uganda",
		code: "UG",
		flag: "https://media-3.api-sports.io/flags/ug.svg",
	},
	{
		name: "Ukraine",
		code: "UA",
		flag: "https://media-3.api-sports.io/flags/ua.svg",
	},
	{
		name: "United Arab Emirates",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ae_120x.png?v=15118619228851453400",
	},
	{
		name: "United-Arab-Emirates",
		code: "AE",
		flag: "https://media-2.api-sports.io/flags/ae.svg",
	},
	{
		name: "Uruguay",
		code: "UY",
		flag: "https://media-3.api-sports.io/flags/uy.svg",
	},
	{
		name: "US Virgin Islands",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/vi_120x.png?v=14564642985672490844",
	},
	{
		name: "USA",
		code: "US",
		flag: "https://media-2.api-sports.io/flags/us.svg",
	},
	{
		name: "Uzbekistan",
		code: "UZ",
		flag: "https://media-3.api-sports.io/flags/uz.svg",
	},
	{
		name: "Vanuatu",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/vu_120x.png?v=14155529498483419625",
	},
	{
		name: "Venezuela",
		code: "VE",
		flag: "https://media-1.api-sports.io/flags/ve.svg",
	},
	{
		name: "Vietnam",
		code: "VN",
		flag: "https://media-3.api-sports.io/flags/vn.svg",
	},
	{
		name: "Wales",
		code: "GB",
		flag: "https://media-1.api-sports.io/flags/gb.svg",
	},
	{
		name: "Yemen",
		code: null,
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ye_120x.png?v=13561641956264514183",
	},
	{
		name: "Zambia",
		code: "ZM",
		flag: "https://media-1.api-sports.io/flags/zm.svg",
	},
	{
		name: "Zimbabwe",
		code: "ZW",
		flag: "https://media-2.api-sports.io/flags/zw.svg",
	},
];
export {
	deltImage,
	uploadImage,
	getData,
	logout,
	login,
	postData,
	countries,
	getClubs,
};
