import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import { useRecoilState } from "recoil";
import { txState } from "../state/atoms";
import data from "../public/data"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [data, setData] = useState({})
  const [txData,setTxData] = useRecoilState(txState)
  console.log("TXSTATE",txData,data)
  const [amount,setAmount] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setData(txData)
    },3000)
  },[txData])
  useEffect(()=>{
    let total = 0;
    Object.values(data).forEach((element)=>{
      console.log("total",total)
      total=total+element.usd;
    })
    setAmount(total)
  },[data])

  return (
    <div className="flex flex-col px-6 py-3 text-4xl text-center bg-white text-black h-[100vh] w-full items-center">
      Stats
      <div className="flex flex-col text-left mt-20 mx-20 ">
        <div className="flex flex-row justify-between ">
          <Card>
            <div className="flex flex-row text-[10px]">
            Number of Transactions
            </div>
            <div className="text-sky-600">
              {
                Object.values(data).length
              }
            </div>
          </Card>
          <Card>
            <div className="flex flex-row text-[10px]">
            Amount in USD
            </div>
            <div className="text-sky-600">
              {
                amount
              }
            </div>
          </Card>
          <Card>
            <div className="flex flex-row text-[10px]">
            Number of Transactions
            </div>
            <div className="text-sky-600">
              {
                Object.values(data).filter(element=>element.status===3).length
              }
            </div>
          </Card>
        </div>
        <Table data={data}/>

      </div>
    </div>
  );
}
