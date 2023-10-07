

const Review = () => {
    return (
        <div className="hero w- h-[1300px] md:h-[400px] lg:h-[400px] mt-[100px] mb-[100px]" style={{backgroundImage: 'url(https://i.ibb.co/NF8dnf2/corporate-event-management-service-500x500.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="  text-5xl font-bold">People Review</h1>
      <div className="flex flex-col md:flex-row lg:flex-row md:gap-[30px] lg:gap-[100px]">
        <div>
            <img className="h-[150px] w-[150px] rounded-[50%] mt-[20px] ml-[70px] md:ml-[0px] lg:ml-[0px]" src="https://i.ibb.co/3mjBySk/depositphotos-361909184-stock-photo-portrait-of-handsome-doctor-or.webp" alt="" />
            <p className="font-bold text-[25px]">David</p>

            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked  />
</div>
        </div>
        <div>
            <img className="h-[150px] w-[150px] rounded-[50%] mt-[20px] ml-[70px] md:ml-[0px] lg:ml-[0px]" src="https://i.ibb.co/98tqvp3/360-F-425659755-5-Ba-Ld-Nbb-Ct-Qbbiz1-JNFBikshfi-CWI5-NE.jpg" alt="" />
            <p className="font-bold text-[25px]">Amelia</p>

            <div className="rating">
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
</div>
        </div>


        <div>
            <img className="h-[150px] w-[150px] rounded-[50%] mt-[20px] ml-[70px] md:ml-[0px] lg:ml-[0px]" src="https://i.ibb.co/86MD8y4/istockphoto-1170154563-612x612.jpg" alt="" />
            <p className="font-bold text-[25px]">Robert</p>

            <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked  />
</div>

        </div>
        <div>
            <img className="h-[150px] w-[150px] rounded-[50%] mt-[20px] ml-[70px] md:ml-[0px] lg:ml-[0px]" src="https://i.ibb.co/PZMfg0G/1000-F-330259751-t-GPEAq5-F5bjxkkli-Grb97-X2-Hht-XBDc9x.jpg" alt="" />
            <p className="font-bold text-[25px]">Sophia</p>

            <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked  />
</div>

        </div>

      </div>
    
    </div>
  </div>
</div>
    );
};

export default Review;