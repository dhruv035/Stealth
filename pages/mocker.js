import { txState } from "./state/atoms";
import { useRecoilState } from "recoil";
export async function getData(){

    const [txData]=useRecoilState(txState)
    const timer = setTimeout(() => {
        return txData;
      }, 1000);
}

export async function getTx(id){

    const [txData]=useRecoilState(txState)
    const response = data.id;
    const timer = setTimeout(() => {
        return response;
      }, 1000);
}

export async function updateTx(data){
    const[txData,setTxData]=useRecoilState(txState);

    let x=txData;
    x[txData.tx]=data;
    const timer = setTimeout(() => {
        setTxData(x)
      }, 3000);
}