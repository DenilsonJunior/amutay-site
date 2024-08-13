import React from 'react';
import { Cabecalho } from './styles.js'; // Importa o componente Cabecalho dos estilos

export const Header = () => {
    return (
        <Cabecalho>
            <img className="logo" src="./assets/img/logo.png" alt="Logo da empresa" />
        </Cabecalho>
    );
};

export default Header;
