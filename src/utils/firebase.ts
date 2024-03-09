"use client";

import { useState, useEffect } from "react";
import {
  fetchAndActivate,
  getRemoteConfig,
  getString,
} from "firebase/remote-config";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STOREAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBHFQo5eNj7jcWHx7TAkgazwG__ump8Mis",
  authDomain: "firetest-7ba2e.firebaseapp.com",
  projectId: "firetest-7ba2e",
  storageBucket: "firetest-7ba2e.appspot.com",
  messagingSenderId: "269739003686",
  appId: "1:269739003686:web:4f377f29c7d4b893023be7",
};

const useRemoteConfig = (key: string) => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const app = initializeApp(firebaseConfig);
      const remoteConfig = getRemoteConfig(app);
      const isFetched: any = fetchAndActivate(remoteConfig);

      if (isFetched) {
        const searchMessage = getString(remoteConfig, key);
        setMessage(searchMessage);
      } else {
        console.error("Failed to fetch remote config");
      }
    }
  }, [key]);

  return message;
};

export default useRemoteConfig;
