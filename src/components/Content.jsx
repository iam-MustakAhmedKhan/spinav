import Layout from './Layout';
import Navbar from './Navbar';
import Hero from './Hero';
import NavigationBox from './NavigationBox';
import SidebarMenu from './SidebarMenu';
import Notification from './Notification';



const Content = () => {

   
  return (
      <Layout>

          <div className="bg-[url(/assets/img/bg.svg)] bg-no-repeat bg-cover h-screen fixed w-full">
              <div className="container max-w-[640px] w-full h-screen ">
                  <div className="w-full h-screen backdrop-blur-md overflow-hidden">



                      <Navbar />
                      <Hero />
                      <NavigationBox />
                      <SidebarMenu />

                      
                        <Notification/>
            

                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default Content