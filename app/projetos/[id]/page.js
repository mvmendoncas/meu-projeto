import { projetos } from "../../dados";

export default async function Projeto({ params }) {
  const { id } = await params;
  const projeto = projetos.find((p) => p.id === Number(id));
  return <h1>{projeto.titulo} {projeto.descricao} {projeto.tecnologias}</h1>;
}
