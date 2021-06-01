import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firerebase.config';
 import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import google from '../../New folder/images/Group 573.png'
import Navbar from '../Navbar/Navbar';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
     const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
          //  setUserToken();
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    // const setUserToken=()=>{
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //         sessionStorage.setItem('token',idToken)
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // }
    return (
        <div>
           <Navbar></Navbar>
            <button onClick={handleGoogleSignIn} style={{margin:"10% 40%", borderRadius:"10px"}}><img src={google} alt="" style={{width:"30px",height:"30px"}}/> <span style={{fontSize:"20px"}} > Sign in with Google</span></button>
        </div>
    );
};

export default Login;