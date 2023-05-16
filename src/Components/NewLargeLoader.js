import React from "react";
import { Modal } from "react-bootstrap";
import smalllogo from "../ownassets/smalllog.png";

const NewLargeLoader = () => {
	return (
		<Modal fullscreen show={true}>
			<div className='h-100 w-100 allCenter'>
				<div style={{ position: "relative", width: "150px", height: "150px" }}>
					<div className='lggloader' />
					<div
						style={{
							width: "150px",
							height: "150px",
							position: "absolute",
							top: "0px",
							left: "0px",
						}}
						className='allCenter'>
						<img
							src={smalllogo}
							alt='upcard'
							style={{ width: "120px", height: "120px", objectFit: "contain" }}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default NewLargeLoader;
