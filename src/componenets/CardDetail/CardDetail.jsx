

const CardDetail = ({cardData}) => {
const {image,name,price,description} = cardData;
     
    return (
        <div>
            <img className="w-full h-[500px]" src={image} alt="" />
            <h1 className="text-[30px] text-blue-300"><span className="font-bold text-orange-400">Event Name: </span>{name}</h1>
            <h1 className="text-[30px] text-blue-300"><span className="font-bold text-orange-400">Price: </span>{price}</h1>
            <h1 className="text-[30px] text-blue-300"><span className="font-bold text-orange-400">Description: </span>{description}</h1>
        </div>
    );
};

export default CardDetail;