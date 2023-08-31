// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../public/data"
export default function handler(request, response) {
    
    if (request.method === 'OPTIONS') {
        return response.status(200).json(({ body: "OK" }))
      }
    else if(request.method==='GET'){
        return response.status(200).json({data});
    }
    else {
     const updates = req.body;
     data[updates.tx]=updates;
    }
    res.status(200).json({ name: 'John Doe' })
  }
  