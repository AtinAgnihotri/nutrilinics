// import dietBackground from "./assets/diet_background.jpg";
import Carousel from "./components/carousel";
import HeroCard from "./components/hero-card";
import { SLIDES } from "./utils/constants";
// import Modal from "./components/modal.tsx";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <div className="m-5">
        <HeroCard />
      </div>
      <div className="items-center justify-center p-3">
        <div className="items-center justify-center">
          <h2 className="text-xl font-bold align-middle items-center text-center">
            Tired of fake testimonials? Here's some real-life superheroes
          </h2>
          <div className="my-4 lg:my-8">
            <Carousel slides={SLIDES} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
