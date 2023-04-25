import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	doc,
	setDoc,
	getDoc,
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
} from "firebase/auth";
import * as rtdb from "firebase/database";

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
const auth = getAuth();
const database = rtdb.getDatabase();
const chckstatusweb = async () => {
	let { onValue, ref } = rtdb;
	const starCountRef = onValue(ref(database, "/checigvalue/"));
	console.log("checking---------", starCountRef);
};
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
	await signInWithEmailAndPassword(auth, `${email}`, `${password}`)
		.then((data) => {
			resp = {
				data: { uid: data?.user?.uid, email: data?.user?.email },
				error: null,
			};
		})
		.catch((error) => {
			resp = { error: error?.code, data: null };
		});
	return resp;
};
const SignUp = async (email, password) => {
	let resp = null;
	await createUserWithEmailAndPassword(auth, `${email}`, `${password}`)
		.then((data) => {
			resp = {
				data: { uid: data?.user?.uid, email: data?.user?.email },
				error: null,
			};
		})
		.catch((error) => {
			resp = { error: error?.code, data: null };
		});
	return resp;
};
const getDeliveryInfo = async (docid) => {
	let resp = null;
	const rest = await getDoc(doc(dbs, `deliveryInfo`, `${docid}`));
	if (rest) {
		resp = { data: rest.data(), error: null };
	} else {
		resp = { data: null, error: "error" };
	}
	return resp;
};
const logout = async () => {
	auth.signOut();
};
const getData = async (collectionid) => {
	const projectSnaps = await getDocs(collection(dbs, `${collectionid}`));
	const projectlist = projectSnaps.docs.map((doc) => {
		return { id: doc?.id, ...doc.data() };
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
const postData = async (data, collectionid) => {
	const docRef = await addDoc(collection(dbs, `${collectionid}`), {
		...data,
	});
	if (docRef) {
		return { data: docRef?.id, error: null };
	} else {
		return { data: null, error: "Data can not be posted." };
	}
};
const postDeliveryInfo = async (data, dcid) => {
	let resp;
	await setDoc(doc(dbs, "deliveryInfo", `${dcid}`), data)
		.then(() => {
			resp = "success";
		})
		.catch((e) => {
			resp = "Data cannot be posted";
		});
	return resp;
};
const deltImage = async (fileref) => {
	const desertRef = ref(storage, `${fileref}`);

	const resp = await deleteObject(desertRef);
	return resp;
};
const countries = [
	{
		name: "Afghanistan",
		code: "flag-of-Afghanistan",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/flag-of-Afghanistan_120x.png",
	},
	{
		name: "Albania",
		code: "al",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/al_120x.png",
	},
	{
		name: "Algeria",
		code: "dz",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/dz_120x.png",
	},
	{
		name: "American Samoa",
		code: "as",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/as_120x.png",
	},
	{
		name: "Andorra",
		code: "ad",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ad_120x.png",
	},
	{
		name: "Angola",
		code: "ao",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ao_120x.png",
	},
	{
		name: "Anguilla",
		code: "ai",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ai_120x.png",
	},

	{
		name: "Antigua and Barbuda",
		code: "ag",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ag_120x.png",
	},
	{
		name: "Argentina",
		code: "ar",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ar_120x.png",
	},
	{
		name: "Armenia",
		code: "am",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/am_120x.png",
	},
	{
		name: "Aruba",
		code: "aw",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/aw_120x.png",
	},
	{
		name: "Australia",
		code: "au",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/au_120x.png",
	},
	{
		name: "Austria",
		code: "at",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/at_120x.png",
	},
	{
		name: "Azerbaijan",
		code: "az",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/az_120x.png",
	},

	{
		name: "Bahamas",
		code: "bs",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/bs_120x.png?v=15709144579375800035",
	},
	{
		name: "Bahrain",
		code: "bh",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bh_120x.png",
	},
	{
		name: "Bangladesh",
		code: "flag-of-Bangladesh",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/flag-of-Bangladesh_120x.png",
	},
	{
		name: "Barbados",
		code: "bb",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bb_120x.png?v=17986702564466175050",
	},
	{
		name: "Belarus",
		code: "by",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/by_120x.png?v=8997608138817866070",
	},
	{
		name: "Belgium",
		code: "be",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/be_120x.png?v=8595505893878691322",
	},
	{
		name: "Belize",
		code: "bz",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/bz_120x.png?v=6579575180787027752",
	},
	{
		name: "Benin",
		code: "bj",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/bj_120x.png?v=13229500320083349521",
	},
	{
		name: "Bermuda",
		code: "bm",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bm_120x.png?v=13921621534233320129",
	},
	{
		name: "Bhutan",
		code: "bt",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bt_120x.png?v=4341785621225800476",
	},
	{
		name: "Bolivia",
		code: "bo",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/bo_120x.png?v=13133796953791303896",
	},

	{
		name: "Bosnia and Herzegovina",
		code: "ba",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ba_120x.png?v=13733948312322011390",
	},
	{
		name: "Botswana",
		code: "bw",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bw_120x.png?v=12465525331855348070",
	},
	{
		name: "Brazil",
		code: "br",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/br_120x.png?v=1232755919008205267",
	},
	{
		name: "British Virgin Islands",
		code: "British-Virgin-Islands",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/British-Virgin-Islands_120x.png?v=16822990245730502786",
	},

	{
		name: "Brunei Darussalam",
		code: "bn",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bn_120x.png?v=12693832858875315130",
	},
	{
		name: "Bulgaria",
		code: "bg",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bg_237fc418-bb2e-43db-b6f6-66c26fc964af_120x.png?v=17465275021800261494",
	},
	{
		name: "Burkina Faso",
		code: "bf",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/bf_120x.png?v=1987677423131301865",
	},
	{
		name: "Burundi",
		code: "bi",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/bi_120x.png?v=15774791823187399786",
	},
	{
		name: "Cambodia",
		code: "kh",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/kh_120x.png?v=11848442278333501134",
	},
	{
		name: "Cameroon",
		code: "cm",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/cm_120x.png?v=14026079814278513877",
	},
	{
		name: "Canada",
		code: "ca",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ca_120x.png?v=16264539692662684459",
	},
	{
		name: "Cabo Verde",
		code: "CaboVerde",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/CaboVerde_120x.png?v=5535433354164035820",
	},
	{
		name: "Cayman Islands",
		code: "ky",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ky_120x.png?v=2403709379085152048",
	},
	{
		name: "Central African Republic",
		code: "cf",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/cf_120x.png?v=14919561102173802824",
	},
	{
		name: "Chad",
		code: "td",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/td_120x.png?v=3623906560255041086",
	},
	{
		name: "Chile",
		code: "cl",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/cl_120x.png?v=15046184899724966210",
	},
	{
		name: "China",
		code: "flag-of-China",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/flag-of-China_120x.png?v=8768702211316871657",
	},
	{
		name: "Colombia",
		code: "co",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/co_120x.png?v=9204137832917931677",
	},
	{
		name: "Comoros",
		code: "km",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/km_120x.png?v=11625254726392730973",
	},
	{
		name: "Congo",
		code: "Republic-Of-The-Congo",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/Republic-Of-The-Congo_120x.png?v=307585252819779668",
	},

	{
		name: "Cook Islands",
		code: "ck",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ck_120x.png?v=12731223320757724300",
	},

	{
		name: "Costa Rica",
		code: "cr",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/cr_120x.png?v=952504078697024101",
	},
	{
		name: "CÃ´te d'Ivoire",
		code: "Ivory-Coast",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/Ivory-Coast_120x.png?v=6201976125066245865",
	},

	{
		name: "Croatia",
		code: "hr",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/hr_120x.png?v=7186503632984213559",
	},
	{
		name: "Cuba",
		code: "cu",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/cu_120x.png?v=16626415921964576589",
	},
	{
		name: "CuraÃ§ao",
		code: "Curacao",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/Curacao_120x.png?v=6629194398583067557",
	},
	{
		name: "Cyprus",
		code: "cy",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/cy_120x.png?v=8016138344969402545",
	},

	{
		name: "Czechia",
		code: "cz",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/cz_120x.png?v=18184797904213582312",
	},
	{
		name: "Denmark",
		code: "dk",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/dk_120x.png?v=11313975543777402448",
	},
	{
		name: "Djibouti",
		code: "dj",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/dj_120x.png?v=3689900579880268880",
	},
	{
		name: "Dominica",
		code: "dm",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/dm_120x.png?v=6344568164107369079",
	},

	{
		name: "Dominican Republic",
		code: "do",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/do_120x.png?v=5841947044712245215",
	},

	{
		name: "Ecuador",
		code: "ec",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ec_120x.png?v=15023501686321443998",
	},
	{
		name: "Egypt",
		code: "eg",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/eg_120x.png?v=3352142237837246244",
	},

	{
		name: "El Salvador",
		code: "sv",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/sv_120x.png?v=3797495763561350257",
	},
	{
		name: "England",
		code: "England_49161f3f-680e-4e53-9015-21b8026f6f68",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/England_49161f3f-680e-4e53-9015-21b8026f6f68_120x.png?v=6143570213532283916",
	},
	{
		name: "Equatorial Guinea",
		code: "gq",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/gq_120x.png?v=13914748868367703481",
	},
	{
		name: "Eritrea",
		code: "er",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/er_120x.png?v=14753841614057455189",
	},
	{
		name: "Estonia",
		code: "ee",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ee_120x.png?v=10644343976376004911",
	},
	{
		name: "Eswatini",
		code: "Eswatini",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/Eswatini_120x.png?v=10607140782829035787",
	},
	{
		name: "Ethiopia",
		code: "et",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/et_120x.png?v=13820552561127987699",
	},

	{
		name: "Faroe Islands",
		code: "fo",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/fo_120x.png?v=3884971691632890993",
	},
	{
		name: "Fiji",
		code: "fj",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/fj_120x.png?v=14934949908072187702",
	},
	{
		name: "Finland",
		code: "fi",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/fi_120x.png?v=15841166189042790637",
	},
	{
		name: "France",
		code: "fr",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/fr_120x.png?v=17090636548594691676",
	},
	{
		name: "French Guiana",
		code: "FrenchGuiana",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/FrenchGuiana_120x.png?v=17067840019344050491",
	},
	{
		name: "Gabon",
		code: "ga",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ga_120x.png?v=11954568141916705975",
	},
	{
		name: "Gambia",
		code: "gm",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/gm_120x.png?v=6119035528354934989",
	},
	{
		name: "Georgia",
		code: "ge",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/ge_120x.png?v=11744648314257677247",
	},
	{
		name: "Germany",
		code: "de",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/de_120x.png?v=12845330531226090274",
	},
	{
		name: "Ghana",
		code: "gh",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/gh_120x.png?v=12102096332726026735",
	},
	{
		name: "Gibraltar",
		code: "gi",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/gi_120x.png?v=3010565701344068024",
	},
	{
		name: "Greece",
		code: "gr",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/gr_120x.png?v=3596887965207944858",
	},
	{
		name: "Grenada",
		code: "gd",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/gd_120x.png?v=13663686359761330242",
	},
	{
		name: "Guadeloupe",
		code: "gp",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/gp_120x.png?v=12000899983272164571",
	},
	{
		name: "Guam",
		code: "gu",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/gu_120x.png?v=12782376302397673926",
	},
	{
		name: "Guatemala",
		code: "gt",
		flag: "https://media-3.api-sports.io/flags/gt.svg",
	},
	{
		name: "Guinea",
		code: "gn",
		flag: "https://media-1.api-sports.io/flags/gn.svg",
	},
	{
		name: "Guinea Bissau",
		code: "gw",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/gw_120x.png?v=5673671005819955093",
	},
	{
		name: "Guyana",
		code: "Guyana",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/Guyana_120x.png?v=11072979576351532707",
	},
	{
		name: "Haiti",
		code: "ht",
		flag: "https://media-2.api-sports.io/flags/ht.svg",
	},

	{
		name: "Honduras",
		code: "hn",
		flag: "https://media-1.api-sports.io/flags/hn.svg",
	},
	{
		name: "Hong Kong",
		code: "hk",
		flag: "https://media-2.api-sports.io/flags/hk.svg",
	},
	{
		name: "Hungary",
		code: "hu",
		flag: "https://media-3.api-sports.io/flags/hu.svg",
	},
	{
		name: "Iceland",
		code: "is",
		flag: "https://media-3.api-sports.io/flags/is.svg",
	},
	{
		name: "India",
		code: "in",
		flag: "https://media-2.api-sports.io/flags/in.svg",
	},
	{
		name: "Indonesia",
		code: "id",
		flag: "https://media-3.api-sports.io/flags/id.svg",
	},

	{
		name: "Iran",
		code: "ir",
		flag: "https://media-3.api-sports.io/flags/ir.svg",
	},
	{
		name: "Iraq",
		code: "iq",
		flag: "https://media-2.api-sports.io/flags/iq.svg",
	},
	{
		name: "Ireland",
		code: "ie",
		flag: "https://media-1.api-sports.io/flags/ie.svg",
	},
	{
		name: "Israel",
		code: "il",
		flag: "https://media-2.api-sports.io/flags/il.svg",
	},
	{
		name: "Italy",
		code: "it",
		flag: "https://media-3.api-sports.io/flags/it.svg",
	},

	{
		name: "Jamaica",
		code: "jm",
		flag: "https://media-1.api-sports.io/flags/jm.svg",
	},
	{
		name: "Japan",
		code: "jp",
		flag: "https://media-3.api-sports.io/flags/jp.svg",
	},
	{
		name: "Jordan",
		code: "jo",
		flag: "https://media-2.api-sports.io/flags/jo.svg",
	},
	{
		name: "Kazakhstan",
		code: "kz",
		flag: "https://media-2.api-sports.io/flags/kz.svg",
	},
	{
		name: "Kenya",
		code: "ke",
		flag: "https://media-1.api-sports.io/flags/ke.svg",
	},

	{
		name: "Kuwait",
		code: "kw",
		flag: "https://media-1.api-sports.io/flags/kw.svg",
	},
	{
		name: "Kyrgyzstan",
		code: "kg",
		flag: "https://media-2.api-sports.io/flags/kg.svg",
	},
	{
		name: "Laos",
		code: "laos",
		flag: "https://media-3.api-sports.io/flags/la.svg",
	},
	{
		name: "Latvia",
		code: "lv",
		flag: "https://media-2.api-sports.io/flags/lv.svg",
	},
	{
		name: "Lebanon",
		code: "lb",
		flag: "https://media-1.api-sports.io/flags/lb.svg",
	},
	{
		name: "Lesotho",
		code: "ls",
		flag: "https://media-2.api-sports.io/flags/ls.svg",
	},
	{
		name: "Liberia",
		code: "lr",
		flag: "https://media-3.api-sports.io/flags/lr.svg",
	},
	{
		name: "Libya",
		code: "ly",
		flag: "https://media-2.api-sports.io/flags/ly.svg",
	},
	{
		name: "Liechtenstein",
		code: "li",
		flag: "https://media-2.api-sports.io/flags/li.svg",
	},
	{
		name: "Lithuania",
		code: "lt",
		flag: "https://media-1.api-sports.io/flags/lt.svg",
	},
	{
		name: "Luxembourg",
		code: "lu",
		flag: "https://media-3.api-sports.io/flags/lu.svg",
	},
	{
		name: "Macao",
		code: "mo",
		flag: "https://media-1.api-sports.io/flags/mo.svg",
	},
	{
		name: "Madagascar",
		code: "mg",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mg_120x.png?v=9835382869844537267",
	},
	{
		name: "Malawi",
		code: "Malawi",
		flag: "https://media-1.api-sports.io/flags/mw.svg",
	},
	{
		name: "Malaysia",
		code: "my",
		flag: "https://media-2.api-sports.io/flags/my.svg",
	},
	{
		name: "Maldives",
		code: "mv",
		flag: "https://media-1.api-sports.io/flags/mv.svg",
	},
	{
		name: "Mali",
		code: "ml",
		flag: "https://media-3.api-sports.io/flags/ml.svg",
	},
	{
		name: "Malta",
		code: "mt_fecfac56-5a10-4424-9712-3327b740133e",
		flag: "https://media-1.api-sports.io/flags/mt.svg",
	},
	{
		name: "Martinique",
		code: "mq",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mq_120x.png?v=15752232433351297941",
	},
	{
		name: "Mauritania",
		code: "mr",
		flag: "https://media-2.api-sports.io/flags/mr.svg",
	},
	{
		name: "Mauritius",
		code: "mu",
		flag: "https://media-3.api-sports.io/flags/mu.svg",
	},
	{
		name: "Mexico",
		code: "mx",
		flag: "https://media-3.api-sports.io/flags/mx.svg",
	},
	{
		name: "Moldova",
		code: "md",
		flag: "https://media-2.api-sports.io/flags/md.svg",
	},
	{
		name: "Mongolia",
		code: "mn",
		flag: "https://media-1.api-sports.io/flags/mn.svg",
	},
	{
		name: "Montenegro",
		code: "me",
		flag: "https://media-3.api-sports.io/flags/me.svg",
	},
	{
		name: "Morocco",
		code: "ma",
		flag: "https://media-2.api-sports.io/flags/ma.svg",
	},
	{
		name: "Mozambique",
		code: "mz",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mz_120x.png?v=213293992727605590",
	},
	{
		name: "Myanmar",
		code: "mm",
		flag: "https://media-2.api-sports.io/flags/mm.svg",
	},
	{
		name: "Namibia",
		code: "na",
		flag: "https://media-3.api-sports.io/flags/na.svg",
	},
	{
		name: "Nepal",
		code: "np",
		flag: "https://media-2.api-sports.io/flags/np.svg",
	},
	{
		name: "Netherlands",
		code: "nl",
		flag: "https://media-2.api-sports.io/flags/nl.svg",
	},

	{
		name: "New Caledonia",
		code: "NewCaledonia",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/NewCaledonia_120x.png?v=11381607086051056128",
	},
	{
		name: "New Zealand",
		code: "nz",
		flag: "https://media-1.api-sports.io/flags/nz.svg",
	},
	{
		name: "Nicaragua",
		code: "ni",
		flag: "https://media-1.api-sports.io/flags/ni.svg",
	},

	{
		name: "Nigeria",
		code: "ng",
		flag: "https://media-1.api-sports.io/flags/ng.svg",
	},
	{
		name: "North Macedonia",
		code: "Republic-Of-Macedonia",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/Republic-Of-Macedonia_120x.png?v=5689035796784045642",
	},
	{
		name: "North Korea",
		code: "North-Korea",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/North-Korea_120x.png?v=17052392833394044921",
	},

	{
		name: "Northern Mariana Islands",
		code: "mp",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/mp_120x.png?v=515481299204295244",
	},
	{
		name: "Northern Ireland",
		code: "Northern-Ireland",
		flag: "https://media-1.api-sports.io/flags/gb.svg",
	},
	{
		name: "Norway",
		code: "no",
		flag: "https://media-1.api-sports.io/flags/no.svg",
	},
	{
		name: "Oman",
		code: "om",
		flag: "https://media-1.api-sports.io/flags/om.svg",
	},
	{
		name: "Pakistan",
		code: "pk",
		flag: "https://media-1.api-sports.io/flags/pk.svg",
	},
	{
		name: "Palestine",
		code: "Palestine",
		flag: "https://media-2.api-sports.io/flags/ps.svg",
	},
	{
		name: "Panama",
		code: "panama",
		flag: "https://media-2.api-sports.io/flags/pa.svg",
	},
	{
		name: "Papua New Guinea",
		code: "pg",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/pg_120x.png?v=260300595828951739",
	},

	{
		name: "Paraguay",
		code: "Paraguay",
		flag: "https://media-2.api-sports.io/flags/py.svg",
	},
	{
		name: "Peru",
		code: "pe",
		flag: "https://media-1.api-sports.io/flags/pe.svg",
	},
	{
		name: "Philippines",
		code: "ph",
		flag: "https://media-3.api-sports.io/flags/ph.svg",
	},
	{
		name: "Poland",
		code: "pl",
		flag: "https://media-1.api-sports.io/flags/pl.svg",
	},
	{
		name: "Portugal",
		code: "pt",
		flag: "https://media-2.api-sports.io/flags/pt.svg",
	},
	{
		name: "Puerto Rico",
		code: "pr",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/pr_120x.png?v=8656754852208200207",
	},
	{
		name: "Qatar",
		code: "qa",
		flag: "https://media-3.api-sports.io/flags/qa.svg",
	},
	{
		name: "RA union",
		code: "Reunion",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/Reunion_120x.png?v=8939322895512955119",
	},
	{
		name: "Romania",
		code: "ro",
		flag: "https://media-2.api-sports.io/flags/ro.svg",
	},
	{
		name: "Russia",
		code: "ru",
		flag: "https://media-2.api-sports.io/flags/ru.svg",
	},
	{
		name: "Rwanda",
		code: "rw",
		flag: "https://media-3.api-sports.io/flags/rw.svg",
	},

	{
		name: "Samoa",
		code: "ws",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ws_120x.png?v=3569609496250696981",
	},
	{
		name: "San Marino",
		code: "sm",
		flag: "https://media-1.api-sports.io/flags/sm.svg",
	},
	{
		name: "São Tomé e Príncipe",
		code: "st",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/st_120x.png?v=7736599402539948199",
	},
	{
		name: "Saudi Arabia",
		code: "sa_-7c8832f-f92f-49e0-8426-9ec74e77eaf3",
		flag: "https://media-1.api-sports.io/flags/sa.svg",
	},
	{
		name: "Scotland",
		code: "Scotland",
		flag: "https://media-3.api-sports.io/flags/gb.svg",
	},
	{
		name: "Senegal",
		code: "sn",
		flag: "https://media-1.api-sports.io/flags/sn.svg",
	},
	{
		name: "Serbia",
		code: "rs",
		flag: "https://media-1.api-sports.io/flags/rs.svg",
	},
	{
		name: "Seychelles",
		code: "sc",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/sc_120x.png?v=16863686744992951078",
	},
	{
		name: "Sierra Leone",
		code: "sl",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/sl_120x.png?v=3160713488275745615",
	},
	{
		name: "Singapore",
		code: "sg",
		flag: "https://media-1.api-sports.io/flags/sg.svg",
	},
	{
		name: "Saint Marten",
		code: "SaintMartin",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/SaintMartin_120x.png?v=15103171336872790358",
	},
	{
		name: "Slovakia",
		code: "sk",
		flag: "https://media-2.api-sports.io/flags/sk.svg",
	},
	{
		name: "Slovenia",
		code: "si",
		flag: "https://media-1.api-sports.io/flags/si.svg",
	},
	{
		name: "Solomon Islands",
		code: "sb",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/sb_120x.png?v=3816017687821039616",
	},

	{
		name: "Somalia",
		code: "so",
		flag: "https://media-3.api-sports.io/flags/so.svg",
	},

	{
		name: "South Africa",
		code: "za",
		flag: "https://media-2.api-sports.io/flags/za.svg",
	},
	{
		name: "South Korea",
		code: "South-Korea",
		flag: "https://media-1.api-sports.io/flags/kr.svg",
	},
	{
		name: "South Sudan",
		code: "South-Sudan",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/South-Sudan_120x.png?v=13209999441000210238",
	},
	{
		name: "Spain",
		code: "es",
		flag: "https://media-3.api-sports.io/flags/es.svg",
	},
	{
		name: "Sri Lanka",
		code: "lk",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/lk_120x.png?v=9563936876168774243",
	},

	{
		name: "St. Kitts and Nevis",
		code: "kn",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/kn_120x.png?v=11556978721348157923",
	},
	{
		name: "St. Lucia",
		code: "Flag-Saint-Lucia",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/Flag-Saint-Lucia_120x.png?v=11657731491791018162",
	},
	{
		name: "St. Vincent and the Grenadines",
		code: "St-Vincent-And-The-Grenadines",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/St-Vincent-And-The-Grenadines_120x.png?v=17920491579304728362",
	},
	{
		name: "Sudan",
		code: "sd",
		flag: "https://media-2.api-sports.io/flags/sd.svg",
	},
	{
		name: "Surinam",
		code: "sr",
		flag: "https://media-2.api-sports.io/flags/sr.svg",
	},
	{
		name: "Switzerland",
		code: "ch",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ch_120x.png?v=7636229591714799341",
	},
	{
		name: "Sweden",
		code: "se",
		flag: "https://media-1.api-sports.io/flags/se.svg",
	},
	{
		name: "Syria",
		code: "sy",
		flag: "https://media-2.api-sports.io/flags/sy.svg",
	},
	{
		name: "Tajikistan",
		code: "tj",
		flag: "https://media-3.api-sports.io/flags/tj.svg",
	},
	{
		name: "Tanzania",
		code: "tz",
		flag: "https://media-2.api-sports.io/flags/tz.svg",
	},
	{
		name: "Thailand",
		code: "th",
		flag: "https://media-2.api-sports.io/flags/th.svg",
	},
	{
		name: "Timor-Leste",
		code: "TimorLeste",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/TimorLeste_120x.png?v=4994906315782301964",
	},
	{
		name: "Togo",
		code: "tg",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/tg_120x.png?v=11920631849618356743",
	},
	{
		name: "Tonga",
		code: "to",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/to_120x.png?v=13269035888546186531",
	},
	{
		name: "Trinidad and Tobago",
		code: "tt",
		flag: "	https://cdn.shopify.com/s/files/1/2412/8291/files/tt_120x.png?v=17874592008270658334",
	},

	{
		name: "Tunisia",
		code: "tn",
		flag: "https://media-1.api-sports.io/flags/tn.svg",
	},
	{
		name: "Turkey",
		code: "tr",
		flag: "https://media-3.api-sports.io/flags/tr.svg",
	},
	{
		name: "Turkmenistan",
		code: "tm",
		flag: "https://media-3.api-sports.io/flags/tm.svg",
	},
	{
		name: "Turks and Caicos Islands",
		code: "tc",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/tc_120x.png?v=12982124382386792573",
	},
	{
		name: "UAE",
		code: "ae",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ae_120x.png?v=15118619228851453400",
	},
	{
		name: "Uganda",
		code: "ug",
		flag: "https://media-3.api-sports.io/flags/ug.svg",
	},
	{
		name: "Ukraine",
		code: "ua",
		flag: "https://media-3.api-sports.io/flags/ua.svg",
	},

	{
		name: "Uruguay",
		code: "uy",
		flag: "https://media-3.api-sports.io/flags/uy.svg",
	},
	{
		name: "US Virgin Islands",
		code: "vi",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/vi_120x.png?v=14564642985672490844",
	},
	{
		name: "USA",
		code: "us",
		flag: "https://media-2.api-sports.io/flags/us.svg",
	},
	{
		name: "Uzbekistan",
		code: "uz",
		flag: "https://media-3.api-sports.io/flags/uz.svg",
	},
	{
		name: "Vanuatu",
		code: "u",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/vu_120x.png?v=14155529498483419625",
	},
	{
		name: "Venezuela",
		code: "ve",
		flag: "https://media-1.api-sports.io/flags/ve.svg",
	},
	{
		name: "Vietnam",
		code: "Vietnam",
		flag: "https://media-3.api-sports.io/flags/vn.svg",
	},
	{
		name: "Wales",
		code: "Wales",
		flag: "https://media-1.api-sports.io/flags/gb.svg",
	},
	{
		name: "Yemen",
		code: "ye",
		flag: "https://cdn.shopify.com/s/files/1/2412/8291/files/ye_120x.png?v=13561641956264514183",
	},
	{
		name: "Zambia",
		code: "zm",
		flag: "https://media-1.api-sports.io/flags/zm.svg",
	},
	{
		name: "Zimbabwe",
		code: "zw",
		flag: "https://media-2.api-sports.io/flags/zw.svg",
	},
];
export {
	deltImage,
	uploadImage,
	SignUp,
	getData,
	logout,
	getDeliveryInfo,
	login,
	postData,
	postDeliveryInfo,
	countries,
	getClubs,
	dbs,
	chckstatusweb,
};
