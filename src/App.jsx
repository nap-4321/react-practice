import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greet from "./Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Form />
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <NameList></NameList> */}
      {/* dummy message extra words added new*/}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Greet name="John" heroName="Superman"></Greet>
     <Greet name="Clark"></Greet>
      <Welcome name="Diana" heroName="Wonder Gal"></Welcome>  */}

      {/* <Message></Message> */}

      {/* <Counter></Counter> */}
    </>
  );
}

export default App;
