import Collection from "@/components/collection/Collection";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMiddle from "@/components/header/HeaderMiddle";
import Hero from "@/components/hero/Hero";
import profile from "@/settings/data/profile.data";

export default function Home() {
  return (
    <main className="main">
      <h1 className="hidden">{profile.name}</h1>
      <HeaderMiddle />
      <HeaderBottom />
      <Hero />
      <Collection />
    </main>
  );
}
