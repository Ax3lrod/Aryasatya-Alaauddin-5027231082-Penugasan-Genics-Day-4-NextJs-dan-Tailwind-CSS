"use client";
import Contactitem from "../Contactitem";
import Link from "next/link";
import * as React from "react";

export default function Contactlist() {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://contact-apps-api.ainunns.me/api/contacts`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2ZGMyMmU2LTE4MTktNDM4Yy04ZTMxLWYwYjFlZTgwYTZmYSIsIm5hbWUiOiJBcnN5YXR5YSBBbGFhdWRkaW4iLCJlbWFpbCI6IjUwMjcyMzEwODJAc3R1ZGVudC5pdHMuYWMuaWQiLCJpYXQiOjE3MjY4NTE1NzUsImV4cCI6MTcyOTQ0MzU3NX0.lyLQmPQsxr5CnBMADBDz2GulDq1p5z8PDKcoY7oGXSc`,
          },
        }
      );
      const data = await response.json();
      setContacts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="contact-list">
        <h2>Contact List</h2>
        {contacts.map((contact) => (
          <Link key={contact.id} href={`/contacts/${contact.id}`} passHref>
            <Contactitem
              id={contact.id}
              name={contact.name}
              email={contact.email}
              imgUrl={contact.img_url}
              onDelete={handleDelete}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
