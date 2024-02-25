import IDEFigure from "./components/IDEFigure";
import { Header, Main } from "./layout";
import { Experience, Home, Projects } from "./sections";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
