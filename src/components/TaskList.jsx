import { Box } from "@mui/material";
import { Task } from ".";
import { useSelector } from "react-redux";

const TaskList = () => {
	const tasks = useSelector(state => state.task.tasks);

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
			{tasks
				?.slice()
				.reverse()
				.map((t) => (
					<Task key={t.id} id={t.id} content={t.content} isCompleted={t.isCompleted} />
				))}
		</Box>
	);
};

export default TaskList;
