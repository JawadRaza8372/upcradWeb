import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import logoimg from "../ownassets/logo.png";
import { BiCartAlt } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
const CustomNavbar = () => {
	return (
		<div className='col-12'>
			<Navbar collapseOnSelect expand='lg' bg='light'>
				<Container>
					<NavLink
						className='navbar-brand d-flex align-items-center h-100'
						to='/'>
						<img
							style={{ objectFit: "contain", height: "50px" }}
							src={logoimg}
							alt='logo'
						/>
					</NavLink>
					<Navbar.Toggle
						aria-controls='responsive-navbar-nav'
						style={{ outline: "0px", boxShadow: "none !important" }}
					/>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav
							className='col-12 col-md-7 col-lg-7 col-xl-7'
							style={{ marginLeft: "auto" }}>
							<NavLink
								className={(isActive) =>
									"nav-link mx-auto my-auto" + (!isActive ? "" : " active")
								}
								to='/cards'>
								Cards
							</NavLink>

							<NavLink
								className={(isActive) =>
									"nav-link mx-auto my-auto" + (!isActive ? "" : " active")
								}
								to='/'>
								App
							</NavLink>

							<NavLink
								className={(isActive) =>
									"nav-link mx-auto my-auto" + (!isActive ? "" : " active")
								}
								to='/'>
								Support
							</NavLink>

							<NavLink
								className={(isActive) =>
									"nav-link mx-auto my-auto" + (!isActive ? "" : " active")
								}
								to='/cart'>
								<BiCartAlt
									style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
								/>
							</NavLink>

							<NavLink
								className={(isActive) =>
									"nav-link mx-auto my-auto" + (!isActive ? "" : " active")
								}
								to='/'>
								<IoPersonOutline
									style={{ fontSize: "30px", color: "rgba(0,0,0,0.5)" }}
								/>
							</NavLink>

							<NavLink
								className={(isActive) =>
									"nav-link mx-auto my-auto" + (!isActive ? "" : " active")
								}
								to='/cards'>
								<button className='btn mainColor secondarybg'>
									Shop Cards
								</button>
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default CustomNavbar;
