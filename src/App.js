import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
  {
    nome: 'Comandantes',
    corPrimaria: '#5c5c5c',
    corSecundaria: '#888686'
  },
  {
    nome: 'Cabos',
    corPrimaria: '#5c5c5c',
    corSecundaria: '#979595'
  },
  {
    nome: 'Soldados',
    corPrimaria: '#5c5c5c',
    corSecundaria: '#b9b6b6'
  },
  ]

  return (
    <div className="App">
      <Banner />

      {times.map(times => <Time key={times.nome} nome={times.nome} corPrimaria={times.corPrimaria} corSecundaria={times.corSecundaria}/>)}

      <Formulario />
    </div>
  );
}

export default App;
