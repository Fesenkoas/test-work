import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postItemsFetch } from "../redux/action/tableFetch";

export const AddItem = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [distance, setDistance] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (title && quantity && distance) {
      const d = new Date();
      const body = {
        data: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`,
        title,
        quantity,
        distance,
      };
      dispatch(postItemsFetch(body));
      setTitle("");
      setQuantity("");
      setDistance("");
      setMessage("");
    } else {
      setMessage("ENTER ALL FIELDS");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };
  return (
    <>
      <h1 className="text-center font-bold p-2">ADD ITEM</h1>

      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-row m-auto">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            className="border-black border-solid border-2 m-4 p-1 rounded-lg"
            type="text"
            placeholder="add title"
          />

          <input
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            value={quantity}
            className="border-black border-solid border-2 m-4 p-1 rounded-lg"
            type="number"
            min="1"
            placeholder="add quantity"
          />

          <input
            onChange={(e) => {
              setDistance(e.target.value);
            }}
            value={distance}
            className="border-black border-solid border-2 m-4 p-1 rounded-lg"
            type="number"
            min="1"
            placeholder="add distance"
          />

          <button
            onClick={handleClick}
            className="bg-gray-400 border-black border-solid border-2 w-24 m-4 p-1 rounded-lg hover:bg-sky-200"
          >
            ADD
          </button>
        </label>
      </form>
      <div className="text-center text-red-600 font-bold">{message}</div>
    </>
  );
};
