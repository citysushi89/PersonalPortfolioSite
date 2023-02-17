import Header from "./components/Header";
import Footer from "./components/Footer";
import Graphics from './components/Graphics';
import AboutMe from "./components/AboutMe";
import Design from "./components/Design";
import smallerProjectsList from "./components/SmallProjectsList";
// Imports for Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Contact from "./pages/Contact";
import LargerProjectsCard from "./pages/LargerProjects";
import Home from "./pages/Home";
import Card from "./pages/SmallerProjects";
import largerProjectsList from "./components/LargerProjectsList";

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

function createLargerProjectCard(item) {
  return (
    <LargerProjectsCard 
      key={item.id}
      bigtitle={item.bigtitle}
      titledescription={item.titledescription}
      gitbaseURL={item.gitbaseURL}

      subtitle1={item.subtitle1}
      subtext1={item.subtext1}
      imgURL1={item.imgURL1}
      listitem11={item.listitem11}
      listitem12={item.listitem12}
      listitem13={item.listitem13}
          
      subtitle2={item.subtitle2}
      subtext2={item.subtext2}
      imgURL2={item.imgURL2}
      listitem21={item.listitem21}
      listitem22={item.listitem22}
      listitem23={item.listitem23}

      subtitle3={item.subtitle3}
      subtext3={item.subtext3}
      imgURL3={item.imgURL3}
      listitem31={item.listitem31}
      listitem32={item.listitem32}
      listitem33={item.listitem33}
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
          <Route path="largerprojects" element={<dl> {largerProjectsList.map(createLargerProjectCard)}</dl>} />
          <Route path="mobiledev" element={<MobileDev />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
