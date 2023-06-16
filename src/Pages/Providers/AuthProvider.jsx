import React, { createContext, useEffect, useState } from "react";
import {
	getAuth,
	signOut,
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./../../Firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		localStorage.removeItem("access-token");
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);

			if (currentUser?.email) {
				axios
					.post("https://sports-gear-server.vercel.app/jwt", { email: currentUser.email })
					.then((data) => {
						console.log(data.data.token);
						localStorage.setItem("access-token", data.data.token);
					});
			} else {
				localStorage.removeItem("access-token");
			}
			setLoading(false);
			// console.log(currentUser);
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = { user, createUser, signIn, updateUserProfile, googleSignIn, logOut, loading };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
