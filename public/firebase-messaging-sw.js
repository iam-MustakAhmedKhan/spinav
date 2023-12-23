import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: "AIzaSyDeROXU_dlqTzJ_se15wxyA4VArIkeSLxo",
    authDomain: "spi-nav.firebaseapp.com",
    projectId: "spi-nav",
    storageBucket: "spi-nav.appspot.com",
    messagingSenderId: "430193628279",
    appId: "1:430193628279:web:9304ceab0220f5ac0a6272",
    measurementId: "G-DR3YW07D31",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
    console.log("hello", payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
