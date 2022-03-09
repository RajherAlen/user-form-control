import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Container from "@mui/material/Container";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import {
	FormUserDetails,
	FormPersonalDetails,
	Confirm,
	Success,
	StepperFooter
} from "./";

const UserForm = () => {
	const steps = ["User Details", "Persolan Details", "Confirm"];

	const [activeStep, setActiveStep] = useState(0);
	const [userDetails, setUserDetails] = useState({
		ime: "",
		prezime: "",
		email: "",
		zanimanje: "",
		grad: "",
		bio: ""
	});

	const handleChange = (input) => (event) => {
		setUserDetails({ ...userDetails, [input]: event.target.value });
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
		setUserDetails({
			ime: "",
			prezime: "",
			email: "",
			zanimanje: "",
			grad: "",
			bio: ""
		});
	};

	let currentStep = undefined;

	if (activeStep + 1 === 1) {
		currentStep = (
			<FormUserDetails handleChange={handleChange} values={userDetails} />
		);
	} else if (activeStep + 1 === 2) {
		currentStep = (
			<FormPersonalDetails
				handleChange={handleChange}
				values={userDetails}
			/>
		);
	} else if (activeStep + 1 === 3) {
		currentStep = <Confirm values={userDetails} />;
	} else {
		currentStep = <Success />;
	}

	return (
		<Container maxWidth="md">
			<Box sx={{ width: "100%" }}>
				{/* Sepper */}
				<Stepper activeStep={activeStep}>
					{steps.map((label) => {
						const stepProps = {};
						const labelProps = {};

						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>

				{/* Current Step Content */}
				<div
					className={`form__card ${
						activeStep === steps.length ? "form__card--success" : ""
					}`}
				>
					{currentStep}
				</div>

				{/* Footer Buttons */}
				<StepperFooter
					activeStep={activeStep}
					steps={steps}
					handleReset={handleReset}
					handleBack={handleBack}
					handleNext={handleNext}
				/>
			</Box>
		</Container>
	);
};

export default UserForm;
