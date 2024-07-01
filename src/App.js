import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/NavBar/Navbar';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Projects from './components/Projects/AllProjects';

import { Route, Routes } from 'react-router-dom';
import Footer from './components/NavBar/Footer';
import { Fragment } from 'react';

function App() {
  return (
	<Fragment>
    <div className="App">
      <MyNavbar />
	  	<div style={{marginTop: 100}}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/myportfolio" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				{/* <Route path="/articles" element={<Articles />} /> */}
				{/* <Route path="/article/:slug" element={<ReadArticle />} /> */}
				{/* <Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} /> */}
			</Routes>
			</div>
		</div>
		<Footer />
		</Fragment>
  );
}

export default App;
