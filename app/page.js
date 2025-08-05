import Process from "./_components/Process";
import SelectedWork from "./_components/SelectedWork";
import ServicesHome from "./_components/ServicesHome";

export default function Home() {
  return (
    <>
      <main className="h-[85vh] md:h-screen grid">
        <p className="md:text-[calc(0.5rem_+_1.1vw)] text-[calc(1rem_+_1.5vw)] font-light font-chillax text-white/60 max-w-[600px] text-center mx-auto mt-32 md:mt-44 place-self-end">Premium web design, development, and SEO services to help your business stand out.</p>
        <h1 className="md:text-[calc(3rem_+_7.5vw)] text-[calc(2rem_+_4.5vw)] text-center text-sand self-end font-light font-satoshi">Code In Pixels</h1>
      </main>
      <ServicesHome />
      <SelectedWork />
      <Process />
    </>

  );
}
