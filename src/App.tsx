import { Header, Main } from "./layout";
import { Home, Projects } from "./sections";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-bg-dark-blue text-white  overflow-x-hidden">
      <Header />
      <Main>
        <>
          <Home />
          <Projects />
        </>
      </Main>
    </div>
  );
}

export default App;
