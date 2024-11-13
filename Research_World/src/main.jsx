import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './Components/Pages/MainPage.jsx'
import Search from './Components/Pages/Search.jsx'

createRoot(document.getElementById('root')).render(
    // <MainPage/>
    <Search/>
)
