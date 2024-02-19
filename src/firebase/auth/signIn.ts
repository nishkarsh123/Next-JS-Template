import firebase_app, { auth } from "../config"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";



export default async function signIn(email:string, password:string) {
    let result = null,
        error = null;
    try {
        console.log(email,password)
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}