import React, { useState, useEffect } from 'react';

function EnderecoComponent() {
    const [endereco, setEndereco] = useState(null);

    useEffect(() => {
        fetch('https://viacep.com.br/ws/50740270/json/')
            .then(response => response.json())
            .then(data => {
                setEndereco(`${data.logradouro} - ${data.localidade}, ${data.uf}`);
            });
    }, []); // O array vazio como segundo argumento significa que o useEffect 
            //será executado apenas uma vez, similar ao "DOMContentLoaded"

    return (
        <div>
            {endereco ? endereco : 'Carregando...'}
        </div>
    );
}

export default EnderecoComponent;
