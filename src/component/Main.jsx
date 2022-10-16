import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "./Table";
import { getItemsFetch } from "./../redux/action/tableFetch";

export const Main = () => {
  const dispatch = useDispatch();
  const { table } = useSelector((state) => state.table);

  useEffect(() => {
    dispatch(getItemsFetch());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center font-bold p-2">TABLE</h1>

      <div className="flex text-center p-5">
        <table className="m-auto">
          <thead className="border-black border-solid border-2">
            <tr>
              <td className="h-4 w-10 border-black border-solid border-r-2">
                N
              </td>
              <td className="h-4 w-36 border-black border-solid border-r-2">
                Data
              </td>
              <td className="h-4 w-36 border-black border-solid border-r-2">
                Title
              </td>
              <td className="h-4 w-36 border-black border-solid border-r-2">
                Quantity
              </td>
              <td className="h-4 w-36">Distance</td>
            </tr>
          </thead>

          {table.map((item, key) => (
            <Table item={item} pag={key + 1} key={key} />
          ))}
          
        </table>
      </div>
    </>
  );
};
