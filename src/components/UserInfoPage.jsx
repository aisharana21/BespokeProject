import { collection,getDocs } from 'firebase/firestore';
import { useFirebase } from './Context/firebase';
import { db } from './Context/firebase';
export  function UserInfoPage() {
    
const showdb = async () => {
  const querySnapshot = await getDocs(collection(db, "UserAccountInformation"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data().email); 
  });
};
    showdb();
 
    const firebase= useFirebase();
    //   function for active link class
      const logout=async ()=>{
        try {
          await firebase.logOutUser();
        } catch (error) {
                alert(`Error: ${error.message}`);
    
        }
    console.log("logout")
      }
  return (
    <div>
      <h1>WELCOME</h1>
   <button onClick={logout}> logout</button>
    </div>
  )
}
}