import PropTypes from "prop-types";
import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/reducers";

const Task = ({ id, content, isCompleted }) => {
	const dispatch = useDispatch();

	return (
		<Paper variant="outlined" sx={{ display: "flex", alignItems: "center" }}>
			<Checkbox
				checked={isCompleted}
				onClick={() =>
					dispatch(updateTask({ id, content, isCompleted: !isCompleted }))
				}
			/>
			<Typography
				variant="subtitle1"
				sx={{ textDecoration: `${isCompleted && "line-through"}` }}>
				{content.substring(0, 50)}
			</Typography>
			<IconButton
				aria-label="delete"
				sx={{ ml: "auto" }}
				onClick={() => dispatch(deleteTask(id))}>
				<Delete color="warning" />
			</IconButton>
		</Paper>
	);
};

Task.propTypes = {
	id: PropTypes.string,
	content: PropTypes.string,
	isCompleted: PropTypes.bool,
};

export default Task;
