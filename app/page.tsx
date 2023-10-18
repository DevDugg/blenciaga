import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import profile from "@/settings/data/profile.data";

export default function Home() {
  return (
    <main className="main">
      <h1 className="hidden">{profile.name}</h1>
      <Header />
      <Hero />
    </main>
  );
}
