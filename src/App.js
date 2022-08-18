import logo from './logo.svg';
import Idolo from './components/Idolo'
import './App.css';
import Eurico from './components/imgs/eurico.jpg'
import Luan from './components/imgs/luan.jpeg'


function App() {

    const idolos = [
    {
      nome:"Eurico Lara",
      imagem:"eurico.jpg",
      descricao:"Eurico Lara",
    },
    {
      nome:"Luan Guilherme",
      imagem:"luan.jpeg",
      descricao:"Luan Guilherme"
    },
    {
      nome:"Paulo Nunes",
      imagem:"paulo.jpg",
      descricao:"Paulo Nunes"
    },
    {
      nome:"Renato Portaluppi",
      imagem:"renato.jpg",
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
      <img src={Eurico}/>
    </div>
  );
}

export default App;