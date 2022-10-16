import React from "react";

export const Table = ({item, pag}) => {
 
  return (
    
        <tbody className="hover:bg-sky-200">
          <tr className="border-black border-solid border-2">
          <td className=" border-black border-solid border-r-2">{pag}</td>
          <td className=" border-black border-solid border-r-2">{item.data}</td>
          <td className=" border-black border-solid border-r-2">{item.title}</td>
          <td className=" border-black border-solid border-r-2">{item.quantity}</td>
          <td className="">{item.distance}</td>
          </tr>
        </tbody>
  );
};
