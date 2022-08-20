import Idolo from './components/Idolo'
import './App.css';


function App() {

    const idolos = [
    {
      nome:"Eurico Lara",
      imagem:"eurico.jpg",
      descricao:"Eurico Lara",
    },
    {
      nome:"Luan Guilherme",
      imagem:"eurico.jpg",
      descricao:"Luan Guilherme"
    },
    {
      nome:"Paulo Nunes",
      imagem:"eurico.jpg",
      descricao:"Paulo Nunes"
    },
    {
      nome:"Renato Portaluppi",
      imagem:"eurico.jpg",
      descricao:"Renato Portaluppi"
    }
  ]

  const renderizaIdolo=(idolo)=>{
    return ( <Idolo 
      nome={idolo.nome}
      imagem={idolo.imagem}
      descricao={idolo.descricao}/>)
  }

  return (
    <div className="App">
      {
        idolos.map(idolo=> renderizaIdolo(idolo))
      }
    </div>
  );

}

export default App;