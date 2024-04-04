import PropTypes from "prop-types";
import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, Paper, Typography } from "@mui/material";

const Task = ({ content, isCompleted }) => {

	return (
		<Paper variant="outlined" sx={{ display: "flex", alignItems: "center" }}>
			<Checkbox checked={isCompleted} />
			<Typography
				variant="subtitle1"
				sx={{ textDecoration: `${isCompleted && "line-through"}` }}>
				{content.substring(0, 50)}
			</Typography>
			<IconButton aria-label="delete" sx={{ ml: "auto" }}>
				<Delete color="warning" />
			</IconButton>
		</Paper>
	);
};

Task.propTypes = {
	content: PropTypes.string,
	isCompleted: PropTypes.bool,
};

export default Task;
