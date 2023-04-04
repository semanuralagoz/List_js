import { useState, useEffect } from "react";
import "./style.css";
import List from "./List/index.js";
import Form from "./Form/index.js";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "mehmet",
      phone_number: "12344",
    },
    {
      fullname: "sema",
      phone_number: "1456",
    },
    {
      fullname: "nazlı",
      phone_number: "7654",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
