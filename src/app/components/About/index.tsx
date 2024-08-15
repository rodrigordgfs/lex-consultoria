import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

export default function About() {
  return (
    <div
      id="about"
      className="w-fill max-w-full bg-[#1F2732] py-24 flex flex-col gap-24"
    >
      <div className="flex flex-col max-w-6xl items-center w-full mx-auto px-4 gap-5">
        <h2
          className={`${cormorantGaramond.className} text-5xl text-white text-center`}
        >
          Nossa História
        </h2>
        <Image
          src="/icons/separator-center.svg"
          alt="Separator Icon"
          width={95}
          height={40}
        />
        <p className="text-xl text-[#D7D7D7] max-w-[800px] w-full text-center">
          Fundada com o compromisso de oferecer soluções jurídicas inovadoras e
          personalizadas, a Lex Consultoria tem se destacado como uma referência
          no setor jurídico brasileiro. Com uma equipe altamente qualificada e
          dedicada, nossa história é marcada por um profundo respeito aos
          princípios éticos e uma busca incessante pela excelência.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <Image src="/about-1.png" alt="" width={373} height={300} />
          <Image src="/about-2.png" alt="" width={373} height={300} />
          <Image src="/about-3.png" alt="" width={373} height={300} />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row max-w-6xl items-center w-full mx-auto px-4 gap-10">
        <div className="flex-1">
          <Image src="/about.png" alt="" width={500} height={500} />
        </div>
        <div className="flex-1 flex items-center md:items-start flex-col gap-5">
          <Image
            src="/icons/separator.svg"
            alt="Separator Icon"
            width={95}
            height={40}
          />
          <h2
            className={`${cormorantGaramond.className} text-5xl text-white text-center md:text-start`}
          >
            Eu sou Peter John
            <br />
            um advogado empresarial
          </h2>
          <p className="text-xl text-[#D7D7D7] text-center md:text-start">
            Sou Peter Park, um advogado empresarial comprometido em oferecer
            soluções jurídicas inovadoras e personalizadas para empresas de
            diversos setores. Com uma abordagem centrada no cliente e um
            profundo conhecimento do ambiente de negócios, trabalho para
            proteger os interesses de meus clientes e garantir que eles alcancem
            seus objetivos comerciais com segurança e eficiência.
          </p>
          <ul className="flex flex-row gap-4">
            <li>
              <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
            </li>
            <li>
              <Image src="/icons/facebook.svg" alt="" width={20} height={20} />
            </li>
            <li>
              <Image src="/icons/twitter.svg" alt="" width={20} height={20} />
            </li>
            <li>
              <Image src="/icons/pinterest.svg" alt="" width={20} height={20} />
            </li>
          </ul>
          <div>
            <button className="text-[#1F2732] bg-white hover:bg-[#CCAA60] transition-all px-14 py-5 font-medium w-full md:w-auto">
              Entre em contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
