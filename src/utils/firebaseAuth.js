import { initializeApp } from "firebase/app";

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

import Cookie from "universal-cookie";

const cookie = new Cookie();

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
//   appId: process.env.FIREBASE_AUTHID,
//   measurementId: process.env.FIREBASE_MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAiABSBU6M8wqb2BqKSDm9t9vSbIZ3uofw",
  authDomain: "react-chat-42101.firebaseapp.com",
  projectId: "react-chat-42101",
  storageBucket: "react-chat-42101.appspot.com",
  messagingSenderId: "108020444719",
  appId: "1:108020444719:web:578dfc420939da6333e0da",
  measurementId: "G-6JHE4PM17H"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firebaseAuth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();

// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);

const authProvider = new GoogleAuthProvider();

const fbProvider = new FacebookAuthProvider();

const gitHubProvider = new GithubAuthProvider();

// authProvider.setCustomParameters({
//   prompt: "select_account",
// });

// export const storage = getStorage();

// export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, authProvider);
    cookie.set("auth-token", result.user.refreshToken);
  } catch (error) {
    alert(error.message);
  }
};


// export const signInWithGoogleRedirect = async () => {
//   try {
//     const result = await signInWithRedirect(auth, authProvider);
//     cookie.set("auth-token", result.user.refreshToken);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// export const db = getFirestore();

// export const signInWithFacebookRedirect = async () => {
//   try {
//     const result = await signInWithRedirect(auth, fbProvider);
//     cookie.set("auth-token", result.user.refreshToken);
//   } catch (error) {
//     alert(error.message);
//   }
// };

export const signInWithFacebookPopup = async () => {
  try {
    const result = await signInWithPopup(auth, fbProvider);
    cookie.set("auth-token", result.user.refreshToken);
  } catch (error) {
    alert(error.message);
  }
};

// export const signInWithGitHubRedirect = async () => {
//   try {
//     const result = await signInWithRedirect(auth, gitHubProvider);
//     cookie.set("auth-token", result.user.refreshToken);
//   } catch (error) {
//     alert(error.message);
//   }
// };

export const signInWithGitHubPopup = async () => {
  try {
    const result = await signInWithPopup(auth, gitHubProvider);
    cookie.set("auth-token", result.user.refreshToken);
  } catch (error) {
    alert(error.message);
  }
};

// export const createUserDocument = async (
//   userAuth,
//   additionalInfo = { displayName: "Azeem Ali" }
// ) => {
//   if (!userAuth) {
//     return;
//   }

//   const userDocRef = doc(db, "users", userAuth.uid);

//   console.log("userDocRef", userDocRef);

//   const userSnapshot = await getDoc(userDocRef);

//   console.log("userSnapshot", userSnapshot);

//   //Check wheter the user exists or not
//   console.log("userSnapshot Exists", userSnapshot.exists());
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInfo,
//       });
//     } catch (error) {
//       console.log("error creating the user", error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createEmailAuth = async (email, password) => {
//   if (!email || !password) {
//     return;
//   }
//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInEmailAuth = async (email, password) => {
//   if (!email || !password) {
//     return;
//   }
//   return await signInWithEmailAndPassword(auth, email, password);
// };

export const signOutUser = async () => {
  await signOut(firebaseAuth);
};
