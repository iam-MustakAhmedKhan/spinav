import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavigationBox from "./components/NavigationBox";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';



function App() {


  const param = useParams()
  console.log(param)

  return (

    <BrowserRouter>


      <div className="bg-[url(../public/assets/img/bg.svg)] bg-no-repeat bg-cover fixed w-full">
        <div className="container max-w-[640px] w-full h-screen ">
          <div className="w-full h-screen backdrop-blur-md">


            <Navbar />
            <Hero />
            <NavigationBox />

            <Routes>
              <Route path="/:roomName" element={<Navbar/>} />
            </Routes>

          </div>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
