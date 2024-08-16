import { useState } from 'react'
import './App.css'
import '../public/assets/fonts/amutay/stylesheet.css';
import Capa from './templates/capa/Capa'
import QuemSomos from './templates/quemsomos/QuemSomos'
import PorQue from './templates/porque/PorQue'
import Solucoes from './templates/solucoes/Solucoes'
import Contatos from './templates/contatos/Contatos'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Capa />
            <QuemSomos />
            <PorQue />
            <Solucoes />
            {/* <Contatos /> */}
        </>
    )
}

export default App
