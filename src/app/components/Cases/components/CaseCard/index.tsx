import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

interface CaseCardProps {
  title: string;
  description: string;
  icon: string;
}

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
});

export default function CaseCard({ description, icon, title }: CaseCardProps) {
  return (
    <div className="bg-[#1F2732] p-10">
      <h3 className={`${cormorantGaramond.className} text-4xl text-white`}>
        {title}
      </h3>
      <p className="text-[#D7D7D7] text-xl mt-2">{description}</p>
      <div className="w-full h-[1px] bg-zinc-500 my-6" />
      <div className="flex flex-row items-center justify-between gap-2">
        <Image src={icon} alt={title} width={50} height={50} />
        <div>
          <button className="text-white bg-[#161D27] hover:bg-[#CCAA60] transition-all px-8 py-3 font-medium text-xl">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
}
