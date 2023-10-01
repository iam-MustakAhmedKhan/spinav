import { HashRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavigationBox from "./components/NavigationBox";
import Layout from "./components/Layout";


function App() {


  return (


    <HashRouter>

      <Layout>

        <div className="bg-[url(/assets/img/bg.svg)] bg-no-repeat bg-cover fixed w-full">
          <div className="container max-w-[640px] w-full h-screen ">
            <div className="w-full h-screen backdrop-blur-md">
              <Navbar />
              <Hero />
              <NavigationBox />


            </div>
          </div>
        </div>
      </Layout>

    </HashRouter>




  );
}

export default App;
