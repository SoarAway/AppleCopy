/**
 * Firebase Configuration Template
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to 'firebase.js' in the same directory
 * 2. Replace the placeholder values with your Firebase config
 * 3. Get your config from Firebase Console > Project Settings
 */

export const FIREBASE_CONFIG = {
    apiKey: 'your-firebase-api-key',
    authDomain: 'your-project-id.firebaseapp.com',
    projectId: 'your-project-id',
    storageBucket: 'your-project-id.appspot.com',
    messagingSenderId: 'your-messaging-sender-id',
    appId: 'your-app-id',
};

/**
 * Validate Firebase configuration
 */
export const validateFirebaseConfig = () => {
    const hasPlaceholders = Object.values(FIREBASE_CONFIG).some(
        value => value.includes('your-')
    );

    if (hasPlaceholders) {
        console.warn('⚠️ Firebase not configured. Copy firebase.template.js to firebase.js and add your config.');
        return false;
    }

    return true;
};
