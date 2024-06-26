import { Store, registerInDevtools } from "pullstate";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const AuthStore = new Store({
  isLoggedIn: false,
  initialized: false,
  user: null,
});

onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChange ", user);
  AuthStore.update((store) => {
    store.user = user;
    store.isLoggedIn = user ? true : false;
    store.initialized = true;
  });
});

export const appSignIn = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    AuthStore.update((store) => {
      store.user = resp.user;
      store.isLoggedIn = resp.user ? true : false;
    });
    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

export const appSignOut = async () => {
  try {
    await signOut(auth);
    AuthStore.update((store) => {
      store.user = null;
      store.isLoggedIn = false;
    });
    return { user: null };
  } catch (e) {
    return { error: e };
  }
};

export const appSignUp = async (email, password, displayName) => {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(resp.user, { displayName });

    AuthStore.update((store) => {
      store.user = auth.currentUser;
      store.isLoggedIn = true;
    });

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      id: auth.currentUser.uid,
      name: displayName,
      email: auth.currentUser.email,
      photo: "",
      points: 0,
    });

    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

registerInDevtools({ AuthStore });
