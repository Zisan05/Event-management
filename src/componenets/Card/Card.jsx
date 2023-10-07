import { Link } from "react-router-dom";


const Card = ({data}) => {

    const {name, image, description, price, id} = data;
    return (
        <div className="card w-full md:w-[80%] lg:w-[80%] bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title"> <span className="font-bold">Event Name:</span>{name}</h2>
    <p className="text-[20px]"> <span className="font-bold">Description: </span>{description}</p>
    <p className="text-[20px]"> <span className="font-bold">price: </span>{price}</p>
    
    <div className="card-actions justify-end">
      <button className="btn bg-orange-400 text-white font-bold"><Link to = {`/details/${id}`}>Services Details</Link></button>
    </div>
  </div>
</div>
    );
};

export default Card;