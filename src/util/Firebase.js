const firebase = require('firebase/app').default;
require('firebase/firestore');
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


export class Firebase{

    constructor(){

        this._config = {
            apiKey: "AIzaSyAqNRq8yUzBWQnoEvNO1eaka09K_CefAQ0",
            authDomain: "whatsapp-clone-e1671.firebaseapp.com",
            projectId: "whatsapp-clone-e1671",
            storageBucket: "whatsapp-clone-e1671.appspot.com",
            messagingSenderId: "798234167577",
            appId: "1:798234167577:web:000e9027f63fec0855dd88"

        }

        this.init();

    }

    init(){

         // Initialize Firebase

         if(!window._initializedFirebase){
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots : true
            })
            window._initializedFirebase = true;

         }
          

    }
    
    static db(){

        return firebase.firestore();
    }

    static hd(){

        return firebase.storage();
    }

    initAuth(){

        return new Promise((s,f) =>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then( result =>{

                let token = result.credential.accessToken;
                let user = result.user;
                s({user,
                   token
                });

            })
            .catch(err =>{
                f(err)
            })
        })

    }


}