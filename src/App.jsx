import { useState, useEffect } from "react";
import "./App.css";
import contactArr from "./contact.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactArr;
  });

  const addUser = (newUser) => {
    setContacts([...contacts, newUser]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const [filter, setFilter] = useState("");
  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm onSubmit={addUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList values={visibleTasks} onDelete={deleteContact} />
    </>
  );
}

export default App;
