// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import axios from "axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeROXU_dlqTzJ_se15wxyA4VArIkeSLxo",
    authDomain: "spi-nav.firebaseapp.com",
    projectId: "spi-nav",
    storageBucket: "spi-nav.appspot.com",
    messagingSenderId: "430193628279",
    appId: "1:430193628279:web:9304ceab0220f5ac0a6272",
    measurementId: "G-DR3YW07D31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const messaging = getMessaging();


export const requestForToken = () => {
    Notification.requestPermission().then(permission => {
        if (permission == "granted") {
            return getToken(messaging, {
                vapidKey:
                    "BJa6an2wkH_H6njdcn8rKymE-9I3neEGyd9_aJ19XD_Trgql7rCnS4zMU0nmTPmJJJvcdn4R6gD_f7K2d0hknV0",
            })
                .then((currentToken) => {
                    if (currentToken) {
                        console.log("current token for client: ", currentToken);

                        axios.post(
                            "https://spi-server.onrender.com/create",
                            {
                                token: currentToken,
                            }
                        );
                    } else {
                        // Show permission request UI
                        console.log(
                            "No registration token available. Request permission to generate one."
                        );
                    }
                })
                .catch((err) => {
                    console.log(
                        "An error occurred while retrieving token. ",
                        err
                    );
                });
        } else {
            console.log("User Permission Denied.");
        }
    })
};


export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {

            resolve(payload);
        });
    });

console.log(analytics)