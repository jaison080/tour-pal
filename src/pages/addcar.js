import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import style from "../styles/addcar.module.css";
import { db } from "../utils/firebase";
function addcar() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [fuel, setFuel] = useState("");
  const [seats, setSeats] = useState("");
  const [gear, setGear] = useState("");
  async function addcar() {
    try {
      const docRef = await addDoc(collection(db, "peercars"), {
        name: name,
        price: price,
        image: image,
        fuel: fuel,
        seats: seats,
        gear: gear,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className={style.maincontainer}>
      <div className={style.container}>
        <input
          type="text"
          placeholder="Enter the car name"
          className={style.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the car image url"
          className={style.input}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the  fuel type"
          className={style.input}
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the gear transition"
          className={style.input}
          value={gear}
          onChange={(e) => setGear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the no of seats "
          className={style.input}
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the price per hours "
          className={style.input}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="sub_btn"

          onClick={() => {
            addcar();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default addcar;
