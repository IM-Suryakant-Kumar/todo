import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/reducers";

const TaskInput = () => {
  const dispatch = useDispatch()
	const [content, setNewContent] = useState("");

	const handleButton = () => {
		dispatch(addTask(content))
		setNewContent("");
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
				value={content}
				onChange={e => setNewContent(e.target.value)}
			/>
			{/* Add Button */}
			<Button
				variant="contained"
				color="secondary"
				sx={{ width: "5rem" }}
				disabled={!content}
				onClick={handleButton}>
				Add
			</Button>
		</Stack>
	);
};

export default TaskInput;
