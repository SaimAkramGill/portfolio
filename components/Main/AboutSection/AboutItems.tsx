import { m } from "framer-motion";
import Image from "next/image";
import { aboutVariant } from "../../../variants/aboutVariant";

const AboutItems = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 ">
        {/* text */}
        <div className="text lg:flex-[45%]">
          <m.h1
            className="flex items-start mb-6 space-x-2 text-xl font-normal text-white lg:text-2xl font-pop lg:space-x-3"
            initial={{ opacity: 0, y: 20 }}
            variants={aboutVariant}
            whileInView={aboutVariant.heading}
            viewport={{ once: true }}
          >
            <p>Hi{"👋, "} I&apos;m</p>
            <p className="relative font-semibold font-pop text-cyan w-fit">
              Saim Akram,
            </p>
          </m.h1>
          {/* info */}
          <div className="mb-10 md:mb-12 lg:mb-0">
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p1}
              viewport={{ once: true }}
            >
Experienced Full Stack Software Quality Assurance and Testing Engineer
with a strong foundation in both automated and manual testing.
With a BS in Information Technology from National Textile University, Faisalabad,
and more than 3 years of professional experience,
I have had the privilege of contributing to various impactful projects across different industries.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p2}
              viewport={{ once: true }}
            >
            Throughout my career, I have honed my skills in testing tools such as Selenium,
            UFT, J-Meter, and LoadRunner,
            ensuring that the software I work on meets the highest standards of quality and performance.
            My expertise extends to Python, Flutter, JavaScript, and several frameworks,
            making me proficient in developing user-facing features, building reusable components,
            and optimizing application performance.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p2}
              viewport={{ once: true }}
            >
              I am passionate about creating innovative web and mobile solutions,
              with a track record of delivering high-quality applications
              like AWD Analyzer, Vincellar, I-Hunt, and Dispatch.
              My dedication to detail and quality assurance is complemented
              by my commitment to mentoring new programmers, helping them build
              strong foundations in software development and testing.
              I thrive in collaborative environments, working closely with cross-functional
              teams to ensure that the software not only meets but exceeds client expectations.
            </m.p>
          </div>
        </div>
        {/* images/illustrsions */}
        <m.div
          className="lg:flex-[40%] w-full md:max-w-md relative cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          variants={aboutVariant}
          whileInView={aboutVariant.image}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-full h-[28rem] md:h-[37rem] lg:h-[30rem] xl:h-[34rem] relative rounded-md overflow-hidden border-2 border-cyan backdrop-blur-sm bg-cyan/20 z-20 ">
            <div className="relative w-full h-full duration-500 grayscale group-hover:grayscale-0">
              <Image
                src={"/images/me_.jpg"}
                alt="moi"
                priority={true}
                fill
                quality={100}
                placeholder={"blur"}
                blurDataURL={"/images/me.jpg"}
              />
            </div>
          </div>
          <div className="absolute h-[28rem] md:w-[105%] md:h-[37.5rem] lg:h-[30rem] xl:h-[34.5rem] w-full top-5 left-3 border-2 border-body z-10 bg-buttonBg rounded-lg group-hover:top-4 group-hover:left-3 duration-500"></div>
        </m.div>
      </div>
    </>
  );
};

export default AboutItems;
