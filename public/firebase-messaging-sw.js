importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCclerxjHeXJZiL0htxODGhl7ObrPB2DhQ",
    authDomain: "cityservicesbd.firebaseapp.com",
    databaseURL: "https://cityservicesbd-default-rtdb.firebaseio.com",
    projectId: "cityservicesbd",
    storageBucket: "cityservicesbd.appspot.com",
    messagingSenderId: "952248107518",
    appId: "1:952248107518:web:bdf66a2b8bd09d394b40af",
    measurementId: "G-QVTQ66EWYG",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
