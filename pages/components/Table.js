import React from "react";
import Link from "next/link";
import { FaEllipsisV } from "react-icons/fa";
const Table = (props) => {
  const headings = [
    "Index",
    "Transaction Date",
    "Invoice No.",
    "Payer",
    "Payee",
    "Amount",
    "USD Equivalent",
    "Status",
    "Action",
  ];
  return (
    <table className="mt-5 text-[16px] border-x-2 px-2">
      <thead className="bg-zinc-100 h-[70px]">
        <tr className="border-y-2 mx-2" key={0}>
          {headings.map((element, index) => {
            return <th key={index+"Head"} className="mx-4"><div className="ml-3">{element}</div></th>;
          })}
        </tr>
      </thead>
      <tbody>
        {Object.values(props.data).map((elementIn) => {
          const arr = Object.values(elementIn);
          
          return (
            <tr key={elementIn.tx} className="border-y-2">
              {arr.map((element, key) => {
                if (key === 2)
                  return (
                    <td>
                      <Link
                        className="ml-3 text-blue-600 underline"
                        href={`/${elementIn.tx}`}
                      >
                        {element}
                      </Link>
                    </td>
                  );
                else if (key === 7)
                  {
                    return (
                    <td key={key}>
                      <div className="flex flex-row justify-between mt-4 ml-3 text-[14px]">
                        <div className="flex flex-col w-[50px]">
                          <div className="h-[5px] bg-blue-900 w-[50px]"></div>
                          <div>First</div>
                        </div>
                        <div className="flex flex-col">
                        <div className={`h-[5px] bg-${element>1?"blue-900":"zinc-600"} w-[50px]`}></div>
                          {element>1&&(<div>Second</div>)}
                        </div>
                        <div className="flex flex-col">
                        <div className={`h-[5px] bg-${element>2?"blue-900":"zinc-600"} w-[50px]`}></div>
                          {element>2&&(<div>Third</div>)}
                        </div>
                      </div>
                    </td>
                  );}
                else return <td><div className="ml-3">{element}</div></td>;
              })}
              <td className="text-center">
                <button>
                  <FaEllipsisV />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
