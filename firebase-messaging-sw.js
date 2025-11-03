// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBbR8R_3_Xf6QQPaZf9WDRLovSycAI1bKQ",
  authDomain: "emmy-programmers.firebaseapp.com",
  projectId: "emmy-programmers",
  storageBucket: "emmy-programmers.firebasestorage.app",
  messagingSenderId: "351752440867",
  appId: "1:351752440867:web:1f65d8c922d3d48e063596"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icon-192.png",
    data: payload.data || {},
    badge: "/icon-192.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
