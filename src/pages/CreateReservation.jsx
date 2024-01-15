import "../App.css";
import { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function CreateReservation() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "appointment"), {
        title: title,
        description: description,
        Date: date,
        completed: false,
        created: Timestamp.now(),
      });
      setTitle("");
      setDescription("");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 text-center">
      <p>A venir: gestion des disponibilités</p>
      <span className="opacity-50 text-sm">en attendant...</span>
      <form
        onSubmit={handleSubmit}
        className="flex
      flex-col gap-5"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Client"
          className="shadow-md text-xl text-center bg-gray-300"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Coiffure"
          className="shadow-md text-xl text-center bg-gray-300"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="shadow-md text-xl text-center bg-gray-300"
        />
        <button className="bg-blue-300 p-3 rounded tracking-wide">
          Ajouter
        </button>
      </form>
    </div>
  );
}
