import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
	tasks: [],
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push({
				id: nanoid(),
				content: action.payload,
				isCompleted: false,
			});
		},
		deleteTask: (state, action) => {
			state.tasks = state.tasks.filter(t => t.id !== action.payload);
		},
		updateTask: (state, action) => {
			state.tasks = state.tasks.map(t =>
				t.id === action.payload.id ? action.payload : t
			);
		},
	},
});

export const { getTasks, addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
