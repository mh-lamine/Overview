import "../App.css";
import { useState } from "react";

export default function CreateReservation() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 text-center">
      <p>A venir: gestion des disponibilités</p>
      <span className="opacity-50 text-sm">en attendant...</span>
      <form
        className="flex
      flex-col gap-5"
      >
        <input
          type="text"
          placeholder="Client"
          className="shadow-md text-xl text-center bg-gray-300"
        />
        <input
          type="text"
          placeholder="Coiffure"
          className="shadow-md text-xl text-center bg-gray-300"
        />
        <input
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
