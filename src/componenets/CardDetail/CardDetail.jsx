

const CardDetail = ({cardData}) => {
const {image} = cardData;
     
    return (
        <div>
            <img className="w-full h-[500px]" src={image} alt="" />
        </div>
    );
};

export default CardDetail;