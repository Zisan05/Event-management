import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import {useEffect,useState } from "react";
const CardsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    const [cardData,setCardData] = useState({}) 
    
         
useEffect( () =>{
  const findData  = data.find(data => data.id ===id )
  setCardData(findData);
},[data,id])

    return (
        <div>
            <CardDetail cardData = {cardData}></CardDetail>
        </div>
    );
};

export default CardsDetails;