import * as moment from "moment-timezone";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import NameWhite from "@/components/NameWhite";
import profile from "@/settings/data/profile.data";

const page = () => {
  const region = "Europe";
  const city = "Paris";
  const parisTime = moment.tz(`${region}/${city}`);
  const formattedTime = parisTime.format("DD/MM/YYYY HH:mm");

  return (
    <main className="main">
      <h1 className="hidden relative">{profile.name}</h1>
      <Image
        src={"/bg.png"}
        alt="bg"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 object-cover w-screen h-screen -z-50"
      />
      <Container className="grid items-center justify-center w-screen h-screen">
        <div className="max-w-[200px] h-fit flex flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-2">
            <Image src={"/logo.png"} alt="Logo" width={60} height={34} className="object-contain w-[60px] h-[34px]" />
            <NameWhite />
            <span className="text-xs text-WHITE">
              {formattedTime} {city}
            </span>
          </div>
          <div className="flex flex-col gap-4 text-xs text-WHITE w-fit">
            <Link href={"/"}>news</Link>
            <Link href={"/"}>fall/winter 2023 preview</Link>
            <Link href={"/"}>fall/winter 2023 lookbook</Link>
            <Link href={"/"}>shop</Link>
            <Link href={"/"}>about</Link>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
