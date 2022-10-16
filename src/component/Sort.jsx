import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsFetch } from "../redux/action/tableFetch";
import { getTable } from "../redux/slice/tableSlice";

export const Sort = () => {
  const { table } = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [where, setWhere] = useState("");
  const [how, setHow] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(true);

  const handleBack = () => {
    dispatch(getItemsFetch());
    setCheck(true);
  };

  const handleSort = () => {
    let obj;
    if (search && how && where) {
      switch (how) {
        case "equals":
          obj = table.filter((item) => 
          String(item[`${where}`]) === search
          );
          break;
        case "contains":
          obj = table.filter((item) =>
            String(item[`${where}`]).includes(search)
          );
          break;
        case "more":
          obj = table.filter((item) => item[`${where}`] > search);
          break;
        case "less":
          obj = table.filter((item) => item[`${where}`] < search);
          break;
        default:
          setMessage("NO MATCH");
          setTimeout(() => {
            setMessage("");
          }, 2000);
      }
      setCheck(false);
      obj && dispatch(getTable(obj));
      setSearch("");
      setHow("");
      setWhere("");
    } else {
      setMessage("ENTER ALL FIELDS");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <>
      <h1 className="text-center font-bold p-2">SORT</h1>
      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-row m-auto">
          <div className="flex flex-col text-center">
            <span>Where</span>
            <select
              className="border-black border-solid border-2 w-36 h-10 mb-4 rounded-lg"
              onChange={(e) => setWhere(e.target.value)}
              value={where}
            >
              <option></option>
              <option value="title">Title</option>
              <option value="quantity">Quantity</option>
              <option value="distance">Distance</option>
            </select>
          </div>
          <div className="flex flex-col text-center">
            <span>How</span>
            <select
              className="border-black border-solid border-2 w-36 h-10 mb-4 ml-4 rounded-lg"
              onChange={(e) => setHow(e.target.value)}
              value={how}
            >
              <option></option>
              <option value="equals">Equals</option>
              <option value="contains">Contains</option>
              <option value="more">More</option>
              <option value="less">Less</option>
            </select>
          </div>
          <div className="flex flex-col text-center">
            <span>What</span>
            <input
              className="border-black border-solid border-2 h-10 mb-4 ml-4 p-1 rounded-lg"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="What"
            />
          </div>
          {check ? (
            <button
              onClick={handleSort}
              className="bg-gray-400 border-black border-solid border-2 h-10 w-24 mt-6  ml-4 rounded-lg hover:bg-sky-200"
            >
              SORT
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="bg-gray-400 border-black border-solid border-2 h-10 w-24 mt-6  ml-4 rounded-lg hover:bg-sky-200"
            >
              BACK
            </button>
          )}
        </label>
      </form>
      <div className="text-center text-red-600 font-bold">{message}</div>
    </>
  );
};
