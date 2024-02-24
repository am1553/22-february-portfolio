import HeroImage from "./components/HeroImage";
import { Header, Main } from "./layout";
import { Experience, Home, Projects } from "./sections";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Header />
      <Main>
        <>
          <Home />
          <Projects />
          <Experience />
        </>
      </Main>
    </div>
  );
}

export default App;
