import { Box, Typography } from "@mui/material";

const Header = () => {
	return (
		<Box
			component="header"
			sx={{
				color: "#9c27b0",
				border: "2px solid",
				borderRadius: "0.4em",
				p: "0.8em",
				mb: "1em",
			}}>
			<Typography variant="h5" component="h1" textAlign="center">
				Todo App
			</Typography>
		</Box>
	);
};

export default Header;
