// Next.Js >>
import Image from "next/image";
import Link from "next/link";
// Icons >>
import { ArrowRightCircle, MoveRight, Quote } from "lucide-react";
// Components >>
import Buttons from "@/components/Buttons";
import Heading from "@/components/Heading";
import Featuresblock from "@/components/Featuresblock";
import PricingSection from "@/components/PricingSection";

// Constants >> == static data
import { companiesData } from "@/constants/companies";
import { featuresBlockData, featuresData } from "@/constants/featuers";
import { testimonialsData } from "@/constants/testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  // Companies Jsx >>
  const companiesJsx = companiesData.map((comp, index) => {
    return (
      <Image
        key={index}
        src={comp.imageUrl}
        alt={comp.alt}
        width={120}
        height={80}
        className="w-40 h-auto md:w-full mx-auto"
      />
    );
  });

  // Features Jsx >>
  const featuersJsx = featuresData.map((feat, index) => {
    return (
      <article
        key={index}
        className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 text-center md:text-start px-2 py-6 cursor-pointer
        rounded-md hover:bg-slate-800 border-2 border-transparent hover:border-sky-600 
        ">
        <div className="flex justify-center items-center w-52 mx-auto">
          <Image
            key={index}
            src={feat.imageUrl}
            alt={feat.title}
            width={50}
            height={50}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div>
          <p className="font-extrabold text-slate-100">{feat.title}</p>
          <p className="text-sm w-10/12 mx-auto md:mx-0">{feat.content}</p>
        </div>
      </article>
    );
  });

  // Testiomonials Jsx >>
  const testimonialsJsx = testimonialsData.map((test, index) => {
    return (
      <div
        key={index}
        className="flex flex-col justify-between gap-4 text-center items-center md:text-start md:items-start p-4 rounded-md hover:bg-slate-700">
        <Quote className="text-sky-500 min-w-12 min-h-12" />
        <p>{test.review}</p>
        <div className="flex gap-4">
          <div>
            <Image
              className="rounded-full"
              src={test.imageUrl}
              alt="use image"
              loading="lazy"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="font-semibold capitalize text-slate-200">
              {test.name}
            </p>
            <span className="text-sky-500 capitalize">{test.role}</span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <main className="min-h-screen overflow-x-hidden pt-14 lg:pt-18 antialiased">
      <div className="container">
        {/* << Home Section  */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50 opacity-10 w-full h-full  overflow-hidden">
            <Image
              src={"/bg.png"}
              width={1920}
              height={1080}
              loading="eager"
              alt="home image"
              className="object-contain max-w-full h-full"
            />
          </div>

          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                new features is now available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team&rsquo;s productivity with Ocean CRM
                dashboard that streamlines project management, collaboration,
                and data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Buttons>
                  get started
                  <MoveRight className="w-4 h-4" />
                </Buttons>
                <Link href="#pricing">
                  <Buttons variant="outline">view pricing</Buttons>
                </Link>
              </div>
            </div>
            <div className="w-ful overflow-hidden max-h-[500px]">
              <Image
                src={"/Hero-image.svg"}
                width={670}
                height={370}
                loading="eager"
                alt="home image"
                className="mx-auto shadow-xl w-auto h-full object-contain"
              />
            </div>
          </div>
        </section>
        {/* Home Section  //>> */}

        {/* << Companies Section */}
        <section
          id="companies"
          className=" max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4">
          {companiesJsx}
        </section>
        {/* Companies Section //>> */}

        {/*<< Featuers Section */}
        <section
          id="featuers"
          className="relative flex flex-col justify-center items-center gap-y-12 md:gap-y-20 lg:gap-y-28">
          <Image
            src="/bg2.png"
            width={1920}
            height={1080}
            alt="second banner"
            loading="lazy"
            className="absolute -z-50 w-full h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 object-cover"
          />
          {/* part 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-12 md:gap-x-20 lg:gap-x-26">
            <div className="flex flex-col text-center md:text-start gap-y-4 md:gap-y-6 lg:gap-y-10 h-fit flex-1">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="max-w-[46rem] leading-normal text-lg sm:leading-8">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <div className="flex justify-center md:justify-start">
                <Buttons>Get Started</Buttons>
              </div>
            </div>
            <div className="w-12/12 md:w-5/12 flex flex-col gap-6">
              {featuersJsx}
            </div>
          </div>
          {/* part 2 */}
          {featuresBlockData.map((feat, index) => {
            return <Featuresblock key={index} {...feat} />;
          })}
        </section>
        {/* Featuers Section //>> */}

        {/* << Pricing Section */}
        <section id="pricing" className="">
          <Heading
            title="Find a plan to power your projects"
            isCentered={true}
          />
          <PricingSection />
        </section>
        {/* Pricing Section //>> */}
        {/* << Testimonails Section  */}
        <section id="testimonials">
          <Heading title="Meet our Customers" isCentered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 py-6 ">
            {testimonialsJsx}
          </div>
        </section>
        {/* Testimonails Section //>> */}
        {/* << Contact Section */}
        <section
          id="contact"
          className="flex flex-col justify-center items-center text-center md:flex-row md:justify-between md:text-start bg-slate-800 rounded-lg p-8 gap-4">
          <div className="w-4/4 md:w-3/4 space-y-4">
            <Heading title="Let’s try our service now!" />
            <p>
              Experience the power of Ocean CRM dashboard for engineering teams.
              Boost productivity and streamline collaboration. Get started
              today!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Buttons>
              get started
              <MoveRight className="w-4 h-4" />
            </Buttons>
          </div>
        </section>
        {/* Contact Section //>> */}
        <Footer />
      </div>
    </main>
  );
}
