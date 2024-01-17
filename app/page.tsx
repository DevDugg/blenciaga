import * as moment from "moment-timezone";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import NameWhite from "@/components/NameWhite";
import profile from "@/settings/data/profile.data";

const page = () => {
  const timezone: string[] = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/");

  const region = timezone[0];
  const city = timezone[1];
  const time = moment.tz(`${region}/${city}`);
  const formattedTime = time.format("DD/MM/YYYY HH:mm");

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
            <p className="text-xs text-WHITE uppercase flex items-center gap-2">
              <span>{formattedTime}</span> <span className="uppercase">{city}</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 text-xs text-WHITE w-fit">
            <Link href={"#"}>news</Link>
            <Link href={"#"}>fall/winter 2023 preview</Link>
            <Link href={"#"}>fall/winter 2023 lookbook</Link>
            <Link href={"#"}>shop</Link>
            <Link href={"#"}>about</Link>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
