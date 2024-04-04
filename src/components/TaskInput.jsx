import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const TaskInput = () => {
	const [task, setTask] = useState("");

	const handleButton = () => {
		console.log(task);

		setTask("");
	};

	return (
		<Stack
			direction="row"
			sx={{ justifyContent: "center", alignItems: "flex-end", gap: "1em" }}>
			{/* input */}
			<TextField
				id="standard-basic"
				label="Add Task"
				name="task"
				variant="standard"
				value={task}
				onChange={e => setTask(e.target.value)}
			/>
			{/* Add Button */}
			<Button
				variant="contained"
				color="secondary"
				sx={{ width: "5rem" }}
				disabled={!task}
				onClick={handleButton}>
				Add
			</Button>
		</Stack>
	);
};

export default TaskInput;
