import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@mui/material/Box";

export const FormPersonalDetails = (props) => {
	const { values, handleChange } = props;
	return (
		<>
			<Box sx={{ mb: 2 }}>
				<TextField
					id="standard-basic"
					label="Unesi zanimanje"
					variant="standard"
					onChange={handleChange("zanimanje")}
					defaultValue={values.zanimanje}
				/>
			</Box>
			<Box sx={{ mb: 2 }}>
				<TextField
					id="standard-basic"
					label="Unesi grad"
					variant="standard"
					onChange={handleChange("grad")}
					defaultValue={values.grad}
				/>
			</Box>
			<Box>
				<TextField
					id="standard-basic"
					label="Unesi bio"
					variant="standard"
					onChange={handleChange("bio")}
					defaultValue={values.bio}
				/>
			</Box>
		</>
	);
};

export default FormPersonalDetails;
