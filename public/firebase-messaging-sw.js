// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyDeROXU_dlqTzJ_se15wxyA4VArIkeSLxo",
    authDomain: "spi-nav.firebaseapp.com",
    projectId: "spi-nav",
    storageBucket: "spi-nav.appspot.com",
    messagingSenderId: "430193628279",
    appId: "1:430193628279:web:9304ceab0220f5ac0a6272",
    measurementId: "G-DR3YW07D31",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon

    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
