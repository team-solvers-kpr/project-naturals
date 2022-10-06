import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";

import initializeFirebase from "../Firebase/firebase.init";



export const auth = getAuth(initializeFirebase())

const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const auth = getAuth();

    const signInWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                swal({
                    title: "Well Done",
                    text: "Successfully logged in by Google!",
                    icon: "success",
                    button: "OK",
                });
            })
            .finally(() => {

            })
    }


    useEffect(() => {
        const authSubscription = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
                setLoading(false);
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })

        return authSubscription;
    }, [auth])
    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })

    }
    return {
        user,
        loading,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;