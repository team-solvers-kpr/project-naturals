import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import initializeFirebase from "../Firebase/firebase.init";



export const auth = getAuth(initializeFirebase())

const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const auth = getAuth();

    // Google Sign Up
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

    // Register User With Email
    const registerUser = (name, email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);

                //SEND NAME & IMG TO FIREBASE AFTER CREATION
                updateProfile(auth.currentUser, {
                    displayName: name,

                }).then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            swal({
                                title: "Account Created",
                                text: "Please check your email spam folder for verification link!",
                                icon: "success",
                                button: "OK",
                            });

                        });
                    setLoading(false)
                }).catch((error) => {
                    toast.error(error.message, {
                        icon: "😔"
                    });
                });

            })
            .catch((error) => {
                toast.error(error.message, {
                    icon: "😔"
                });
            })
            .finally(() => setLoading(false))
    }

    // Login User By Email
    const loginUser = (email, password) => {
        setLoading(true)
        signOut(auth)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                if (userCredential.user.emailVerified) {
                    swal({
                        title: "Well Done",
                        text: "Successfully logged in by Email!",
                        icon: "success",
                        button: "OK",
                    });

                }
                else {
                    toast.error("Yor email is not verified! please check your spam folder for verify this email", {
                        icon: "😔"
                    })
                }
            })
            .catch((error) => {
                toast.error(error.message, {
                    icon: "😔"
                });
            })
            .finally(() => setLoading(false))
    }

    // Observer
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
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;