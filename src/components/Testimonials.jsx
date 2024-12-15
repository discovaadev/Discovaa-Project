import Black from "../assets/black.png";
import Flores from "../assets/flores.png";
import Cooper from "../assets/cooper.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Black, Marvin",
      text: "Excellent conversation. Very practical, logical and motivating info. Thanks for your time Kosta! Tal",
      image: Black,
      handle: "@marvin_dev",
    },
    {
      name: "Flores, Juanita",
      text: "Eden is 110% recommendable! Very friendly and accurate. She brought me a lot of value in a short period.",
      image: Flores,
      handle: "@juanita_dev",
    },
    {
      name: "Cooper, Kristin",
      text: "Peter was amazing! He shared wonderful tips, made the most out of our call, and was very attentive.",
      image: Cooper,
      handle: "@kristin_dev",
    },
  ];

  return (
    <section className="font-inter font-light hidden md:block">
      <div className="bg-black w-full h-[85px] mx-auto text-white flex items-center justify-center -mt-[90px]">
        <h2>TESTIMONIALS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center justify-center mt-[90px] ">
        {testimonials.map((testimonial, index) => (
          <div
            className="bg-[#232627] text-[#fefefe] w-[340px] h-[205px] rounded-tl-[12px] rounded-br-[12px] p-10 flex flex-col justify-between"
            key={index}
          >
            <p className="text-sm leading-6 font-semibold">
              {testimonial.text}
            </p>
            <div className="flex items-center mt-8">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <h3 className="text-xs m-0">{testimonial.name}</h3>
                <span className="text-xs text-gray-400 mt-1">{testimonial.handle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
