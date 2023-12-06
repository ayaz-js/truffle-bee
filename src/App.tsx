import { Header } from "./components/Header";
import { Lead } from "./components/Lead";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          className="absolute top-1/2 lg:top-0 object-cover right-0 h-full w-full"
          src="/images/main.png"
          alt="truffle bee"
        />
        <div className="relative max-w-[1440px] my-0 mx-auto px-4">
          <Header />
          <Lead />
          <Form />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
