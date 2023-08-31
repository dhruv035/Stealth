// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../public/data"
export default function handler(req, res) {
    const {id} = req.query;
    console.log(req.query)
    const tx=data[id];
    console.log(tx)
    return res.status(200).json({tx})
  }
  