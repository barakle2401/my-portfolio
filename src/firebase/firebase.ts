import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4_P9D13V3rKwm9KFLGVHFjWD4wXkfeVQ',
  authDomain: 'dogs-f6ab2.firebaseapp.com',
  projectId: 'dogs-f6ab2',
  storageBucket: 'dogs-f6ab2.appspot.com',
  messagingSenderId: '169864033183',
  appId: '1:169864033183:web:242905bf2dfe414c3543aa',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
