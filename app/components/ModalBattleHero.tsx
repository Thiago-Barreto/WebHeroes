/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react'
import { XCircle } from 'lucide-react';
import hero from '../page'
import { Card, CardDescription, CardTitle } from './ui/card';
import { Button } from '@mui/material';

interface hero {
  id: number,
  name: string,
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number,
  },
  images: {
    xs: string,
    sm: string,
    md: string,
    lq: string,
  }
}

interface HerosSelected {
  heroes: hero[],
  closeModal: () => void
}

export function ModalBattleHero({closeModal, heroes}: HerosSelected): React.JSX.Element {

  const [hero1, hero2] = heroes;

let scoreHero1 = 0;
let scoreHero2 = 0;

if (hero1.powerstats.intelligence > hero2.powerstats.intelligence) {
  scoreHero1++;
} else if (hero2.powerstats.intelligence > hero1.powerstats.intelligence) {
  scoreHero2++;
}

if (hero1.powerstats.strength > hero2.powerstats.strength) {
  scoreHero1++;
} else if (hero2.powerstats.strength > hero1.powerstats.strength) {
  scoreHero2++;
}

if (hero1.powerstats.speed > hero2.powerstats.speed) {
  scoreHero1++;
} else if (hero2.powerstats.speed > hero1.powerstats.speed) {
  scoreHero2++;
}

if (hero1.powerstats.durability > hero2.powerstats.durability) {
  scoreHero1++;
} else if (hero2.powerstats.durability > hero1.powerstats.durability) {
  scoreHero2++;
}

if (hero1.powerstats.power > hero2.powerstats.power) {
  scoreHero1++;
} else if (hero2.powerstats.power > hero1.powerstats.power) {
  scoreHero2++;
}

if (hero1.powerstats.combat > hero2.powerstats.combat) {
  scoreHero1++;
} else if (hero2.powerstats.combat > hero1.powerstats.combat) {
  scoreHero2++;
}

let winner;

if (scoreHero1 > scoreHero2) {
  winner = hero1;
} else if (scoreHero2 > scoreHero1) {
  winner = hero2;
} else {
  winner = 'Empate';
}

  return (
    <div 
      className="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-40 flex items-center justify-center px-2"
    >
      <Card 
        className="flex items-center justify-center flex-col gap-5 relative px-10 py-5"
      >
        <div
          className='text-center'
        >
        <CardTitle>Hero Stats</CardTitle>
        <CardDescription>Battle</CardDescription>
        </div>
        <div 
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <div>
            <div
              className='flex flex-col items-center justify-center'
            >
              <img
                className="h-28 sm:h-60"
                src={hero1.images.sm}
                alt="Imagem de perfil do herói"
              />
              <h3 
                className="text-sm font-semibold text-center sm:text-lg"
              >
                <span
                  className={winner === 'Empate' ? 'text-yellow-500' : (winner === hero1 ? 'text-green-500' : 'text-red-500')}
                >
                   {winner === 'Empate' ? 'Empate ' : (winner === hero1 ? 'Winner ' : 'Loser ')}
                </span>
                  {hero1.name}
              </h3>
            </div>
          </div>
          <div 
            className='flex flex-col items-center justify-center gap-1'
            >
              <div 
                className='flex items-center justify-between text-base w-48'>
                <p 
                  className={`${
                    hero1.powerstats.intelligence > hero2.powerstats.intelligence
                      ? 'text-green-500'
                      : hero1.powerstats.intelligence < hero2.powerstats.intelligence
                      ? 'text-red-500'
                      : 'text-yellow-500'
                  }`}
                >
                {hero1.powerstats.intelligence}
              </p>
              <span>Inteligência</span>
              <p 
                className={`${
                  hero2.powerstats.intelligence > hero1.powerstats.intelligence
                    ? 'text-green-500'
                    : hero2.powerstats.intelligence < hero1.powerstats.intelligence
                    ? 'text-red-500'
                    : 'text-yellow-500'
                }`}
              >
              {hero2.powerstats.intelligence}
              </p>
            </div>

                <div 
                    className='flex items-center justify-between w-48'
                >
                    <p 
                      className={`${
                        hero1.powerstats.strength > hero2.powerstats.strength
                        ? 'text-green-500'
                        : hero1.powerstats.strength < hero2.powerstats.strength
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero1.powerstats.strength}</p>
                    <span>Força</span>
                    <p 
                      className={`${
                        hero2.powerstats.strength > hero1.powerstats.strength
                        ? 'text-green-500'
                        : hero2.powerstats.strength < hero1.powerstats.strength
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero2.powerstats.strength}</p>
                </div>
                <div 
                    className='flex items-center justify-between w-48'
                >
                    <p 
                      className={`${
                        hero1.powerstats.speed > hero2.powerstats.speed
                        ? 'text-green-500'
                        : hero1.powerstats.speed < hero2.powerstats.speed
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero1.powerstats.speed}</p>
                    <span>Velocidade</span>
                    <p 
                      className={`${
                        hero2.powerstats.speed > hero1.powerstats.speed
                        ? 'text-green-500'
                        : hero2.powerstats.speed < hero1.powerstats.speed
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero2.powerstats.speed}</p>
                </div>
                <div 
                    className='flex items-center justify-between w-48'
                >
                    <p 
                      className={`${
                        hero1.powerstats.durability > hero2.powerstats.durability
                          ? 'text-green-500'
                          : hero1.powerstats.durability < hero2.powerstats.durability
                          ? 'text-red-500'
                          : 'text-yellow-500'
                      }`}
                    >{hero1.powerstats.durability}</p>
                    <span>Durabilidade</span>
                    <p 
                      className={`${
                        hero2.powerstats.durability > hero1.powerstats.durability
                          ? 'text-green-500'
                          : hero2.powerstats.durability < hero1.powerstats.durability
                          ? 'text-red-500'
                          : 'text-yellow-500'
                      }`}
                    >{hero2.powerstats.durability}</p>
                </div>
                <div 
                    className='flex items-center justify-between w-48'
                >
                    <p 
                      className={`${
                        hero1.powerstats.power > hero2.powerstats.power
                        ? 'text-green-500'
                        : hero1.powerstats.power < hero2.powerstats.power
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero1.powerstats.power}</p>
                    <span>Poder</span>
                    <p 
                      className={`${
                        hero2.powerstats.power > hero1.powerstats.power
                        ? 'text-green-500'
                        : hero2.powerstats.power < hero1.powerstats.power
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero2.powerstats.power}</p>
                </div>
                <div 
                    className='flex items-center justify-between w-48'
                >
                    <p 
                      className={`${
                        hero1.powerstats.combat > hero2.powerstats.combat
                        ? 'text-green-500'
                        : hero1.powerstats.combat < hero2.powerstats.combat
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero1.powerstats.combat}</p>
                    <span>Combate</span>
                    <p 
                      className={`${
                        hero2.powerstats.combat > hero1.powerstats.combat
                        ? 'text-green-500'
                        : hero2.powerstats.combat < hero1.powerstats.combat
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                    >{hero2.powerstats.combat}</p>
                </div>
          </div>
          <div>
            <div 
              className='flex flex-col items-center justify-center'
            >
              <img
                className="h-28 sm:h-60"
                src={hero2.images.sm}
                alt="Imagem de perfil do herói"
              />
              <h3 
                className="font-semibold text-sm sm:text-lg"
              >
                <span 
                  className={winner === 'Empate' ? 'text-yellow-500' : (winner === hero2 ? 'text-green-500' : 'text-red-500')}
                >
                   {winner === 'Empate' ? 'Empate ' : (winner === hero2 ? 'Winner ' : 'Loser ')}
                </span>
                {hero2.name}
              </h3>
            </div>
          </div>
        </div>
        <Button className="absolute top-2 right-2" onClick={closeModal}>
          <XCircle className="w-6 h-6 text-red-500" />
        </Button>
      </Card>
    </div>
    )
}
