import React from "react";
import List from "@mui/material/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const Confirm = (props) => {
	const {
		values: { ime, prezime, email, zanimanje, grad, bio }
	} = props;
	return (
		<>
			<List>
				<ListItem>
					<ListItemText primary="Ime" secondary={ime} />
				</ListItem>
				<ListItem>
					<ListItemText primary="Prezime" secondary={prezime} />
				</ListItem>
				<ListItem>
					<ListItemText primary="E-mail" secondary={email} />
				</ListItem>
				<ListItem>
					<ListItemText primary="Zanimanje" secondary={zanimanje} />
				</ListItem>
				<ListItem>
					<ListItemText primary="Grad" secondary={grad} />
				</ListItem>
				<ListItem>
					<ListItemText primary="Bio" secondary={bio} />
				</ListItem>
			</List>
			<br />
		</>
	);
};

export default Confirm;
