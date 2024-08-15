import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Cases from "./components/Cases";

export default function Home() {
  return (
    <main>
        <div className="w-full max-w-full bg-hero bg-no-repeat bg-cover">
          <div className="flex flex-col max-w-6xl w-full mx-auto px-4">
            <Header />
            <Hero />
          </div>
          <About />
          <Cases />
        </div>
    </main>
  );
}
