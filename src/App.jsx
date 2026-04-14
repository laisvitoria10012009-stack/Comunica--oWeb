import { useState } from 'react';
import './App.css';


function DogCard({ url }) {
  if (!url) return null;

  return (
    <div className="card-personagem" style={{ textAlign: 'center', marginTop: '20px' }}>
      <img 
        src={url} 
        alt="Cachorro aleatório" 
        width="300" 
        style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} 
      />
      <h4>Seu novo amigo!</h4>
      <p><strong>Status:</strong> 100% Bom garoto!</p>
    </div>
  );
}

function App() {
  const [cachorro, setCachorro] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarProximoDog = async () => {
    setLoading(true);
    setErro(null);
    try {
    
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) throw new Error('Erro ao buscar dados da API');

      const resultado = await response.json();
    
      setCachorro(resultado.message); 
    } catch (error) {
      setErro(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
      <h3> 🐶 Dog Viewer </h3>

      <button 
        onClick={buscarProximoDog} 
        disabled={loading}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        {loading ? 'Carregando...' : 'Ver Próximo Doguinho'}
      </button>

      <div className="resultado">
        {erro && <p style={{ color: 'red' }}>❌ Erro: {erro}</p>}

        {cachorro ? (
          <DogCard url={cachorro} />
        ) : (
          !loading && <p style={{ marginTop: '20px' }}>Clique no botão para começar!</p>
        )}
      </div>
    </div>
  );
}

export default App;