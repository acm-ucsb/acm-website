import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import NameCard from "@/components/shared/NameCard/NameCard";
import Hero from "@public/assets/HeroLogo.png";

export default function Home() {

    const fake_data = [
        {
            id: "1",
            name: "Foo Bar",
            position: "Board",
            img: Hero,
        },
        {
            id: "2",
            name: "Sam Shu",
            position: "Board",
            img: "/assets/test1.avif",
        }
    ]

  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
            {fake_data.map((people, index) => (
                <NameCard key={index} people={people} index={index}></NameCard>
            ))}
        <Footer />
      </div>
    </main>
  );
}
