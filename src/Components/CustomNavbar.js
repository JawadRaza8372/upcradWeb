import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomHook } from "../CustomHook/CustomHook";
import logoimg from "../ownassets/logo.png";
import { BiCartAlt } from "react-icons/bi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const CustomNavbar = ({ changeLanguage }) => {
	const { dbTranslator } = CustomHook();
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const deflng = i18n?.language ? i18n?.language : "en";
	const [selectedLang, setSelectedLang] = useState(deflng);
	const [inputval, setinputval] = useState("");
	const [openModel, setopenModel] = useState(false);
	const { footballCards, otherProducts } = useSelector(
		(state) => state.project
	);
	const filteredData = () => {
		if (inputval !== "") {
			let res1 = footballCards?.filter(
				(dat) =>
					dat?.title?.toLowerCase().includes(inputval?.toLowerCase()) ||
					dat?.title?.toLowerCase() === inputval?.toLowerCase()
			);

			return res1;
		} else {
			return footballCards?.slice(0, 3);
		}
	};
	const filteredDataOther = () => {
		if (inputval !== "") {
			let res2 = otherProducts?.filter(
				(dat) =>
					dat?.title?.toLowerCase().includes(inputval?.toLowerCase()) ||
					dat?.title?.toLowerCase() === inputval?.toLowerCase()
			);
			return res2;
		} else {
			return otherProducts?.slice(0, 3);
		}
	};
	return (
		<>
			<div
				style={{
					position: "sticky",
					top: "0px",
					width: "100%",
					height: "40px",
					background: "white",
					zIndex: "1020",
				}}>
				<div className='allCenter mainColor mainColoerdDiv'>
					{dbTranslator("smallbanner")}
				</div>
			</div>
			<Navbar
				collapseOnSelect
				sticky='top'
				bg='light'
				expand={"lg"}
				className='w-100'>
				<Container>
					<div
						style={{ width: "auto", flex: "1" }}
						className='d-flex allCenter'>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-lg`}
							aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
							placement='end'>
							<Offcanvas.Body style={{ width: "auto", flex: "0" }}>
								<Nav className='justify-content-start flex-grow-1 pe-3'>
									<Nav.Link
										eventKey='1'
										className=' text-center mx-1 my-auto py-1'>
										<NavLink
											className={({ isActive }) => (isActive ? "active" : "")}
											to='/products'>
											{dbTranslator("prdcts")}
										</NavLink>
									</Nav.Link>
									<Nav.Link
										eventKey='2'
										className=' text-center mx-1 my-auto py-1'>
										<NavLink
											className={({ isActive }) => (!isActive ? "" : "active")}
											to='/cards'>
											{dbTranslator("app")}
										</NavLink>
									</Nav.Link>
									<Nav.Link
										eventKey='3'
										className=' text-center mx-1 my-auto  py-1'>
										<NavLink
											className={({ isActive }) => (!isActive ? "" : "active")}
											to='/support'>
											{dbTranslator("suprt")}
										</NavLink>
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
						<Navbar.Toggle
							className=' py-1'
							aria-controls={`offcanvasNavbar-expand-lg`}
						/>

						<NavLink
							to='/'
							onClick={() => {
								const section = document.querySelector("#mainSection");
								section?.scrollIntoView({
									behavior: "smooth",
									block: "end",
									inline: "nearest",
								});
							}}
							style={{
								marginRight: "0px",
								width: "auto",
								flex: "1",
								background: "transparent",
							}}
							className='navbar-brand d-flex nillbtn h-100 allCenter  py-1'>
							<img
								style={{ objectFit: "contain" }}
								className='logoImgResp'
								src={logoimg}
								alt='logo'
							/>
						</NavLink>
					</div>
					<div className='d-flex d-lg-none'>
						<NavLink
							className={({ isActive }) =>
								"nav-link my-auto  py-1 rightMarginResp" +
								(!isActive ? "" : " active")
							}
							to='/cart'>
							<BiCartAlt
								className='responsiveElements'
								style={{ color: "rgba(0,0,0,0.5)" }}
							/>
						</NavLink>

						<div
							onClick={() => {
								setopenModel(true);
							}}
							className={"nav-link my-auto  py-1"}>
							<AiOutlineSearch
								className='responsiveElements'
								style={{ color: "rgba(0,0,0,0.5)" }}
							/>
						</div>
					</div>
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement='end'>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
								<img
									style={{
										objectFit: "contain",
										height: "50px",
										width: "120px",
									}}
									src={logoimg}
									alt='logo'
								/>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1 pe-3'>
								<div className='d-block d-lg-none'>
									<Nav.Link
										eventKey='1'
										className=' text-center mx-1  py-1 my-auto'>
										<NavLink
											className={({ isActive }) => (!isActive ? "" : "active")}
											to='/products'>
											{dbTranslator("prdcts")}
										</NavLink>
									</Nav.Link>
									<Nav.Link
										eventKey='2'
										className=' text-center mx-1  py-1 my-auto'>
										<NavLink
											className={({ isActive }) => (!isActive ? "" : "active")}
											to='/cards'>
											{dbTranslator("app")}
										</NavLink>
									</Nav.Link>
									<Nav.Link
										eventKey='3'
										className=' text-center mx-1  py-1 my-auto'>
										<NavLink
											className={({ isActive }) => (!isActive ? "" : "active")}
											to='/support'>
											{dbTranslator("suprt")}
										</NavLink>
									</Nav.Link>
								</div>

								<Nav.Link
									eventKey='32'
									className=' text-center mx-1  py-1 my-auto d-none d-lg-block'>
									<div
										onClick={() => {
											setopenModel(true);
										}}
										className={"nav-link my-auto"}>
										<AiOutlineSearch
											style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
										/>
									</div>
								</Nav.Link>
								<Nav.Link
									eventKey='4'
									className=' text-center  py-1 mx-1 my-auto d-none d-lg-block'>
									<NavLink
										className={({ isActive }) => (!isActive ? "" : "active")}
										to='/cart'>
										<BiCartAlt
											style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
										/>
									</NavLink>
								</Nav.Link>

								<Nav.Link
									eventKey='6'
									className=' py-1 text-center mx-1 my-auto'>
									<NavLink
										className={({ isActive }) => (!isActive ? "" : "active")}
										to='/products'>
										<button className='btn mainColor secondarybg'>
											{dbTranslator("shpCrd")}
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
											: selectedLang === "de"
											? "German"
											: selectedLang === "it"
											? "Italian"
											: "Language"
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
									<NavDropdown.Item
										onClick={() => {
											changeLanguage("it");
											setSelectedLang("it");
										}}
										href='#'>
										Italian
									</NavDropdown.Item>
									<NavDropdown.Item
										onClick={() => {
											changeLanguage("de");
											setSelectedLang("de");
										}}
										href='#'>
										German
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
			<div
				className={`offcanvas offcanvas-end ${openModel ? "show" : "close"}`}>
				<Offcanvas.Header>
					<div className='allCenter justify-content-between flex-column w-100'>
						<div className='allCenter justify-content-between flex-row w-100'>
							<img
								style={{ objectFit: "contain", height: "50px", width: "120px" }}
								src={logoimg}
								alt='logo'
							/>
							<button
								onClick={() => {
									setopenModel(false);
								}}
								className='btn'>
								<AiOutlineClose
									style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
								/>
							</button>
						</div>
						<input
							className='searhinputtt'
							value={inputval}
							onChange={(e) => {
								setinputval(e.target.value);
							}}
							placeholder={dbTranslator("search")}
						/>
					</div>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{filteredData()?.map((dat) => (
						<div
							key={dat?.id}
							onClick={() => {
								setopenModel(false);
								navigate(`/cardCustomization/${dat?.id}`);
							}}
							className='searhedCard'>
							<div
								style={{ width: "70px", height: "60px", marginRight: "10px" }}>
								<img
									style={{
										objectFit: "contain",
										width: "100%",
										height: "60px",
									}}
									src={dat?.imgSrc}
									alt={dat.title}
								/>
							</div>
							<div
								className='d-flex align-items-start justify-content-evenly flex-column'
								style={{ width: "calc(100% - 80px)", height: "100%" }}>
								<span>{dat.title}</span>
								<span>${dat.price}</span>
							</div>
						</div>
					))}
					{filteredDataOther()?.map((dat) => (
						<div
							key={dat?.id}
							onClick={() => {
								setopenModel(false);
								navigate(`/productInfo/${dat?.id}`);
							}}
							className='searhedCard'>
							<div
								style={{
									width: "70px",
									borderRadius: "10px",
									height: "60px",
									marginRight: "10px",
									overflow: "hidden",
								}}>
								<img
									style={{
										objectFit: "cover",
										width: "100%",
										height: "60px",
									}}
									src={dat?.imgSrc}
									alt={dat.title}
								/>
							</div>
							<div
								className='d-flex align-items-start justify-content-evenly flex-column'
								style={{ width: "calc(100% - 80px)", height: "100%" }}>
								<span>{dat.title}</span>
								<span>${dat.price}</span>
							</div>
						</div>
					))}
				</Offcanvas.Body>
			</div>
		</>
	);
};

export default CustomNavbar;
