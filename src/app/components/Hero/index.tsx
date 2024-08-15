import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

export default function Hero() {
  return (
    <div className="flex flex-row items-center gap-10 mt-5">
      <div className="flex-1 flex flex-col justify-center max-w-[600px] space-y-5 mb-5">
        <Image
          src="/icons/separator.svg"
          alt="Separator Icon"
          width={95}
          height={40}
        />
        <h1 className={`${cormorantGaramond.className} text-6xl text-white`}>
          Expertise Jurídica
          <br />E Soluções Eficazes
        </h1>
        <p className="text-[#CCAA60] text-xl">
          Comprometidos com a excelência, nossos advogados oferecem estratégias
          legais personalizadas para proteger seus interesses.
        </p>
        <div>
          <button className="text-[#1F2732] bg-[#CCAA60] hover:bg-white transition-all px-14 py-5 font-medium">
            Entre em contato
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/hero-person.png"
          alt="Hero Image"
          width={1000}
          height={600}
        />
      </div>
    </div>
  );
}
