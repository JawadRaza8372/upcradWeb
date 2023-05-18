import React from "react";
import AttributesInput from "./AttributesInput";
import QuestionLinee from "./QuestionLinee";
import { CustomHook } from "../CustomHook/CustomHook";

const ChooseAttributComp = ({
	selectedSubPositions,
	positionValues,
	onSetSubPositionValues,
	overAllRating,
	onChangeOverAllRatting,
}) => {
	const { dbTranslator } = CustomHook();

	const randomizebtn = () => {
		onSetSubPositionValues({
			fastValue: Math.ceil(Math.random() * (98 - 80 + 1) + 80),
			secValue: Math.ceil(Math.random() * (98 - 80 + 1) + 80),
			thrdValue: Math.ceil(Math.random() * (98 - 80 + 1) + 80),
			forValue: Math.ceil(Math.random() * (98 - 80 + 1) + 80),
			fifValue: Math.ceil(Math.random() * (98 - 80 + 1) + 80),
			sixValue: Math.ceil(Math.random() * (98 - 80 + 1) + 80),
		});
	};

	return (
		<div className='w-90 h-100 mx-auto d-flex align-items-start justify-content-center flex-column'>
			<span className='mainColor CustHeadingRespComp'>
				{dbTranslator("head4")}
			</span>
			<span className='CustSubHeadingRespComp'>{dbTranslator("shead4")}</span>
			<QuestionLinee
				label={"E"}
				title={dbTranslator("poptione")}
				button={
					<button onClick={() => randomizebtn()} className='smallBtnsSettings'>
						{dbTranslator("random")}
					</button>
				}>
				<div className='row w-100 mx-auto' style={{ marginTop: "20px" }}>
					<div className='col-12 col-md-6'>
						<AttributesInput
							title={selectedSubPositions?.fastValue}
							value={positionValues?.fastValue}
							onChangeVal={(e) =>
								onSetSubPositionValues({
									...positionValues,
									fastValue: e.target.value,
								})
							}
						/>
						<AttributesInput
							title={selectedSubPositions?.secValue}
							value={positionValues?.secValue}
							onChangeVal={(e) =>
								onSetSubPositionValues({
									...positionValues,
									secValue: e.target.value,
								})
							}
						/>
						<AttributesInput
							title={selectedSubPositions?.thrdValue}
							value={positionValues?.thrdValue}
							onChangeVal={(e) =>
								onSetSubPositionValues({
									...positionValues,
									thrdValue: e.target.value,
								})
							}
						/>
					</div>
					<div className='col-12 col-md-6'>
						<AttributesInput
							title={selectedSubPositions?.forValue}
							value={positionValues?.forValue}
							onChangeVal={(e) =>
								onSetSubPositionValues({
									...positionValues,
									forValue: e.target.value,
								})
							}
						/>
						<AttributesInput
							title={selectedSubPositions?.fifValue}
							value={positionValues?.fifValue}
							onChangeVal={(e) =>
								onSetSubPositionValues({
									...positionValues,
									fifValue: e.target.value,
								})
							}
						/>
						<AttributesInput
							title={selectedSubPositions?.sixValue}
							value={positionValues?.sixValue}
							onChangeVal={(e) =>
								onSetSubPositionValues({
									...positionValues,
									sixValue: e.target.value,
								})
							}
						/>
					</div>
				</div>
			</QuestionLinee>
			<QuestionLinee label={"F"} title={"Overall rating"}>
				<div className='row w-100 gx-0 mx-auto' style={{ marginTop: "20px" }}>
					<div className='col-12 mt-1 col-md-3'>
						<input
							placeholder='00'
							type='number'
							value={overAllRating}
							maxLength={2}
							onChange={onChangeOverAllRatting}
							className='width90'
						/>
						{/* <div className='largerRatingDiv'>
							{overAllRating ? overAllRating : "00"}
						</div> */}
					</div>
					<div className='col-12 mt-1 col-md-9 d-flex align-items-center justify-content-evenly flex-row'>
						<span className='respQuestionHeading'>
							{dbTranslator("sugestrat")}
						</span>

						<div className='smalltextdivRating'>
							{overAllRating > 3 ? parseInt(overAllRating - 1) : "00"}
						</div>
						<div className='smalltextdivRating'>
							{overAllRating > 0 ? overAllRating : "00"}
						</div>
						<div className='smalltextdivRating'>
							{overAllRating > 0 ? parseInt(overAllRating) + 1 : "00"}
						</div>
					</div>
				</div>
			</QuestionLinee>
		</div>
	);
};

export default ChooseAttributComp;
