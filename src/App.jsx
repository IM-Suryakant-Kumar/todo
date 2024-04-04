import { Stack } from "@mui/material";
import { Header, TaskInput, TaskList } from "./components";

function App() {
	return (
		<Stack component="main" sx={{ width: "80%", gap: "1em", m: "2em auto" }}>
			{/* Header */}
			<Header />
			{/* TaskInput */}
			<TaskInput />
			{/* TaskList */}
			<TaskList />
		</Stack>
	);
}

export default App;
