import "./CardJogo.css";

function CardJogo({ capa, titulo, genero, preco, onSale }) {
function curtir() {
alert(`Você curtiu ${titulo}!`);
}

return (
<div className="card">
<img src={capa} alt={titulo} />

<h2>{titulo}</h2>
<p>{genero}</p>

{preco === 0 ? (
<p className="gratis">GRÁTIS</p>
) : (
<p className={onSale ? "promocao" : ""}>
R$ {preco.toFixed(2)}
</p>
)}

<button onClick={curtir}>Curtir</button>
</div>
);
}

export default CardJogo;