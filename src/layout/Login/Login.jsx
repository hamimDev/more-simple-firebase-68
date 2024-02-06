import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebaseConfig";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const googleUser = result.user;
            setUser(googleUser);
            console.log(googleUser);
        });
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const githubUser =result.user;
            setUser(githubUser);
            console.log(githubUser);
        })
    }

  return (
    <div>
        <div className="flex justify-center items-center gap-5">
      <div className="flex justify-center items-center mt-10">
        <button onClick={handleGoogleSignIn} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-2 rounded-full border-gray-400 ">
          <div className="flex items-center">
            <img
              src="https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
              alt=""
              className="w-10 mr-2 rounded-full"
            />
          </div>
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button onClick={handleGithubSignIn} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-2 rounded-full border-gray-400 ">
          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.freepik.com/256/733/733609.png?uid=R137030164&ga=GA1.1.1648996865.1707243642&semt=ais"
              alt=""
              className="w-10 mr-2 rounded-full"
            />
          </div>
        </button>
      </div>
    </div>
    {
        user && 
        <div>
            <h4>User Name: {user.displayName}</h4>

            <h4>User Email: {user.email}</h4>
            <img src={user.photoURL} alt="" />
        </div>
    }
    </div>
  );
};

export default Login;
