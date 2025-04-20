// ADMIN SDK (firebase website)
import {getFirestore} from 'firebase-admin/firestore'
import {getAuth} from 'firebase-admin/auth'
import {initializeApp,cert, getApps} from 'firebase-admin/app'
const initFirebaseAdmin =()=>{
    const apps = getApps();
    // this ensures that only one admin is there 
    if(!apps.length){
       initializeApp({
        credential:cert({
            projectId:process.env.FIREBASE_PROJECT_ID,
            clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
            privateKey : process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n")
    
        })
       })
    }
    return {
        auth:getAuth(),
        db: getFirestore(),

    }
}
export const{auth,db} =initFirebaseAdmin();