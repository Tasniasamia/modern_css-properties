import Image from "next/image";
import React from "react";

const page = () => {
  const timelineEvents = [
    {
      id: 1,
      label: "JOURNEY WAS STARTED",
      year: "1990",
      description:
        "While the adoption of cryptocurrency for everyday transactions is growing.",
      image: "/about.png",
      position: "left",
    },
    {
      id: 2,
      label: "GET REWARDS",
      year: "2015",
      description: "Cryptocurrency for everyday transactions is growing.",
      image: "/about.png",
      position: "right",
    },
    {
      id: 3,
      label: "LAUNCH GAME STUDIO",
      year: "2020",
      description:
        "Our official entry into AR/VR-based game development and esports projects.",
      image: "/about.png",
      position: "left",
    },
  ];
  return (
    <div className="bg-white">
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-3xl"></div>
        </div>

        {/* Text Content */}
        <div className="titleAnimaiton">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Build Something <span className="text-blue-600">Modern</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Create fast, responsive, and elegant web applications powered by
            Next.js and Tailwind CSS. Designed for developers who love clean
            design and performance.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all">
            Learn More
          </button>
        </div>
      </section>
      <div className="bg-white hero_section my-[120px]">
        <div className="lg:mb-[120px] mb-[60px]">
          <div className="mx-auto flex max-w-[1320px] flex-col lg:flex-row gap-[40px]">
            <div className=" lg:w-1/2 w-full fle lg:h-[729px] md:h-[729px] sm:h-[650px] lg:block sm:flex flex-col items-center hidden">
              <div className="h-full lg:w-full md:w-[700px] sm:w-[610px]  relative">
                <img
                  src="newsvg.png"
                  className="absolute animationRotate right-[27px] top-[-100px] z-50"
                />
                <img
                  src="about.png"
                  className="object-fill rounded-[20px] !z-20 !relative custom-2xl1:h-[554px] custom-2xl1:w-[429px]  custom-2xl:h-[500px] custom-2xl:w-[400px] custom-xl1:w-[380px] custom-xl1:h-[480px] custom-xl2:w-[380px] custom-xl2:h-[480px] custom-xl3:h-[438px] custom-xl3:w-[330px] md:w-[429px] md:h-[500px] custom-xl4:w-[350px] custom-xl4:h-[400px] sm:h-[500px] sm:w-[390px] "
                />
                <img
                  src="about2.png"
                  width={1000}
                  height={100}
                  className="absolute rounded-[20px]  md:top-[154px] !z-30 object-fill  custom-2xl1:left-[300px] custom-2xl1:h-[554px] custom-2xl1:w-[429px] custom-2xl:h-[500px] custom-2xl:w-[380px] custom-2xl:left-[302px] custom-xl1:w-[350px] custom-xl1:h-[480px] custom-xl1:left-[300px] custom-xl2:w-[350px] custom-xl2:h-[480px] custom-xl2:left-[300px] custom-xl3:h-[438px] custom-xl3:w-[300px] custom-xl3:left-[290px] md:w-[429px] md:h-[500px] md:left-[300px] custom-xl4:w-[350px] custom-xl4:h-[400px] custom-xl4:left-[150px] sm:h-[500px] sm:w-[390px] sm:right-0 sm:top-[200px] "
                />
                <div className="absolute bg-[#F3FBF2] z-50 custom-2xl1:left-0 md:bottom-[75px] custom-xl4:bottom-[200px] custom-2xl:left-0 custom-xl1:left-[5px] custom-xl2:left-[5px] custom-xl3:left-0 custom-xl3:bottom-[140px] custom-2xl1:bottom-[15px] custom-xl2:bottom-[95px] custom-2xl:bottom-[-12px] bottom-0 custom-xl1:bottom-[95px] md:bottom-[0px] z-20 flex w-[240px] items-center gap-[20px] rounded-[10px] bg-[#E8EAE8] p-4 sm:w-[300px] sm:gap-[30px] md:w-fit xl:w-auto ]">
                  <div className="grid h-[80px] w-[80px] place-content-center rounded-[10px]  bg-[#F6F6F6] sm:h-[110px] sm:w-[119px]">
                    <img
                      src="svg.png"
                      className="h-[60px] w-[60px] object-fill sm:h-[80px] sm:w-[80px]"
                      alt="aboutvector"
                    />
                  </div>
                  <div>
                    <h3 className="font-dm-sans text-primary mb-[6px] text-[36px] font-bold leading-[44px] ">
                      Experience
                    </h3>
                    <h5 className="w-[107px] font-roboto text-base font-normal text-[#7C7C86]">
                      5 years working experience{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 custom-2xl1:w-1/2 w-full px-3">
              <div>
                <div className="mb-[12px] flex items-center gap-2 lg:mb-[24px]">
                  <img
                    src="Icon2.png"
                    className="h-[24px] w-[24px] object-cover"
                    alt="frame"
                  />
                  <h6 className="section-name">About us</h6>
                </div>
                <h2 className="section-title line-clam-2 w-full pb-[12px] text-textMain lg:pb-[24px] xl:w-[calc(100%-100px)]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  suscipit optio earum quos provident placeat laboriosam
                  voluptatibus, sint repudiandae accusamus dolorem ex. Eaque
                  alias veritatis quam consequatur dolorum inventore voluptatum.
                </h2>

                <p className="section-description mb-[20px] line-clamp-4 w-full text-[#7C7C86] lg:mb-[40px] custom-2xl:w-[725px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  suscipit optio earum quos provident placeat laboriosam
                  voluptatibus, sint repudiandae accusamus dolorem ex. Eaque
                  alias veritatis quam consequatur dolorum inventore voluptatum.{" "}
                </p>

                <div className="mb-[12px] flex flex-col gap-[20px] sm:flex-row sm:gap-[40px] lg:mb-[30px] xl:gap-[120px]"></div>
                <p className="section-description text-[#7C7C86] text-text_secondary mb-[20px] line-clamp-2 lg:mb-[40px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  suscipit optio earum quos provident placeat laboriosam
                  voluptatibus, sint repudiandae accusamus dolorem ex. Eaque
                  alias veritatis quam consequatur dolorum inventore voluptatum.{" "}
                </p>

                <div className="mb-[30px] w-full lg:mb-[56px] xl:w-[527px]">
                  <p className="text-text_primary mb-[16px] font-roboto text-base font-medium">
                    Quality Services
                  </p>
                </div>

                <button className="hover:bg-primaryHover rounded-[30px] bg-primary px-[32px] py-[16px] text-center font-roboto text-[18px] font-medium text-white sm:px-[75px]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-8 py-16 bg-black">
        {/* Vertical Green Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-lime-400 transform -translate-x-1/2"></div>

        {/* Timeline Events */}
        <div className="max-w-6xl mx-auto space-y-24">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`flex items-center gap-12 ${
                event.position === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 fade-up">
                <div className="text-lime-400 text-sm font-semibold tracking-wider mb-2">
                  {event.label}
                </div>
                <h2 className="text-6xl font-bold mb-4 text-white">
                  {event.year}
                </h2>
                <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                  {event.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="flex-1 flex fade-up justify-center">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={"/about.png"}
                    alt={event.label}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center px-6">
        {/* Background decoration */}

        {/* Text Content */}
        <div className="titleAnimation">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Build Something <span className="text-blue-600">Modern</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Create fast, responsive, and elegant web applications powered by
            Next.js and Tailwind CSS. Designed for developers who love clean
            design and performance.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all">
            Learn More
          </button>
        </div>
      </section>
      <div className="relative px-8 py-16 bg-black">
        {/* Vertical Green Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-lime-400 transform -translate-x-1/2"></div>

        {/* Timeline Events */}
        <div className="max-w-6xl mx-auto space-y-24">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`flex  fade-up items-center gap-12 ${
                event.position === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Side */}
              <div className="flex-1  timeline-item">
                <div className="text-lime-400 text-sm font-semibold tracking-wider mb-2">
                  {event.label}
                </div>
                <h2 className="text-6xl font-bold mb-4 text-white">
                  {event.year}
                </h2>
                <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                  {event.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="flex-1 flex justify-center  timeline-item">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={"/about.png"}
                    alt={event.label}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-[60px] ">
        <div className="py-[120px] bg-black text-whtie">
          <ul className="list-none text-3xl flex flex-col items-center gap-4">
            <li className="autoBlur">Home</li>
            <li className="autoBlur">About</li>
            <li className="autoBlur">Contact</li>
            <li className="autoBlur">Faq</li>
            <li className="autoBlur">Questions</li>
          </ul>
        </div>
      </div>
      <div className="h-[200px] flex justify-center items-center">
        <div className="h-[100px] w-[100px] box  bg-yellow-600"></div>
      </div>

      {/* Animation Fill Mode */}
      <div className="container">
        <div className="box none">none</div>
        <div className="box forwards">forwards</div>
        <div className="box backwards">backwards</div>
        <div className="box both">both</div>
      </div>
      <section className="relative flex flex-col items-center justify-center py-[100px] bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center px-6">
        {/* Background decoration */}

        {/* Text Content */}
        <div className="titleAnimation">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Build Something <span className="text-blue-600">Modern</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Create fast, responsive, and elegant web applications powered by
            Next.js and Tailwind CSS. Designed for developers who love clean
            design and performance.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all">
            Learn More
          </button>
        </div>
      </section>
      <div className="flex justify-center items-center h-[600px]">
      <div className="card h-[100px] w-[100px]"></div>
      </div>


{/* mask 1 */}
<div className="flex justify-center items-center h-[300px]">
  <div className="h-[100px] w-[100px] border newMask border-black"></div>
</div>

{/* mask 2 */}
<div className="flex justify-center items-center h-[300px]">
  <div className="h-[100px] w-[100px] border newMask2 border-black"></div>
</div>

<div className="flex justify-center items-center h-[600px]">
  <Image src="/about.png" width={1000} height={1000} className="about-img h-[400px] w-[400px] object-fill" alt="about"/>
</div>

<div className="flex justify-center items-center h-[600px]">
  <Image src="/about.png" width={1000} height={1000} className="about-img2 h-[400px] w-[400px] object-fill" alt="about"/>
</div>

<div className="flex justify-center items-center h-[600px]">
  <Image src="/about.png" width={1000} height={1000} className="about-img3 h-[400px] w-[400px] object-fill" alt="about"/>
</div>


    </div>
  );
};

export default page;
