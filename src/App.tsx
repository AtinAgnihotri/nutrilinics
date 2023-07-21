import dietBackground from "./assets/diet_background.jpg";
import mummaImage from "./assets/mumma_image.jpg";
import Modal from "./components/modal.tsx";

function App() {
  return (
    <div className="flex h-screen">
      {/* <div
        className="hero m-4 h-[90%] rounded-2xl"
        style={{
          backgroundImage: `url(${dietBackground})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Nutrilinic Diets</h1>
            <p className="mb-5">
              Welcome to Nutrilinic diets. This site is currently under
              construction. In the meanwhile, please reach out to
              nutrilinicdiets@gmail.com or +91-9315555603 on whatsapp
            </p>
            
            <Modal />
          </div>
        </div>
      </div> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={mummaImage}
            className="max-w-[200px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Nutrilinic Diets</h1>
            <p className="py-6">
              Welcome to Nutrilinic diets. This site is currently under
              construction.
              <br />
              In the meanwhile, please reach out to nutrilinicdiets@gmail.com
              or+91-9315555603 on whatsapp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
