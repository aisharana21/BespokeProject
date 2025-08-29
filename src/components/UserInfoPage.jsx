import { useState, useEffect } from "react";
import { useFirebase } from "./Context/firebase";
import "./CSS/user-info-page.css";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./Context/firebase";
import { getDoc, doc } from "firebase/firestore";

export function UserInfoPage() {
  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();
  const firebase = useFirebase();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {

        const docRef = doc(db, "UserAccountInformation", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
          
        } 
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await firebase.logOutUser();
      navigate("/signin");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="user-account-information-container">
      <h2>WELCOME {userDetail.username}</h2>
      <div className="user-account-information">
        <div className="user">
          <h4>Your Account Information</h4>
          {userDetail ? (
            <>
              <p>Username: {userDetail.username}</p>
              <p>Email: {userDetail.email}</p>
            </>
          ) : (
            <p>Loading user details...</p>
          )}
          <button
            className="logout-button account-button"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
