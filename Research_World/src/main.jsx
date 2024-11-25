import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './Components/Pages/MainPage.jsx'
import Search from './Components/Pages/Search.jsx'
import Cards from './Components/Flitering/Cards.jsx'
import SideBar from './Components/Flitering/SideBar.jsx'
import ParentComponent from './Components/Flitering/handler.jsx'

createRoot(document.getElementById('root')).render(
    // <MainPage/>
    // <Search/>/
    <>
    {/* <SideBar/>
    <Cards/> */}
    <ParentComponent></ParentComponent>
    </>
)
