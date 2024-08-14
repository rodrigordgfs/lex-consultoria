import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Cormorant_Garamond, Luxurious_Script } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

const luxuriousScript = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main>
        <div className="w-full max-w-full bg-hero bg-no-repeat bg-cover">
          <div className="flex flex-col max-w-6xl w-full mx-auto px-4">
            <Header />
            <Hero />
          </div>
        </div>

        <div className="w-fill max-w-full bg-[#1F2732] py-24">
          <div className="flex flex-col max-w-6xl w-full mx-auto px-4 gap-10">
            <div className="flex flex-row gap-10">
              <Image src="/image-1.png" alt="" width={460} height={290} />
              <div className="flex flex-col gap-4">
                <h2
                  className={`${cormorantGaramond.className} max-w-[400px] w-full text-4xl text-white`}
                >
                  A escolha simples para litígios complexos
                </h2>
                <Image
                  src="/icons/separator.svg"
                  alt="Separator Icon"
                  width={95}
                  height={40}
                />
                <p className="text-xl text-[#D7D7D7]">
                  Em um mundo onde as leis estão em constante evolução, é
                  crucial ter ao seu lado uma equipe de advogados que compreende
                  profundamente o cenário legal. Nossa consultoria oferece
                  soluções personalizadas que visam proteger seus interesses e
                  mitigar riscos. Com um compromisso inabalável com a
                  excelência, trabalhamos para antecipar desafios futuros e
                  oferecer estratégias proativas.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <Image src="/image-2.png" alt="" width={460} height={290} />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <Image
                    src="/user.png"
                    alt="User Image"
                    width={85}
                    height={85}
                  />
                  <p
                    className={`${luxuriousScript.className} text-white text-4xl`}
                  >
                    Peeter Park
                  </p>
                </div>
                <Image
                  src="/icons/separator.svg"
                  alt="Separator Icon"
                  width={95}
                  height={40}
                />
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-4 py-7 px-11 bg-[#3B434E]">
                    <Image
                      src="/icons/paper.svg"
                      alt="Paper Icon"
                      width={55}
                      height={55}
                    />
                    <div className="flex flex-col gap-2 text-white text-xl">
                      <p>95%</p>
                      <p>Casos de Sucesso</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-4 py-7 px-11 bg-[#D1B06B]">
                    <div className="font-bold text-3xl bg-[#1F2732] text-white flex flex-row items-center justify-center rounded-lg p-3">
                      35+
                    </div>
                    <div className="flex flex-col gap-2 text-[#1F2732] font-medium text-xl leading-5">
                      <p>Anos</p>
                      <p>De Experiência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
