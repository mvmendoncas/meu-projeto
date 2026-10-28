import Image from "next/image";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Link from "next/link";


export default function Home() {
  const nome = "Maria";
  return (
    <div>

     <nav>
      <Link href="/">Início</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/contato">Contato</Link>
    </nav>

   

    <Image
      src="/images.jpg"
      width={300}
      height={300}
      alt="Minha foto"
    />


    </div>
  );
}
