import React from "react";
import step1 from "../ownassets/ourservices1step.png";
import step2 from "../ownassets/ourservices2step.png";
import step3 from "../ownassets/ourservices3step.png";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
const OurServicesCard = () => {
	const { i18n } = useTranslation();
	const engl = {
		step1head: "Uploaded Image",
		step2head: "Preview shown on builder",
		step3head: "Final design",
		step1: "Upload your image with background included, for best practices.",
		step2: "Our builder will show you an unedited version of your card.",
		step3: "Final product will have the image edited  by our experts.",
	};
	const esp = {
		step1head: "Imagen cargada",
		step2head: "Vista previa mostrada en el constructor",
		step3head: "Diseño final",
		step1:
			"Cargue su imagen con el fondo incluido, para conocer las mejores prácticas.",
		step2:
			"Nuestro constructor le mostrará una versión sin editar de su tarjeta.",
		step3: "El producto final tendrá la imagen editada por nuestros expertos.",
	};
	const fre = {
		step1head: "Image téléchargée",
		step2head: "Aperçu affiché sur le constructeur",
		step3head: "Conception finale",
		step1:
			"Téléchargez votre image avec l'arrière-plan inclus, pour les meilleures pratiques.",
		step2:
			"Notre constructeur vous montrera une version non éditée de votre carte.",
		step3: "Le produit final aura l'image éditée par nos experts.",
	};
	const finallag =
		i18n?.language === "en"
			? engl
			: i18n?.language === "es"
			? esp
			: i18n?.language === "fr"
			? fre
			: engl;
	return (
		<div className='scrolledDivCards p-3 px-md-0 justify-content-lg-center'>
			<div
				style={{ width: "320px", overflow: "hidden" }}
				className='allCenter flex-row mx-auto'>
				<div
					style={{
						width: "240px",
						minHeight: "280px",
						background: "white",
						height: "100%",
					}}
					className='d-flex align-items-center justify-content-between flex-column p-3'>
					<div style={{ width: "100%", height: "210px" }}>
						<img
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
							src={step1}
							alt='ste1'
						/>
					</div>
					<div style={{ width: "100%", flex: "1" }}>
						<h5 className='mainColor' style={{ textAlign: "center" }}>
							{finallag?.step1head}
						</h5>
						<p style={{ fontSize: "12px", textAlign: "center" }}>
							{finallag?.step1}
						</p>
					</div>
				</div>
				<div
					className='allCenter'
					style={{ width: "50px", height: "100%", margin: "0px 10px" }}>
					<BsArrowRight
						className='secondaryColor'
						style={{ fontSize: "50px" }}
					/>
				</div>
			</div>
			<div
				style={{ width: "320px", overflow: "hidden", margin: "0px 20px" }}
				className='allCenter flex-row mx-auto'>
				<div
					style={{
						width: "240px",
						minHeight: "280px",
						background: "white",
						height: "100%",
					}}
					className='d-flex align-items-center justify-content-between flex-column p-3'>
					<div style={{ width: "100%", height: "210px" }}>
						<img
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
							src={step2}
							alt='ste1'
						/>
					</div>
					<div style={{ width: "100%", flex: "1" }}>
						<h5 className='mainColor' style={{ textAlign: "center" }}>
							{finallag?.step2head}
						</h5>
						<p style={{ fontSize: "12px", textAlign: "center" }}>
							{finallag?.step2}
						</p>
					</div>
				</div>
				<div
					className='allCenter'
					style={{ width: "50px", height: "100%", margin: "0px 10px" }}>
					<BsArrowRight
						className='secondaryColor'
						style={{ fontSize: "50px" }}
					/>
				</div>
			</div>

			<div
				style={{
					width: "240px",
					minHeight: "280px",
					background: "white",
					height: "100%",
					overflow: "hidden",
				}}
				className='d-flex align-items-center justify-content-between flex-column p-3 mx-auto'>
				<div style={{ width: "100%", height: "210px" }}>
					<img
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
						src={step3}
						alt='ste1'
					/>
				</div>
				<div style={{ width: "100%", flex: "1" }}>
					<h5 className='mainColor' style={{ textAlign: "center" }}>
						{finallag?.step3head}
					</h5>
					<p style={{ fontSize: "12px", textAlign: "center" }}>
						{finallag?.step3}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurServicesCard;
