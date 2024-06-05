import Header from "./components/Header";
import About from "./components/About.jsx";
import Footer from "./components/Footer";
import Nav from "./components/Nav.jsx";
import MyProjects from "./components/MyProjects.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<MyProjects />
			<ContactMe />
			<Footer />
		</>
	);
}

export default App;
