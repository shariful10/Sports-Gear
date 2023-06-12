import { useContext } from "react";
import ThemeContext from "../Pages/Providers/ThemeProvider";

const useTheme = () => {
	const theme = useContext(ThemeContext);
	return theme;
};

export default useTheme;