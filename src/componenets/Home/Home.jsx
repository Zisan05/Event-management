import {useLoaderData}  from 'react-router-dom'
import Card from '../Card/Card';
const Home = () => {

     const data = useLoaderData();
     console.log(data);
    return (
        <div>
            <div className="hero h-[900px] md:h-[800px] lg:h-[800px] bg-blue-300">
  <div className="hero-content flex-col lg:gap-[80px] lg:flex-row-reverse">
    <img src="https://i.ibb.co/2dZn61D/istockphoto-1181658785-612x612.jpg" className="w-[600px] h-[500px]" />
    <div>
      <h1 className=" text-[25px] md:text-[35px] lg:text-5xl font-bold lg:mb-[40px] text-white">Visit Our <span className="text-orange-400">Social Event Management </span> website!</h1>
      <p className="py-6 text-white">In planning a social event, it’s about much more than knowing what decor theme the bride or “person of honor” desires. Our job is to pay attention in ways that are non-verbal; so much can be communicated through eye contact.</p>
      <button className="btn  bg-orange-400 font-bold">Lets visit</button>
    </div>
  </div>
</div>


    <h1 className="text-[35px] text-center font-extrabold text-blue-300 mt-[30px]">Let us manage your event... </h1>
 <h1 className="text-[35px] text-center font-extrabold text-orange-400">And its our responsibility to make your event that <br /> <span className="text-gray-800">much memorable that you never forget...</span> </h1>

 <h1 className="text-[40px] text-center mt-[100px] mb-[40px] font-bold text-blue-300 underline">Our Services</h1>

 <div className='grid md:grid-cols-1 lg:grid-cols-3 ml-[10px]  md:ml-[150px] lg:ml-[100px] gap-[20px]'>
    {
        data.map(data => <Card key = {data.id} data = {data}></Card>)
    }
 </div>
 
        </div>
    );
};

export default Home;