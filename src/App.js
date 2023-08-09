import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Institution from './components/institutions/Institution';
import Contact from './components/contact/Contact';
import About from './components/aboutus/About';
import Ielts from './components/ielts/Ielts';
import Reading from './ieltsdetail/reading/Reading.js';
import Listening from "./ieltsdetail/listening/Listening.js";
import Speaking from "./ieltsdetail/speaking/Speaking.js";
import Writing from "./ieltsdetail/writing/Writing.js";
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Protectedroute from './components/protected/Protectedroute';
import Dashboard from "./components/dashboard/Dashboard";
import Dashreading from './components/dashboardIelts/Reading/Dashreading';
import Dashlistening from './components/dashboardIelts/Listening/Dashlistening';
import Dashspeaking from './components/dashboardIelts/Speaking/Dashspeaking';
import Dashwriting from './components/dashboardIelts/Writing/Dashwriting';
import Resetpassword from "./components/resetpassword/Resetpassword";
import Reading1 from './components/dashboardIelts/Reading/Readingmodules/Reading1';
import Listening1 from './components/dashboardIelts/Listening/Listening1';
import Writing1 from './components/dashboardIelts/Writing/Writing1';
import NewDashboard from './components/dashboard/NewDashboard';






function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<><Navbar /> <Banner /> <Footer/></>} />
            <Route path="/institution" element={<> <Navbar /> <Institution /> </>} />
            {/* <Route path="/contact" element={<><Navbar /><Contact /></>} /> */}
            
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/ielts" element={<><Navbar /><Ielts /></>} />
            <Route path="/reading" element={<><Navbar /> <Reading/> </>} />
            <Route path="/listening" element={<><Navbar /> <Listening /> </>} />
            <Route path="/speaking" element={<><Navbar /> <Speaking /> </>} />
            <Route path="/writing" element={<><Navbar /> <Writing /> </>} />
            <Route path="/signup" element={<> <Navbar/> <Signup/> </>} />
            <Route path="/signin" element={<> <Navbar/> <Signin/> </>} /> 
            <Route path="/forgotpassword" element={<> <Navbar/> <Resetpassword/> </>} />
            {/* <Route path="/dashboard" element={<Protectedroute Component={Dashboard} />} /> */}
            <Route path="/contactus" element={<><Navbar/><Contact /></>} />
            <Route path="/contact" element={<Protectedroute Component={Contact} />} />
            <Route path="/dashboard" element={<Protectedroute Component={Dashspeaking} />} />
            <Route path="/dashreading" element={<Protectedroute Component={Dashreading} />} />
            <Route path="/dashlistening" element={<Protectedroute Component={Dashlistening} />} />
            <Route path="/dashspeaking" element={<Protectedroute Component={Dashspeaking} />} />
            <Route path="/dashwriting" element={<Protectedroute Component={Dashwriting} />} />
            <Route path="/dashreading/:id" element={<Protectedroute Component={Reading1} />} />
            <Route path="/dashlistening/:id" element={<Protectedroute Component={Listening1} />} />
            <Route path="/dashwriting/:id" element={<Protectedroute Component={Writing1} />} />

          </Routes>
        
        
    </Router>
  );
}

export default App;
