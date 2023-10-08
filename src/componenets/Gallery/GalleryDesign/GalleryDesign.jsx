

const GalleryDesign = ({item}) => {

    const {image} = item;
    return (
        <div>
            <img className="w-[400px] h-[400px] " src={image} alt="" />
        </div>
    );
};

export default GalleryDesign;