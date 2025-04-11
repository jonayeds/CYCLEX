const About = () => {
  return (
    <div className="pt-24 container px-4 mx-auto">
      <h1 className="font-main md:text-[3.5vw] text-[7vw] text-center uppercase">
        About us
      </h1>
      <p className="text-sm mt-4 leading-8 text-gray-700">
        Welcome to{" "}
        <span className="font-main tracking-widest text-lg">CYCLEX</span>, your
        one-stop destination for high-quality bicycles, cycling accessories, and
        everything you need to get on the road and ride in style! <br />
        We are passionate about cycling and believe that biking is not just a
        mode of transportation, but a lifestyle. Whether you're a seasoned
        cyclist, a weekend adventurer, or someone new to the world of bikes, our
        goal is to offer a range of products that fit your needs, preferences,
        and budget.
      </p>
      <img
        src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt=""
        className="w-[60vw] mx-auto my-8 rounded-lg shadow-lg"
      />
      <h1 className="font-main text-center md:text-[3vw] text-[6vw] font-light">
        Our Story
      </h1>
      <p className="my-4">
        Founded in 2020,{" "}
        <span className="font-main tracking-widest text-lg">CYCLEX</span>{" "}
        started with a simple idea — to bring high-performance bicycles and
        exceptional service to the local community. Over the years, we have
        grown into a trusted name in the cycling world, offering a wide range of
        bicycles, from mountain bikes to road bikes, hybrid bikes, and more.
        What sets us apart is our commitment to quality, customer satisfaction,
        and an unwavering love for the sport. We don`t just sell bikes; we live
        and breathe cycling. Our team is made up of passionate cyclists who are
        dedicated to helping you find the perfect bike that suits your needs,
        whether you're aiming for speed, adventure, or just a fun ride around
        the neighborhood.
      </p>
    </div>
  );
};

export default About;
