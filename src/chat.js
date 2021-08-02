  import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import './chat.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyABc-D1in5kNhxYa5iAh3aH-vzG9NvapiA",
  authDomain: "chatty-11139.firebaseapp.com",
  databaseURL: "https://chatty-11139-default-rtdb.firebaseio.com",
  projectId: "chatty-11139",
  storageBucket: "chatty-11139.appspot.com",
  messagingSenderId: "1055958398852",
  appId: "1:1055958398852:web:f7d16a186cbc9c59b90fd1"
  })


  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const analytics = firebase.analytics();

  const Chat = () =>{

    const [user] = useAuthState(auth); // TO check if user is signed in or not

    return (
       
        <div className="App-main">
          <header>
            <h2>Chat Room</h2>
            <SignOut />
          </header>
            
          <section>
            {user ? <ChatRoom /> : <SignIn />} 
          </section>
    
        </div>
       
      );
    }
    function SignIn() {

        const signInWithGoogle = () => {
          const provider = new firebase.auth.GoogleAuthProvider();
          auth.signInWithPopup(provider);
        }
      
        return (
          <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
          </>
        )
      
      }
      
      function SignOut() {
        return auth.currentUser && (
          <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        )
      }
      
      
      function ChatRoom() {
        const dummy = useRef();
        const messagesRef = firestore.collection('messages');
        const query = messagesRef.orderBy('createdAt').limit(25);
      
        const [messages] = useCollectionData(query, { idField: 'id' });
      
        const [formValue, setFormValue] = useState('');
      
      
        const sendMessage = async (e) => {
          e.preventDefault();
      
          const { uid, photoURL } = auth.currentUser;
      
          await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
          })
      
          setFormValue('');
          dummy.current.scrollIntoView({ behavior: 'smooth' });
        }
      
        return (<>
          <main className = "mainz">
      
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      
            <span ref={dummy}></span>
      
          </main>
      
          <form className = "formz" onSubmit={sendMessage}>
      
            <input className="form-input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      
            <button className = "form-button" type="submit" disabled={!formValue}>send</button>
            
          </form>
        </>)
      }
      
      
      function ChatMessage(props) {
        const { text, uid, photoURL } = props.message;
      
        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
      
        return (<>
          <div className={`message ${messageClass}`}>
            <img src={photoURL} className = "dp-img" />
            <p className = "p">{text}</p>
          </div>
        </>)
      }
      
      

  

  export default Chat