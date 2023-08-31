import { atom } from "recoil";
import data from "../../public/data"


export const txState = atom({
    key: "txState",
    default:{
        ...data,
    },
  });
