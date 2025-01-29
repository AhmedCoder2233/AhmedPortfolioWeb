import About from "./About/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";
import Header from "./Header/Header";
import Hero from "./Hero/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";

export default function Home() {
  return (
   <div>
<Header/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
   </div>
  );
}
