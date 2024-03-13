import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-hot-toast";

export const GoogleApi = async () => {
    try {
        const googleProvider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, googleProvider);
        return response;
    } catch (err) { }
};

export const LogOutAPI = async () => {
    signOut(auth)
        .then(() => {
            toast.success("Signed Out Successfully");
        })
        .catch((error) => {
            console.log(error);
            toast.error("Something went wrong :/");
        });
};