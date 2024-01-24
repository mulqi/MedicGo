import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlBX0rKiwkwBoFV10M8pB8j7POiXOhWXQ',
  authDomain: 'apotek-app-88dcc.firebaseapp.com',
  projectId: 'apotek-app-88dcc',
  storageBucket: 'apotek-app-88dcc.appspot.com',
  messagingSenderId: '379724095736',
  appId: '1:379724095736:web:078602bdbe93fc9f27db0d',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
