import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Barra de Navegação */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">IPO</Link>
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/clientes">Clientes</Link>
          <Link className="nav-link" to="/veiculos">Veículos</Link>
          <Link className="nav-link" to="/inspecoes">Inspeções</Link>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>
      </div>
    </div>
  );
}

function Inicio() {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Centro de Inspeção de Automóveis</h1>
      <p className="lead">IPO - ESDS1</p>
    </div>
  );
}

function ClientesList() {

  const lista = [
    { id: 1, nome: "Julio Pinho", morada: "Lisboa", nif: "185763224" },
    { id: 2, nome: "Barros Silva", morada: "Madeira", nif: "785429675" },
    { id: 3, nome: "Maria Juahna", morada: "Leiria", nif: "754863214" }
  ];

  return (
    <div>
      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Clientes</h2>
        <div>
          <button className="btn btn-dark mr-2">
            <i className="fa fa-plus-square"></i> Novo Cliente
          </button>
          <button className="btn btn-outline-dark">
            <i className="fa fa-refresh"></i> Atualizar
          </button>
        </div>
      </div>

      {/* Tabela Simples */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Morada</th>
            <th>NIF</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nome}</td>
              <td>{c.morada}</td>
              <td>{c.nif}</td>
              <td>
                
                {/* Botões de Ação */}
                <button className="btn btn-dark btn-sm mr-1"><i className="fa fa-eye"></i></button>
                <button className="btn btn-dark btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                <button className="btn btn-dark btn-sm"><i className="fa fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function VeiculosList() { 
  return <h2>Página de Veículos</h2>; 
}

function InspecoesList() {
  return <h2>Página de Inspeções</h2>; 
}

export default App;
