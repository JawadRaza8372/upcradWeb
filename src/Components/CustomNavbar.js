import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoimg from "../ownassets/logo.png";
import { BiCartAlt } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect } from "react";

const CustomNavbar = ({ changeLanguage }) => {
	const { t } = useTranslation();
	const [lang, setlang] = useState("en");
	useEffect(() => {
		const newfunc = () => {
			changeLanguage(lang);
		};
		newfunc();
	}, [lang, changeLanguage]);

	return (
		<>
			<Navbar sticky='top' bg='light' expand={"lg"} className='my-1 w-100'>
				<Container>
					<div style={{ width: "fit-content" }} className='allCenter flex-row'>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
						<NavLink
							style={{ marginRight: "0px" }}
							className='navbar-brand d-flex align-items-center h-100'
							to='/'>
							<img
								style={{ objectFit: "contain", height: "50px" }}
								src={logoimg}
								alt='logo'
							/>
						</NavLink>
					</div>
					<div className='d-flex d-lg-none'>
						<NavLink
							className={(isActive) =>
								"nav-link my-auto" + (!isActive ? "" : " active")
							}
							style={{ marginRight: "20px" }}
							to='/cart'>
							<BiCartAlt
								style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
							/>
						</NavLink>

						<NavLink
							className={(isActive) =>
								"nav-link my-auto" + (!isActive ? "" : " active")
							}
							to='/auth'>
							<IoPersonOutline
								style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
							/>
						</NavLink>
					</div>
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement='end'>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
								<img
									style={{ objectFit: "contain", height: "50px" }}
									src={logoimg}
									alt='logo'
								/>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1 pe-3'>
								<NavLink
									className={(isActive) =>
										"nav-link text-center mx-1 my-auto" +
										(!isActive ? "" : " active")
									}
									to='/products'>
									{t("cards")}
								</NavLink>

								<NavLink
									className={(isActive) =>
										"nav-link text-center mx-1 my-auto" +
										(!isActive ? "" : " active")
									}
									to='/cards'>
									{t("app")}
								</NavLink>

								<NavLink
									className={(isActive) =>
										"nav-link text-center mx-1 my-auto" +
										(!isActive ? "" : " active")
									}
									to='/support'>
									{t("suprt")}
								</NavLink>

								<NavLink
									className={(isActive) =>
										"nav-link text-center mx-1 my-auto" +
										(!isActive ? "" : " active")
									}
									to='/cart'>
									<BiCartAlt
										style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
									/>
								</NavLink>

								<NavLink
									className={(isActive) =>
										"nav-link text-center mx-1 my-auto" +
										(!isActive ? "" : " active")
									}
									to='/auth'>
									<IoPersonOutline
										style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
									/>
								</NavLink>

								<NavLink
									className={(isActive) =>
										"nav-link text-center mx-1 my-auto" +
										(!isActive ? "" : " active")
									}
									to='/products'>
									<button className='btn mainColor secondarybg'>
										{t("shpCrd")}
									</button>
								</NavLink>

								<select
									className='btn langsele nav-link text-center mx-1 my-auto'
									onChange={(e) => setlang(e.target.value)}>
									<option defaultChecked value={"en"}>
										English
									</option>
									<option defaultChecked value={"es"}>
										Spanish
									</option>
									<option defaultChecked value={"fr"}>
										French
									</option>
								</select>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default CustomNavbar;
