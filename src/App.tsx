import React, {FC} from 'react' 
import { Navbar } from './components'
import { Home ,Services,Projets, Skills, About, Contact, Experiences} from './container'
// import AnimatedCursor from "react-animated-cursor"
const App:FC = ()=>  {

return ( 
<> 
<Navbar />
{/* <AnimatedCursor/> */}
<Home />
<Projets/>
<Experiences/>
<About/>
<Skills/>
{/* <Services/> */}
<Contact/>
</> 
)
} 
 export default App 