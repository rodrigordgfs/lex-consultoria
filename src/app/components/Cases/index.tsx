import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import CaseCard from "./components/CaseCard";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

const CASES = [
  {
    title: "Business Law",
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
    icon: "/icons/case-1.svg",
  },
  {
    title: "Construction Law",
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
    icon: "/icons/case-2.svg",
  },
  {
    title: "Car Accident",
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
    icon: "/icons/case-3.svg",
  },
  {
    title: "Wrongful Death",
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
    icon: "/icons/case-4.svg",
  },
  {
    title: "Criminal Law",
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
    icon: "/icons/case-5.svg",
  },
  {
    title: "Family Law",
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.",
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
            There are{" "}
            <span className="text-[#D1B06B]">many variations of passages</span>{" "}
            of Lorem Ipsum available, but the majority have su alteration in
            some form, by injected humour, oir{" "}
            <span className="text-[#D1B06B]">randomised workds</span> which
            don&apos;t look even slightly believable.
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
