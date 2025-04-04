// import careers from "../images/careers.jpg";
import sky from "../images/sky.jpg";
import abstract from "../images/abstract.jpg";

const Careers = () => {
  return (
    <div>
      <div className="group relative">
  <img className="h-full w-full" src={abstract} alt="careers" />
  
  <h1 className="text-white text-3xl font-bold absolute top-5 ml-170">CAREERS</h1>
  <h1 className="text-white text-3xl font-bold text-center pt-20 absolute top-10 left-5 transition-all duration-1000 group-hover:left-20">
    Create an opportunity for yourself
  </h1>

  
  <h1 className=" absolute top-48 left-5 text-white text-xl leading-relaxed transition-all duration-1000 group-hover:left-20">
    We are looking at young professionals with a vision to excel. We value not only <br />
    technological expertise and innovation, but personal integrity, responsibility and <br />
    passion. At Atlas, we encourage innovative and smart work processes. We <br />
    firmly believe that pre-defined roles restrict the thought process and we inspire <br />
    you to follow your passion. Whether that means progressing towards management, <br />
    or engaging in a technical specialty, or something else entirely. You can create <br />
    an opportunity for yourself.
  </h1>
</div>

      
      <img className="h-full w-full" src={sky} alt="sky" />
      <h1 className="text-3xl font-bold text-white absolute top-215 left-125">
        What's special about working with us?
      </h1>
      <h2 className="text-xl font-bold text-white absolute top-230 left-10">
        Atlas is not a place to work in. It is much more. It's a place which
        helps you step up in career and prepares you to face and overcome the
        bigger challenges in life that await you. What really differentiates
        from the rest is that we recognize what's good enough for our customers
        today may not be good enough tomorrow. That is why we focus on our
        customers' future first. We are ambitious and that ambition is reflected
        in our people too. If you share similar values and think you can make a
        difference, you are the one for Atlas and we help you build your career
        and create stepping stones for a successful future.
      </h2>
      <h1 className="text-3xl font-bold text-white absolute top-290 left-175">
        Decided?
      </h1>
      <h2 className="text-xl font-bold text-white absolute top-305 left-50">
        If you think you can make a difference, send your CV to 
        <span className="text-red-500"> careers@Atlas.com</span> and this just might be a life changing decision.
      </h2>
     



    </div>
  );
};

export default Careers;
