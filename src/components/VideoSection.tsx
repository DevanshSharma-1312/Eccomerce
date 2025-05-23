import { comorantGaramond, popping } from "@/utils/fonts";

function WhyWearRudraksha() {
    return (
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Updated heading and subheading */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <h2
              className={`
                text-5xl font-light text-center mb-4
                bg-gradient-to-r 
                from-[#fbc634] to-[#dda01a]
                bg-clip-text text-transparent inline-block
                ${comorantGaramond.className}
              `}
            >
              Why You Should  Have a Healthy Vegetable and Fruits
            </h2>
            <h4
              className={`
                ${popping.className} 
                text-lg text-center text-gray-600 tracking-wide
              `}
            >
             "Fresh fruits and vegetables play a vital role in boosting overall wellness, reducing stress, and filling your day with natural energy."
            </h4>
          </div>
  
          {/* Video section */}
          <div className="flex justify-center">
  <div className="w-full relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
    <iframe
      src="https://www.youtube.com/embed/NRz1E2x8anw"
      title="Do's & Don’ts In Consuming Vegetables | Dr. Hansaji Yogendra"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
</div>

        </div>
      </section>
    );
  }
  
  export default WhyWearRudraksha;