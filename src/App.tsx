import React from 'react';
import './App.css';
import { ref, child, get, set } from "firebase/database";
import { database } from "./firebase/Firebase"

function App() {

  const dbRef = ref(database);

  get(child(dbRef, `users/2`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


  set(child(dbRef, 'users/3' ), {
    id: 3,
    name: "tran"
  });

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
