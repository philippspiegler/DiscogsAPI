import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config";
import Header from "../components/Header";
import { Form, Button } from "react-bootstrap/";

const Chat = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [textMessages, setTextMessages] = useState(null);
  console.log("message :>> ", message);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  // console.log("text date", textMessages[0].date.seconds);
  // const myDate = new Date(textMessages[0].date.seconds).toLocaleString();
  // const transformDate = (date) => {
  //   const myDate = new Date(date).toDateString();
  // };
  // console.log("myDate<<<<", myDate);
  const sendMessage = async () => {
    //message object to save in db
    const messageObj = {
      text: message,
      user: user.email,
    };
    console.log("messageObj :>> ", messageObj);
    //creating new firestore collection and document
    try {
      const docRef = await addDoc(collection(db, "chat"), messageObj);
      console.log("Document written with ID: ", docRef.id);
      //   readMessages()
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  // readMessages reads the ones that are already in db
  const readMessages = async () => {
    const q = query(collection(db, "chat"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      //reading messages that are already sent
      const messages = [];
      querySnapshot.forEach((doc) => {
        console.log("doc.data() :>> ", doc.data());
        messages.push(doc.data());
      });
      console.log("message", messages);
      //store messages in state
      setTextMessages(messages);
    });
    // const querySnapshot = await getDocs(collection(db, "chat"))
    // const messages = []
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id)
    //     console.log(doc.data())
    //     //push messages into the above array
    //     messages.push(doc.data())
    //     })
  };
  useEffect(() => {
    readMessages();
  }, []);

  return (
    <>
      <Header />
      <div>
        <Form className="d-flex mt-3">
          <Form.Control
            style={{ width: "50vw", marginLeft: "25vw" }}
            type="search"
            placeholder="your message"
            className="me-2"
            aria-label="Search"
            onChange={handleMessageChange}
          />
          <Button variant="success" onClick={sendMessage}>
            Send
          </Button>
        </Form>
      </div>
      <div className="chat-message">
        {/* display text */}
        {textMessages &&
          textMessages.map((text) => (
            <div
              className="chat-message__inner"
              style={{
                backgroundColor: "#fff2bb",
                margin: "1em 0",
                padding: "2em",
                border: "2px solid #a070a7",
              }}
            >
              <p>{text.user} said:</p>
              <p>
                <b>{text.text}</b>
              </p>
              {/* <p>on {text.date.toString()}</p>
              <p>on {new Date(text.date.seconds).toLocaleString("de-DE")}</p> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default Chat;
