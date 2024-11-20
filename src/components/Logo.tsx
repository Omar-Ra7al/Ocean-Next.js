// Next.Js Imports >>
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-2">
      <Image src={"/logo.png"} width={32} height={32} alt="Logo" />
      <div className="relative">
        <h1 className="capitalize text-white text-xl font-bold tracking-wide">
          Ocean
        </h1>
        <div className="absolute -right-2.5 bottom-2 w-2 h-2 rounded-full bg-sky-700" />
      </div>
    </Link>
  );
};

export default Logo;
