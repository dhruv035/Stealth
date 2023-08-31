import { atom } from "recoil";
import data from "../../public/data"


const txState = atom({
    key: "txState",
    default:{
        ...data,
    },
  });
  export default txState
