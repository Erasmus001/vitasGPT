import { AuthContextProp } from '@/Types';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const AuthContext = createContext({
	currentUser: null,
	EmailSignin: (email: string | undefined, password: string | undefined) =>
		Promise,
	EmailSignup: (email: string | undefined, password: string | undefined) =>
		Promise,
	GoogleSignin: () => Promise,
	Signout: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: AuthContextProp) => {
	const [currentUser, setCurrentUser] = useState<firebase.User | null>(true);
	const provider = new GoogleAuthProvider();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});
	});

	// * Signup with Email and Password
	const EmailSignup = async (email: string, password: string) => {
		return await createUserWithEmailAndPassword(auth, email, password).then(
			(userCredential) => {
				try {
					//* Signed in
					const user = userCredential.user;
					setCurrentUser(user);
				} catch (error) {
					alert(error);
					return;
				}
			}
		);
	};

	// * Signin with Email and Password
	const EmailSignin = async (email: string, password: string) => {
		return await signInWithEmailAndPassword(auth, email, password).then(
			(userCredential) => {
				try {
					//* Signed in
					const user = userCredential.user;
					setCurrentUser(user);
					// ...
				} catch (error) {
					console.log('====================================');
					console.log(error);
					console.log('====================================');
					// ..
				}
			}
		);
	};

	//* Google Signin
	const GoogleSignin = async () => {
		return await signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;

				console.log('Token:', token);

				// The signed-in user info.
				const user = result?.user;
				setCurrentUser(user);
			})
			.catch((error) => {
				// Handle Errors here.
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);

				console.log('====================================');
				console.log(email);
				console.log(credential);
				console.log('====================================');
				alert(error);
				// ...
			});
	};

	const Signout = async () => {
		return await signOut(auth).then(() => {
			try {
				// Sign-out successful.
				setCurrentUser(null);
			} catch (error) {
				console.log(error);
			}
		});
	};

	const globalVal = {
		currentUser,
		EmailSignin,
		EmailSignup,
		GoogleSignin,
		Signout,
	};

	return (
		<AuthContext.Provider value={globalVal}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
