'use client'

import React, { useState } from 'react';

const CalculadoraCombustivelEspacial: React.FC = () => {
  const [distancia, setDistancia] = useState<number>(120);
  const [velocidade, setVelocidade] = useState<number>(8);
  const [eficiencia, setEficiencia] = useState<number>(0.5);
  const [combustivel, setCombustivel] = useState<number | null>(null);

  const calcularCombustivel = () => {
    const resultado = distancia * (1 + (velocidade / 10)) * eficiencia;
    setCombustivel(resultado);

    console.log(`Para uma viagem de ${distancia} parsecs à velocidade ${velocidade} mega-luz com eficiência ${eficiencia}:`);
    console.log(`Será necessário ${resultado.toFixed(1)} unidades de combustível.`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className='text-2xl my-3 text-center'>Calculadora de Combustível para Viagem Espacial</h2>

      <div className='flex flex-col md:flex-row w-full items-center md:justify-around my-3 space-y-5 md:space-y-0'> 
        <div className="flex flex-col items-center w-full max-w-[300px] border rounded-lg py-8 space-y-5 bg-[#f0f0f0] transition-all duration-300 ease-in-out
          hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
          <label htmlFor="distancia">Distância (parsecs)</label>
          <input
            className='text-center border rounded-lg'
            id="distancia"
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(Number(e.target.value))}
            min="0"
            step="1"
          />
        </div>
        
        <div className="flex flex-col items-center w-full max-w-[300px] border rounded-lg py-8 space-y-5 bg-[#f0f0f0] transition-all duration-300 ease-in-out
          hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
          <label htmlFor="velocidade">Velocidade (mega-luz)</label>
          <p className='text-center'>8</p>
        </div>
        
        <div className="flex flex-col items-center w-full max-w-[300px] border rounded-lg py-8 space-y-5 bg-[#f0f0f0] transition-all duration-300 ease-in-out
          hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
          <label htmlFor="eficiencia">Eficiência (consumo por parsec)</label>
          <input
            className='text-center border rounded-lg'
            id="eficiencia"
            type="number"
            value={eficiencia}
            onChange={(e) => setEficiencia(Number(e.target.value))}
            min="0.1"
            max="1"
            step="0.01"
          />
        </div>
      </div>  
      
      <button className='border rounded-lg p-2 bg-[#f0f0f0] hover:bg-[#a0a0a0] cursor-pointer' onClick={calcularCombustivel}>Calcular Combustível</button>
      
      {combustivel !== null && (
        <div className="resultado flex flex-col items-center mt-5 text-center">
          <h3>Resultado:</h3>
          <p>Para uma viagem de {distancia} parsecs à velocidade {velocidade} mega-luz com eficiência {eficiencia}:</p>
          <p>Será necessário <strong>{combustivel.toFixed(1)}</strong> unidades de combustível.</p>
        </div>
      )}
    </div>
  );
};

export default CalculadoraCombustivelEspacial;