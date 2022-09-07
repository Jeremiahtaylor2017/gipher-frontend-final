import { createContext, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: {
		"_id": "6313827b6184dbb40a549b7d",
		"username": "cami",
		"email": "cami@gmail.com",
		"password": "$2b$10$Q4UFKpWeOikSMNvpkMqMae5w1LMOS2NUmRr1Ii.eWI6cgA.C/3iIO",
		"profilePicture": "",
		"coverPicture": "",
		"followers": [],
		"following": ["6313803782f8003244316c30"],
		"isAdmin": false,
		"createdAt": { "$date": { "$numberLong": "1662222971012" } },
		"updatedAt": { "$date": { "$numberLong": "1662227589286" } },
		"__v": { "$numberInt": "0" },
		"name": "Camille",
	},
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
