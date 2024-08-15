import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import CaseCard from "./components/CaseCard";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

const CASES = [
  {
    title: "Direito Empresarial",
    description:
      "Consultoria jurídica completa para empresas, garantindo conformidade e soluções eficazes.",
    icon: "/icons/case-1.svg",
  },
  {
    title: "Direito da Construção",
    description:
      "Resolução de disputas contratuais e conformidade regulatória no setor da construção civil.",
    icon: "/icons/case-2.svg",
  },
  {
    title: "Acidente de Trânsito",
    description:
      "Assistência jurídica para vítimas de acidentes, buscando compensações justas e proteção de direitos.",
    icon: "/icons/case-3.svg",
  },
  {
    title: "Homicídio Culposo",
    description:
      "Apoio legal para famílias em casos de homicídio culposo, garantindo justiça e verdade.",
    icon: "/icons/case-4.svg",
  },
  {
    title: "Direito Penal",
    description:
      "Defesa em processos criminais, assegurando julgamento justo e busca da melhor resolução.",
    icon: "/icons/case-5.svg",
  },
  {
    title: "Direito de Família",
    description:
      "Apoio em questões familiares, como divórcio e guarda, com sensibilidade e respeito.",
    icon: "/icons/case-6.svg",
  },
];

export default function Cases() {
  return (
    <div
      id="cases"
      className="w-fill max-w-full bg-[#161D27] py-24 flex flex-col gap-24"
    >
      <div className="flex flex-col max-w-6xl items-center w-full mx-auto px-4 gap-10">
        <div className="flex-1 flex flex-col items-center gap-5">
          <h2
            className={`${cormorantGaramond.className} text-5xl text-white text-center`}
          >
            Conheça Nossos Casos
          </h2>
          <Image
            src="/icons/separator-center.svg"
            alt="Separator Icon"
            width={95}
            height={40}
          />
          <p className="text-xl text-[#D7D7D7] max-w-[800px] w-full text-center">
            Na <span className="text-[#D1B06B]">Lex Consultoria</span>, temos
            orgulho de compartilhar histórias de sucesso que refletem nosso
            compromisso com a excelência e a dedicação aos{" "}
            <span className="text-[#D1B06B]">nossos clientes</span> . Nossos
            casos representam uma ampla gama de desafios legais que superamos
            com estratégias inovadoras e personalizadas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {CASES.map((item, index) => {
            return <CaseCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}
