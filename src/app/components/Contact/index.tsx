import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-fill max-w-full bg-[#1F2732] py-24 flex flex-col gap-24"
    >
      <div className="flex flex-col md:flex-row max-w-6xl items-center w-full mx-auto px-4 gap-5">
        <div className="flex flex-col flex-1 gap-5">
          <h2
            className={`${cormorantGaramond.className} text-3xl text-white text-center md:text-start`}
          >
            Nossa equipe de advogados especializados está sempre pronta para
            oferecer a melhor solução!
          </h2>
          <p className="text-xl text-[#D7D7D7] text-center md:text-start">
            Com experiência em diversas áreas do direito, oferecemos assessoria
            jurídica personalizada e estratégica para atender às suas
            necessidades legais.
          </p>
          <div>
            <button className="text-[#1F2732] bg-[#CCAA60] hover:bg-white transition-all px-14 py-5 font-medium w-full md:w-auto">
              Entre em contato
            </button>
          </div>
        </div>
        <div className="flex flex-1 bg-white p-10">
          <div className="flex flex-col flex-1 border-8 border-zinc-300 p-10">
            <h2
              className={`${cormorantGaramond.className} text-3xl text-[#161D27] text-center md:text-start`}
            >
              Prontos para proteger seus direitos e garantir seu sucesso!
            </h2>
            <p className="text-xl text-[#909090] mt-2 mb-4 text-center md:text-start">
              Entre em contato conosco para receber consultoria jurídica de
              excelência, com soluções eficientes e inovadoras.
            </p>
            <div className="flex flex-row items-center gap-2">
              <div>
                <div className="bg-[#CCAA60] p-4">
                  <Image
                    src="/icons/phone-white.svg"
                    alt="Phone Icon"
                    width={17}
                    height={17}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#1F2732] text-md font-medium">
                  Fale Conosco
                </p>
                <p className="text-[#161D27] text-lg font-semibold">
                  (51) 9 9623 6798
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
