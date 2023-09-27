import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavigationBox from "./components/NavigationBox";

function App() {

  return (
    <div className="bg-[url(../public/assets/img/bg.svg)] bg-no-repeat bg-cover ">
      <div className="container max-w-[640px] w-full h-screen ">
        <div className="w-full h-screen backdrop-blur-md">
          
          <Navbar />
          <Hero />
          <NavigationBox/>

        </div>
      </div>
    </div>
  );
}

export default App;
