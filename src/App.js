import Header from "./components/Header";
import Footer from "./components/Footer";
import Graphics from './components/Graphics';
import AboutMe from "./components/AboutMe";
import Design from "./components/Design";
import smallerProjectsList from "./SmallProjectsList";
// Imports for Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Contact from "./pages/Contact";
import LargerProjects from "./pages/LargerProjects";
import Home from "./pages/Home";
import Card from "./pages/SmallerProjects";

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
  gitURL={item.gitURL}
  />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="card" className="cardList" element={<dl className="cardList"> {smallerProjectsList.map(createCard)}</dl>} />
          <Route path="largerprojects" element={<LargerProjects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
