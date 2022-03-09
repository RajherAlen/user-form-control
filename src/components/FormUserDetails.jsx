import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@mui/material/Box";

export const FormUserDetails = (props) => {
	const { values, handleChange } = props;

	return (
		<>
			<Box sx={{ mb: 2 }}>
				<TextField
					id="standard-basic"
					label="Unesi ime"
					variant="standard"
					onChange={handleChange("ime")}
					defaultValue={values.ime}
				/>
			</Box>
			<Box sx={{ mb: 2 }}>
				<TextField
					id="standard-basic"
					label="Unesi prezime"
					variant="standard"
					onChange={handleChange("prezime")}
					defaultValue={values.prezime}
				/>
			</Box>
			<Box>
				<TextField
					id="standard-basic"
					label="Unesi email"
					variant="standard"
					onChange={handleChange("email")}
					defaultValue={values.email}
				/>
			</Box>
		</>
	);
};

export default FormUserDetails;
