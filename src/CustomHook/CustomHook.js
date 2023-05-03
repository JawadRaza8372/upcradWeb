import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
export const CustomHook = () => {
	const { i18n } = useTranslation();
	const { languages } = useSelector((state) => state.project);
	const dbTranslator = (key) => {
		if (languages !== {}) {
			return languages?.[`${key}`]?.[
				i18n?.language === "en"
					? "english"
					: i18n?.language === "es"
					? "spain"
					: i18n?.language === "fr"
					? "french"
					: "english"
			];
		} else {
			return key;
		}
	};
	return { dbTranslator };
};
