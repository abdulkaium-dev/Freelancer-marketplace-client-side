import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80",
      title: "Grow Your Freelance Career",
      subtitle: "Join our marketplace and start earning from your skills today.",
      description:
        "A freelancer is a self-employed individual who offers services to clients on a contract basis, often in fields like writing, design, programming, or marketing.",
      buttonText: "Hire Me",
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80",
      title: "Connect with Professionals",
      subtitle: "Connect with top-rated professionals for your business needs.",
      description:
        "A freelancer works independently, taking on jobs from different clients without being tied to one company.",
      buttonText: "Start Your Journey",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmM5eofN7OKN1FoED89cPvoyS3XNgbYC3_WQ&s",
      title: "Post Your Task",
      subtitle: "Get instant responses from skilled freelancers ready to work.",
      description:
        "A freelancer is someone who turns skills into freedom—choosing when, where, and how to work on their own terms.",
      buttonText: "Get a Quote",
    },
  ];

  return (
    <div className="w-11/12 md:w-9/12 mx-auto rounded-lg overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4"
                style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
              >
                <h1
                  className="text-4xl md:text-5xl font-bold drop-shadow-lg"
                  style={{ color: "#111827" }} // Primary
                >
                  {slide.title}
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{ color: "#9CA3AF" }} // Neutral
                >
                  {slide.subtitle}
                </p>
                <p
                  className="text-base md:text-lg max-w-3xl"
                  style={{ color: "#9CA3AF" }} // Neutral
                >
                  {slide.description}
                </p>
                <button
                  className="px-6 py-3 rounded-lg text-lg font-semibold transition"
                  style={{ backgroundColor: "#10B981", color: "#FFFFFF" }} // Accent
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
