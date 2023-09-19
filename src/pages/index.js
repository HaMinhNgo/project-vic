


import About from "./About";
import AdvisorsBackers from "./AdvisorsBackers";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import HelpCenter from "./HelpCenter";
import Home01 from "./Home01";
import Home02 from "./Home02";
import Home03 from "./Home03";
import Nfts from "./Nfts";
import ParticipantAssets from "./ParticipantAssets";
import Partners from "./Partners";
import RoadMap from "./RoadMap";
import Team from "./Team";
import VisionsMission from "./VisionsMission";





const routes = [
  { path: '/', component: <Home01 />},

  { path: '/hethong', component: <Nfts />},
  { path: '/tamnhin', component: <Blog />},
<<<<<<< HEAD
  { path: '/giatricotloi', component: <BlogDetails />},
=======
  { path: '/blog-details', component: <BlogDetails />},
>>>>>>> e38be99716fe65cd7f93a937577e0b795e31edcd
  { path: '/visions-mission', component: <VisionsMission />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/participants-assets', component: <ParticipantAssets />},
  { path: '/advisors-backers', component: <AdvisorsBackers />},
  { path: '/partners', component: <Partners />},
  { path: '/about', component: <About />},
  { path: '/road-map', component: <RoadMap />},
  { path: '/tintuc', component: <Team />},
  { path: '/contact', component: <Contact />},



]

export default routes;