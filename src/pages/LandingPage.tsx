import gradient from "../assets/Gradient.png";
import astronout3d from "../assets/Astronout3d.png";
import threeAstronout3d from "../assets/ThreeAstronout3d.png";
import iphoneMockup from "../assets/IphoneMockup.png";
import milkyanoRobot from "../assets/MilkyanoRobot.png";
import robotHead from "../assets/RobotHead.png";
import testimonials from "../assets/Testimonials.png";
import carousel from "../assets/Carousel.png";
import footer from "../assets/Footer.png";
import MilkyanoOverlay from "../components/MilkyanoOverlay";
import MetaBanner from "../components/MetaBanner";
import MilkyanoCrown from "../components/MilkyanoCrown";
import Pointer from "../components/Pointer";

function LandingPage() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col relative">
        <img
          width={1000}
          height={1000}
          className="absolute md:-left-56 md:-top-52 -top-20 right-0"
          src={gradient}
          alt="blue gradient"
        />
        <div className="container place-self-center grid grid-cols-3 m-4 mb-40 px-4">
          <div />
          <img
            width={80}
            height={80}
            className="place-self-center place-items-center"
            src="/MilkyanoHeader.png"
            alt="Milkyano Header"
          />
          <button className="buttonOn place-self-end">
            BOOK CALL
            <Pointer classname="buttonIcon" />
          </button>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center text-center md:w-1/2 self-center mb-40 md:mb-60 px-6">
          <MilkyanoOverlay classname="w-full absolute z-0" />
          <MetaBanner classname="w-52 z-10" />
          <div className="flex flex-col md:scale-125 md:my-2 z-10">
            <h1>
              BE THE {""}
              <span className="textGradient">KING</span>
            </h1>
            <h1>OF YOUR NICHE</h1>
          </div>
          <b className="z-10">
            We'll elevate your brand to the top of the chain.
          </b>
          <sub>
            We remove campaign uncertainty and stabilize your revenue. As a
            leading Facebook Ads agency, we elevate your brand through expert
            creative testing and media buying. Simplify your advertising journey
            with Milkyano for clear results and steady growth.
          </sub>
          <button className="buttonSemi z-10">
            START NOW
            <Pointer classname="buttonIcon" />
          </button>
        </div>

        <div className="md:w-4/5 text-end place-self-center my-20 relative mb-40 md:mb-60 px-6 w-full">
          <img
            width={1000}
            height={1000}
            src={astronout3d}
            className="absolute md:-top-32 bottom-0 -left-10 -z-10"
            alt="the Astronout 3d"
          />

          <div className="flex flex-col items-end gap-3 z-10">
            <MilkyanoCrown classname="w-10 text-[#1374F6]" />
            <b>WE CREATE ADS THAT</b>
            <div className="flex flex-col">
              <h1>STOP</h1>
              <h1>THE</h1>
              <h1 className="textGradient">SCROLL</h1>
            </div>
            <button className="buttonSemi z-10">
              FREE CONSULTATION
              <Pointer classname="buttonIcon" />
            </button>
          </div>
        </div>

        <div className="md:w-4/5 place-self-center my-20 relative flex flex-col mb-40 md:mb-60 px-6 gap-24">
          <img
            width={350}
            height={350}
            src={iphoneMockup}
            className="md:absolute order-last right-0 -z-10"
            alt="the Iphone Mockup"
          />

          <div className="flex flex-col items-start gap-3 z-10">
            <MilkyanoCrown classname="w-10 text-[#1374F6]" />
            <div className="flex flex-col">
              <h1>
                THE BEST <span className="textGradient">FACEBOOK ADS</span>
              </h1>
              <h1>AGENCY THAT CREATES</h1>
              <h1>YOUR CREATIVE IN</h1>
              <h1>MELBOURNE</h1>
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <b>
                As a company focused on creating engaging ads with a deep
                understanding of Facebook’s algorithm and a talented team, we
                strive to produce impactful ideas.
              </b>
              <sub>
                We pave the way for companies to grow through the internet by
                giving your products the views and attention they need. Your
                products deserve ample recognition, and as an advertising
                agency, recognition is our specialty. Sit back and relax as we
                take your company to the market and put your products where they
                need to be.
              </sub>
              <sub>
                Don’t worry about not performing well on Facebook ads. Our
                competency surpasses that of most agencies in paid ads and
                creative. Our best strategies and creatives will conquer the
                market for your brand.
              </sub>
            </div>
          </div>
        </div>

        <div className="flex justify-center relative bg-gradient-to-b from-black to-[#01126B]/35 px-6">
          <div className="md:w-4/5 flex flex-col items-start gap-3 z-10">
            <MilkyanoCrown classname="w-10 text-[#1374F6]" />
            <div className="flex flex-col">
              <h1>
                YOU NEED THE <span className="textGradient">BEST</span>
              </h1>
              <h1 className="md:hidden block">
                <span className="textGradient">TEAM</span> TO SUCCEED IN THIS
                WORLD
              </h1>
              <h1 className="md:block hidden">
                <span className="textGradient">TEAM</span> TO SUCCEED
              </h1>
              <h1 className="md:block hidden">THIS WORLD</h1>
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <b>
                Finding the winning creative is the hardest part of increasing
                your ad budget every day on Facebook Ads. Many e-commerce brands
                are struggling with their sales because their agencies always
                lack performance due to their 💩 ads.
              </b>
              <sub>
                When you partner with Milkyano Creative Media, you gain a team
                dedicated to continuous testing, iteration, and scaling of your
                creative content, managing the entire production process from
                start to finish. Our paid media specialists collaborate closely
                with our creatives, providing up to the minute data to guide
                their next creations.
              </sub>
            </div>
            <button className="buttonSemi z-10">
              GET US
              <Pointer classname="buttonIcon" />
            </button>

            <img
              width={800}
              height={800}
              src={threeAstronout3d}
              className="self-center"
              alt="the Iphone Mockup"
            />
          </div>
        </div>

        <div className="bg-[#2797FF] flex justify-center py-32 mb-40 px-6">
          <div className="md:w-4/5 flex flex-col md:flex-row justify-center gap-8 relative">
            <div className="transform scale-x-[-1] md:scale-x-100 w-36 md:w-60 place-self-end md:place-self-center">
              <img
                width={350}
                height={350}
                src={milkyanoRobot}
                alt="the Astronout 3d"
              />
            </div>

            <div className="md:w-1/3 flex flex-col gap-3 z-10">
              <MilkyanoCrown classname="w-10" />
              <h1>OUR SERVICES</h1>
              <sub>
                Our primary goal is to maximize your ROI by driving conversion
                sales through expertly crafted Facebook ads. We prioritize clear
                and consistent communication, keeping you informed about our
                strategies and progress. You'll have direct insight into our
                actions and plans for your brand and products.
              </sub>
              <sub>
                Flexibility is key in our approach. We adapt quickly to
                incorporate your ideas, ensuring your advertising campaigns stay
                innovative and effective.
              </sub>
              <sub>
                With research at the forefront of our planning, we thoroughly
                analyze your brand, products, and target audiences. This
                meticulous approach builds a solid foundation to ensure your
                brand not only stands out but thrives in the Facebook Ads
                market. Our expertise guarantees increased sales, higher ROI,
                and improved ROAS.
              </sub>
              <button className="buttonNegative w-max">
                GET US
                <Pointer classname="text-[#2797FF] w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="place-self-center text-center my-20 relative mb-40 px-6">
          <div className="flex flex-col items-center gap-20 z-10">
            <div className="flex flex-col">
              <h1>OUR</h1>
              <h1 className="textGradient">TESTIMONIALS</h1>
            </div>
            <img
              width={2000}
              height={2000}
              src={testimonials}
              className="w-full md:p-10"
              alt="the Iphone Mockup"
            />
            <button className="buttonSemi z-10">
              GET US
              <Pointer classname="buttonIcon" />
            </button>
          </div>
        </div>

        <div className="md:w-4/5 place-self-center text-center md:my-20 relative px-6 flex flex-col items-center gap-20">
          <div className="flex flex-col items-center gap-6 z-10">
            <MilkyanoCrown classname="w-10 text-[#1374F6]" />
            <div className="flex flex-col">
              <h1>THESE CREATIVES</h1>
              <h1 className="textGradient">WILL BE YOURS</h1>
            </div>
            <img
              width={2000}
              height={2000}
              src={carousel}
              className="w-full"
              alt="the Iphone Mockup"
            />
            <button className="buttonSemi z-10">
              GET US
              <Pointer classname="buttonIcon" />
            </button>
          </div>

          <img
            width={200}
            height={200}
            src={robotHead}
            className="md:absolute md:right-0 md:-bottom-20"
            alt="the Iphone Mockup"
          />
        </div>

        <div className="bg-gradient-to-r from-[#332FFF]/20 to-[#332FFF]/30 flex justify-center items-center p-10">
          <img width={600} height={600} src={footer} alt="the Iphone Mockup" />
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
