import Container from "@/components/Container";
import EnterVideo from "@/components/EnterVideo";
import Image from "next/image";
import Link from "next/link";
import NameWhite from "@/components/NameWhite";
import Time from "@/components/Time";
import { getWelcomeMenu } from "@/utils/queries";
import profile from "@/settings/data/profile.data";

const page = async () => {
  const menu = await getWelcomeMenu();

  return (
    <main className="main">
      <EnterVideo />
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
            <Time />
          </div>
          <div className="flex flex-col gap-4 text-xs text-WHITE w-fit lowercase">
            {menu && menu.menu
              ? menu.menu.items.map((item) => (
                  <Link key={item.id} href={item.resource ? `/collection/${item.resource.handle}` : "/collection/all"}>
                    {item.title}
                  </Link>
                ))
              : null}
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
