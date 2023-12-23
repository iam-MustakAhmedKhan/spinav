import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Circles } from "react-loader-spinner";
import Notification from "./components/Notification.jsx";

const Content=lazy(()=>import('./components/Content.jsx'))

function App() {


  return (


    <BrowserRouter>

    
      <Suspense fallback={<Circles
        height="80"
        width="80"
        color="#0076BE"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
      />}>

        <Content />
        <Notification/>

      </Suspense>

    </BrowserRouter>




  );
}

export default App;
