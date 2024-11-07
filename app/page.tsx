import Image from "next/image";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* <Hero></Hero> */}

      <section className="pt-24 text-4xl text-zinc-200 w-full h-screen bg-slate-800 ">
        <div>n
          <h1 className="text-4xl text-left max-w-max ml-20">
            1. Werther
          </h1>
          <p className="text-lg px-32 pt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-left max-w-max ml-20">
            2. Werther
          </h1>
          <p className="text-lg px-32 pt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-left max-w-max ml-20">
            3. Werther
          </h1>
          <p className="text-lg px-32 pt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </div>
        
      </section>
      <Footer></Footer>
    </div>
  );
}
