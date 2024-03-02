import { Header, Main, Footer } from "./layout";

import { Experience, Home, Projects } from "./sections";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-bg-dark-blue text-white lg:text-l overflow-x-hidden">
      <Header />
      <Main>
        <>
          <Home />
          <Projects />
          <Experience />
        </>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
