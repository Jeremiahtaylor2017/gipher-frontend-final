import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Splash from "./pages/Splash";
import Register from "./pages/Register";

import "./App.css";

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Router>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Register />} />
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <Splash />}
				/>
				<Route
					path="/register"
					element={user ? <Navigate to="/" /> : <Register />}
				/>
				<Route path="/profile/:username" element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
