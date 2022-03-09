import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const StepperFooter = (props) => {
	const { activeStep, steps, handleReset, handleBack, handleNext } = props;

	return (
		<div>
			{activeStep === steps.length ? (
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						pt: 2
					}}
				>
					<Button onClick={handleReset}>Reset</Button>
				</Box>
			) : (
				<React.Fragment>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							pt: 2
						}}
					>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1
								? "Finish"
								: "Next"}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</div>
	);
};

export default StepperFooter;
