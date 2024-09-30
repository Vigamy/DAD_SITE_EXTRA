import Header from './components/Header/Header.jsx';
import Promo from './components/Promo/Promo.jsx';
import Hero from './components/Hero/Hero.jsx';
import Subtitle from './components/Subtitle/Subtitle.jsx';
import SectionBar from './components/SectionBar/SectionBar.jsx'
import CardProduto from './components/CardProduto/CardProduto.jsx';

function App() {
  const sub1 = "Today's"
  const titulo1 = "Flash Sales"
  return (
    <div>
      <Promo />
      <Header />
      <Hero/>
      <Subtitle sub={sub1} />
      <SectionBar titulo={titulo1}/>
      <CardProduto />
    </div>
  );
}

export default App;
