export default function Cartao({ titulo, descricao, tecnologias})
{
    return (
        <div className="cartao">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <div className="tags">
            {tecnologias.map((t) => (
            <span key={t} className="tag">{t}</span>
    ))}
</div>
        </div>
    );
}