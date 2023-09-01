import React, {FC} from 'react' 
import { Navbar } from './components'
import { Home ,Projects, Skills, About, Contact, Experiences} from './container'
// import AnimatedCursor from "react-animated-cursor"
const App:FC = ()=>  {

return ( 
<> 
<Navbar />
<Home />
<Projects/>
<Experiences/>
<About/>
<Skills/>
<Contact/>
</> 
)
} 
 export default App 