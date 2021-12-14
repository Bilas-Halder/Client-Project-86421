import initializeAuthentication from "../Firebase/Firebase.initial";
import { GoogleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword , onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const UseFirebase=()=>
{
    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const [isLoading, setIsLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn=()=>
         {
            //saveUser(user.email , 'PUT');
            setIsLoading(true);
            signInWithPopup(auth,provider)
                .then((result) => {
                    const user = result.user;
                    //saveUser(user.email , 'PUT');
                    setError('');
                    //const destination = location?.state?.from || '/';
                   // history.replace(destination);
                }).catch((error) => {
                    setError(error.message);
                 })
        }
        //for email pass
        const signInEmail=(email,pass)=>
        {
            setIsLoading(true);
            //saveUser(email, 'POST');
            if(pass.length<6){
                setError('password Should be 6 character long')
                return ;
            }
          
            createUserWithEmailAndPassword(auth, email, pass)
            .then((result)=>
            {
              
                //console.log(result.user)
                setUser(result.user);
               // history.replace('/');
                
            })
            .catch((error) => {
               
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
              });
             


        }
        const loginUser = (email, pass) => {
            setIsLoading(true);
           
            signInWithEmailAndPassword(auth, email, pass)
                .then((result) => {
                    const user = result.user;
                    //const destination = location?.state?.from || '/';
                   // history.replace(destination);
                    setError('');
                    
                    
                })
                .catch((error) => {
                  
                    const errorMessage = error.message;
                    setError(errorMessage);
                  });
                
                
        }
         //logout
         const logOut=()=>
         {
             setIsLoading(true);
             signOut(auth)
             .then(() => {
                 setUser({});
               })
               .catch((error) => {
                 setError(error.message)
               });
     
         }
         //state change
       useEffect(()=>
       {
         onAuthStateChanged(auth, (user) => {
             if (user) {
             
                 setUser(user);
             } 
             setIsLoading(false);
 
           });
 
       },[])


    return{
        logOut,
        googleSignIn,
        signInEmail,
        user,
        error,
        loginUser,
        
        isLoading
    }

}
export default UseFirebase;