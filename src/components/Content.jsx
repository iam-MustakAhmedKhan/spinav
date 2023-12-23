import Layout from './Layout';
import Navbar from './Navbar';
import Hero from './Hero';
import NavigationBox from './NavigationBox';
import SidebarMenu from './SidebarMenu';



const Content = () => {

   
  return (
      <Layout>

          <div className="bg-[url(/assets/img/bg.svg)] bg-no-repeat bg-cover fixed w-full">
              <div className="container max-w-[640px] w-full h-screen ">
                  <div className="w-full h-screen backdrop-blur-md overflow-hidden">



                      <Navbar />
                      <Hero />
                      <NavigationBox />
                      <SidebarMenu />

                      

            

                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default Content