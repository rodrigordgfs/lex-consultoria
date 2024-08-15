import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex flex-row items-center justify-center md:justify-between py-10">
        <Image
          src="/logo.svg"
          alt="Logo Lex Consultoria"
          width={400}
          height={100}
        />
        <div
          className="text-white text-2xl py-3 px-6 cursor-pointer hidden md:block"
          style={{ backgroundColor: "rgba(156, 163, 175, 0.4)" }}
        >
          Marque uma consulta
        </div>
      </div>
      <div className="flex flex-row items-center py-5 justify-center md:justify-between border-t-[1px] border-b-[1px] border-zinc-400">
        <nav className="flex flex-row items-center gap-5 text-white text-xl">
          <a
            href="#"
            className="hover:text-[#CCAA60] transition-all text-center"
          >
            Início
          </a>
          <a
            href="#about"
            className="hover:text-[#CCAA60] transition-all text-center"
          >
            Nossa História
          </a>
          <a
            href="#cases"
            className="hover:text-[#CCAA60] transition-all text-center"
          >
            Casos
          </a>
          <a
            href="#contact"
            className="hover:text-[#CCAA60] transition-all text-center"
          >
            Contato
          </a>
        </nav>
        <div className="flex-row items-center gap-5 hidden md:flex">
          <div className="flex flex-row items-center gap-2">
            <div>
              <div className="rounded-full border-[2px] border-[#CCAA60] p-4">
                <Image
                  src="/icons/phone.svg"
                  alt="Phone Icon"
                  width={17}
                  height={17}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#CCAA60] text-lg font-medium">Fale Conosco</p>
              <p className="text-white text-xl font-regular">
                (51) 9 9623 6798
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <div className="rounded-full border-[2px] border-[#CCAA60] p-4">
                <Image
                  src="/icons/email.svg"
                  alt="Phone Icon"
                  width={17}
                  height={17}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#CCAA60] text-lg font-medium">Email</p>
              <p className="text-white text-xl font-regular">contact@lex.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
