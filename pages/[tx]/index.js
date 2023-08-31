import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { txState } from "../../state/atoms";
import { styled } from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import {AiOutlineRollback} from "react-icons/ai"
import { Formik, Form } from "formik";

const Heading = styled.div`
  justify-content: flex-start;
  width: 200px;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  color: pink;
  font-size: 30px;
`;
const StyledText = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  font-size: 30px;
`;
const StyledText2 = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 25px;
`;
const StyledInput = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom: 2px solid #000;
  border-radius: 5px;
  font-size: 20px;
  width: 300px;
`;
export default function Transaction() {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  const [txData,setTxData]= useRecoilState(txState)
  const router = useRouter();
  console.log("data", data);

  useEffect(() => {
    const preload = async () => {
     setTimeout(()=>{
      const id = router.query.tx?router.query.tx:null;
      if(id)
      setData(txData[id])
     },1000)
    };

    preload();
  },[router.query.tx,txData]);

  const handleSubmit=(values)=>{

    let x = {...txData};
    let usd=txData[values.tx].usd;
    x[values.tx]=values;
    x[values.tx].usd=usd;
    console.log("HAHA",values,x);
    setTxData(x);

  }
  return (
    <div className="flex flex-col px-6 py-10 text-4xl text-center bg-white text-black h-[100vh] w-full items-center">
      Transaction Details
      {data && (
        <div className="flex flex-col text-left mt-20 mx-20 w-2/4 ">
          <div className="flex flex-row-reverse">
            <button className="mx-2"
              onClick={() => {
                setEdit(!edit);
              }}
            >
              <FaRegEdit />
            </button>
            <button
              onClick={() => {
                router.push('/')
              }}
            >
              <AiOutlineRollback />
            </button>
          </div>
          {edit && (
            <div>
              <Heading>
                <b>TxId</b>
              </Heading>
              <StyledText2>{data.tx}</StyledText2>
              {
                <Formik
                  initialValues={{
                    tx:data.tx,
                    date: data.date,
                    invoice: data.invoice,
                    payer: data.payer,
                    payee: data.payee,
                    amount: data.amount,
                    status: data.status,
                  }}
                  onSubmit={(values) => {handleSubmit(values)}}
                >
                  {({ values, setFieldValue, touched, errors }) => {
                    return (
                      <Form>
                        <Heading>Date</Heading>
                        <StyledInput
                          defaultValue={values.date}
                          type="text"
                          onChange={(event) => {
                            setFieldValue("date", event.target.value);
                          }}
                        />
                        <Heading>Invoice</Heading>
                        <StyledInput
                          defaultValue={values.invoice}
                          type="text"
                          onChange={(event) => {
                            setFieldValue("invoice", event.target.value);
                          }}
                        />
                        <Heading>Payer</Heading>
                        <StyledInput
                          defaultValue={values.payer}
                          type="text"
                          onChange={(event) => {
                            setFieldValue("payer", event.target.value);
                          }}
                        />
                        <Heading>Payee</Heading>
                        <StyledInput
                          defaultValue={values.payee}
                          type="text"
                          onChange={(event) => {
                            setFieldValue("payee", event.target.value);
                          }}
                        />
                        <Heading>Amount</Heading>
                        <StyledInput
                          defaultValue={values.amount}
                          type="text"
                          onChange={(event) => {
                            setFieldValue("amount", event.target.value);
                          }}
                        />
                        <Heading>Status</Heading>
                        <StyledInput
                          defaultValue={values.status}
                          type="number"
                          onChange={(event) => {
                            setFieldValue("status", event.target.value);
                          }}
                        />
                        <br/><br/>
                        <button type="submit" className="border-3 bg-blue-600 px-3 rounded-[5px]">Save</button>
                      </Form>
                    );
                  }}
                </Formik>
              }
            </div>
          )}
          {!edit && (
            <div className="flex flex-col">
              <div className="flex flex-row">
                <Heading>
                  <b>TxId</b>
                </Heading>
                <StyledText>{data.tx}</StyledText>
              </div>
              <div className="flex flex-row">
                <Heading>
                  <b>Date</b>
                </Heading>
                <StyledText>{data.date}</StyledText>
              </div>
              <div className="flex flex-row">
                <Heading>
                  <b>Invoice No.</b>
                </Heading>
                <StyledText>{data.invoice}</StyledText>
              </div>
              <div className="flex flex-row">
                <Heading>
                  <b>Payer </b>
                </Heading>
                <StyledText>{data.payer}</StyledText>
              </div>
              <div className="flex flex-row">
                <Heading>
                  <b>Payee </b>
                </Heading>
                <StyledText>{data.payee}</StyledText>
              </div>
              <div className="flex flex-row">
                <Heading>
                  <b>Amount </b>
                </Heading>
                <StyledText>{data.amount}</StyledText>
              </div>
              <div className="flex flex-row">
                <Heading>
                  <b>USD </b>
                </Heading>
                <StyledText>{data.usd}</StyledText>
              </div>
              <div className="flex flex-row">
                <Heading>
                  <b>Status </b>
                </Heading>
                <StyledText>{data.status}</StyledText>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
