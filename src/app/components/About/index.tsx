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
      <div className="flex flex-row max-w-6xl items-center w-full mx-auto px-4 gap-10">
        <div className="flex-1">
          <Image src="/about.png" alt="" width={500} height={500} />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <Image
            src="/icons/separator.svg"
            alt="Separator Icon"
            width={95}
            height={40}
          />
          <h2 className={`${cormorantGaramond.className} text-5xl text-white`}>
            I’m Peeter park,
            <br />a Business lawyer
          </h2>
          <p className="text-xl text-[#D7D7D7]">
            There are many variations of passages of Lorem Ipsum available, but
            majority have su alteration in some form, by injected humour,
            randomised workds for which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything.
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
            <button className="text-[#1F2732] bg-white hover:bg-[#CCAA60] transition-all px-14 py-5 font-medium">
              Entre em contato
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-6xl items-center w-full mx-auto px-4 gap-5">
        <h2 className={`${cormorantGaramond.className} text-5xl text-white`}>
          Nossa História
        </h2>
        <Image
          src="/icons/separator.svg"
          alt="Separator Icon"
          width={95}
          height={40}
        />
        <p className="text-xl text-[#D7D7D7] max-w-[800px] w-full text-center">
          There are many variations of passages of Lorem Ipsum available, but
          majority have su alteration in some form, by injected humour,
          randomised workds for which don&apos;t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10">
            <Image src="/about-1.png" alt="" width={373} height={300} />
            <Image src="/about-2.png" alt="" width={373} height={300} />
            <Image src="/about-3.png" alt="" width={373} height={300} />
        </div>
      </div>
    </div>
  );
}
