import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-fill max-w-full bg-[#161D27] py-24 flex flex-col gap-24">
      <div className="flex flex-col max-w-6xl w-full mx-auto px-4 gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center">
          <Image
            className="block md:hidden"
            src="/icons/separator-center.svg"
            alt=""
            width={95}
            height={100}
          />
          <Image
            className="hidden md:block"
            src="/icons/separator-lg-left.svg"
            alt=""
            width={373}
            height={100}
          />
          <Image src="/logo.svg" alt="" width={373} height={100} />
          <Image
            className="block md:hidden"
            src="/icons/separator-center.svg"
            alt=""
            width={95}
            height={100}
          />
          <Image
            className="hidden md:block"
            src="/icons/separator-lg-right.svg"
            alt=""
            width={373}
            height={100}
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 border-t-[1px] border-b-[1px] border-zinc-400 py-5">
          <p className="text-lg text-center md:text-start text-[#D7D7D7]">
            Feito com ❤️ por{" "}
            <a
              href="https://shinodalabs.com.br"
              target="_blank"
              className="text-[#CCAA60] font-semibold"
            >
              Shinoda Labs
            </a>
            . Todos os direitos reservados ©
          </p>
          <ul className="flex flex-row gap-4 items-center">
            <li>
              <p className="text-lg text-[#CCAA60]">Siga-nos:</p>
            </li>
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
        </div>
      </div>
    </footer>
  );
}
