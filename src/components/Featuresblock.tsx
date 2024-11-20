import { FeaturesblockInterFace } from "@/types/interfaces";
import Image from "next/image";
import Heading from "./Heading";

const Featuresblock = ({
  imageUrl,
  title,
  content,
  isReversed,
}: FeaturesblockInterFace) => {
  return (
    <div
      className={`flex flex-wrap ${
        isReversed
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      } justify-center items-center gap-y-12 md:gap-x-20 lg:gap-x-26`}>
      <div className="w-12/12 lg:w-5/12 flex flex-col gap-6">
        <Image
          className="mx-auto shadow-xl w-auto h-auto"
          src={imageUrl}
          width={670}
          height={370}
          alt="home image"
        />
      </div>
      <div className="flex flex-col text-center md:text-start gap-y-4 md:gap-y-6 lg:gap-y-10 h-fit flex-1">
        <Heading title={title} />
        <p className="max-w-[46rem] leading-normal text-lg sm:leading-8">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Featuresblock;
