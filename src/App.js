import Header from "./components/Header";
import Footer from "./components/Footer";
import Graphics from './components/Graphics';
import AboutMe from "./components/AboutMe";
import Design from "./components/Design";
import Card from "./components/SmallerProjects";
import smallerProjectsList from "./SmallProjectsList";

function createCard(item) {
  return (
  <Card 
  key={item.id}
  title={item.title}
  img={item.imgURL}
  description={item.description}
  tagOne={item.tagOne}
  tagTwo={item.tagTwo}
  tagThree={item.tagThree}
  />
  );
}


function App() {

  return (
    <div className="App">
      <Header />
      <dl className="cardList"> {smallerProjectsList.map(createCard)}</dl>
      <Design />
      <Graphics />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
