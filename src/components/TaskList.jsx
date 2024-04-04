import { Box } from "@mui/material";
import { Task } from ".";

const TaskList = () => {
	// const []

	return (
		<Box
			spacing={2}
			sx={{
				mt: "1em",
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))",
				gap: "1em",
			}}>
			{/* lists */}
			{Array(5)
				.fill(null)
				.map((_, idx) => (
					<Task key={idx} content="Hello" isCompleted={idx === 0 ? true : false} />
				))}
		</Box>
	);
};

export default TaskList;
