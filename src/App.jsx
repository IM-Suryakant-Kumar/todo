import { Stack } from "@mui/material";
import { Header } from "./components";

function App() {
	return (
		<Stack component="main" sx={{ width: "80%", gap: "1em", m: "2em auto" }}>
			{/* Header */}
			<Header />
			{/* TaskInput */}
			{/* TaskList */}
		</Stack>
	);
}

export default App;
