import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoimg from "../ownassets/logo.png";
import { BiCartAlt } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import Offcanvas from "react-bootstrap/Offcanvas";

const CustomNavbar = ({ changeLanguage }) => {
	const { t } = useTranslation();
	const [selectedLang, setSelectedLang] = useState("en");

	return (
		<>
			<Navbar
				collapseOnSelect
				sticky='top'
				bg='light'
				expand={"lg"}
				className='my-1 w-100'>
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
								<Nav.Link eventKey='1' className=' text-center mx-1 my-auto'>
									<NavLink
										className={(isActive) => (!isActive ? "" : "active")}
										to='/products'>
										{t("cards")}
									</NavLink>
								</Nav.Link>
								<Nav.Link eventKey='2' className=' text-center mx-1 my-auto'>
									<NavLink
										className={(isActive) => (!isActive ? "" : "active")}
										to='/cards'>
										{t("app")}
									</NavLink>
								</Nav.Link>{" "}
								<Nav.Link eventKey='3' className=' text-center mx-1 my-auto'>
									<NavLink
										className={(isActive) => (!isActive ? "" : "active")}
										to='/support'>
										{t("suprt")}
									</NavLink>
								</Nav.Link>{" "}
								<Nav.Link eventKey='4' className=' text-center mx-1 my-auto'>
									<NavLink
										className={(isActive) => (!isActive ? "" : "active")}
										to='/cart'>
										<BiCartAlt
											style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
										/>
									</NavLink>
								</Nav.Link>
								<Nav.Link eventKey='5' className=' text-center mx-1 my-auto'>
									<NavLink
										className={(isActive) => (!isActive ? "" : "active")}
										to='/auth'>
										<IoPersonOutline
											style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
										/>
									</NavLink>
								</Nav.Link>
								<Nav.Link eventKey='6' className=' text-center mx-1 my-auto'>
									<NavLink
										className={(isActive) => (!isActive ? "" : "active")}
										to='/products'>
										<button className='btn mainColor secondarybg'>
											{t("shpCrd")}
										</button>
									</NavLink>
								</Nav.Link>
								<NavDropdown
									className=' text-center mx-1 my-auto langsele'
									title={
										selectedLang === "en"
											? "English"
											: selectedLang === "es"
											? "Spanish"
											: selectedLang === "fr"
											? "French"
											: ""
									}
									style={{
										maxWidth: "106.15px",
										width: "100%",
										borderRadius: "0.375rem",
										alignSelf: "center",
									}}
									id='collasible-nav-dropdown'>
									<NavDropdown.Item
										onClick={() => {
											changeLanguage("en");
											setSelectedLang("en");
										}}
										href='#'>
										English
									</NavDropdown.Item>
									<NavDropdown.Item
										href='#'
										onClick={() => {
											changeLanguage("es");
											setSelectedLang("es");
										}}>
										Spanish
									</NavDropdown.Item>
									<NavDropdown.Item
										onClick={() => {
											changeLanguage("fr");
											setSelectedLang("fr");
										}}
										href='#'>
										French
									</NavDropdown.Item>
								</NavDropdown>
								<NavLink
									className={(isActive) =>
										"nav-link text-center mx-1 my-auto" +
										(!isActive ? "" : " active")
									}
									to='#'></NavLink>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default CustomNavbar;
