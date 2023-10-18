import Header from "@/components/header/Header";
import profile from "@/settings/data/profile.data";

export default function Home() {
  return (
    <main className="main">
      <h1 className="hidden">{profile.name}</h1>
      <Header />
    </main>
  );
}
