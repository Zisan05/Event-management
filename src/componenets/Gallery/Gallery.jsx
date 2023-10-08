import { useLoaderData } from "react-router-dom";
import GalleryDesign from "./GalleryDesign/GalleryDesign";
import { useState } from "react";


const Gallery = () => {

    const [datalength,setDatalength] = useState(4) 
  const item = useLoaderData();
  console.log(item) 

    return (
        <div>
        <h1 className="text-blue-400 text-[42px] font-semibold text-center underline">Our Memories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]  lg:ml-[100px]">
            {
                item.slice(0,datalength).map(item =><GalleryDesign key={item.id} item={item} ></GalleryDesign> )
            }
             </div>

             <div className={datalength === item.length && 'hidden'}>
                <button onClick={() => setDatalength(item.length)} className="text-[25px] bg-orange-400 py-[5px] px-[10px] rounded-[5px] ml-[100px]  md:ml-[330PX] lg:ml-[800px] mb-[80px] text-white">See all</button>
             </div>
            
        
      </div>
    );
};

export default Gallery;