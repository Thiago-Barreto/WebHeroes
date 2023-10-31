'use client';

/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import axios from "axios"
import { apiConfig } from './api/apiConfig'
import { Header } from "./components/Header"
import { SetStateAction, useEffect, useState } from "react"
import { Input } from "@/app/components/ui/input"
import { Sword, X } from "lucide-react";
import { ModalBattleHero } from "./components/ModalBattleHero";
import { Button, CircularProgress } from "@mui/material";

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

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedHeroes, setSelectedHeroes] = useState<hero[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(apiConfig.apiUrl)
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.error('Ocorreu um erro:', error)
      })
  }, [])

  const handleFilterChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setFilter(event.target.value)
  }

  const filteredData = (data as hero[]).filter(item => {
    const isMatch = item.name.toLowerCase().includes(filter.toLowerCase())
    return isMatch;
  })

  const handleSelectHero = (hero: hero) => {
    if (selectedHeroes.length === 2) {
      return;
    }
    setSelectedHeroes([...selectedHeroes, hero])
    if (selectedHeroes.length + 1 === 2) {
      setDisabled(false);
    }
  }

  const handleRemoveHero = (hero: hero) => {
    setSelectedHeroes(selectedHeroes.filter((selectedHero) => selectedHero !== hero));

    if (selectedHeroes.length - 1 !== 2) {
      setDisabled(true);
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const resetSelectedHeroes = () => {
    setSelectedHeroes([]);
    setDisabled(true)
  }

  return (  
    <div>
      <main
      className="flex items-center justify-center h-screen w-full flex-col p-3 bg-slate-400"
    >
      <Header
        disabled={disabled}
        onClickBattle={() => openModal()}
      />
      {loading ? (
          <div 
            className="text-4xl text-gray-500 flex flex-col items-center justify-center gap-2"
          >
            <CircularProgress/>
            Carregando...
          </div>
        ) : (
          <Card
            className="w-full h-[570px] mt-20 overflow-hidden"
          >
            <CardHeader
              className="flex items-center justify-around sm:flex-row"
            >
              <div>
                <CardTitle
                  className="text-lg"
                >Select to battle</CardTitle>
                <CardDescription>Choose 2 Heroes for battle</CardDescription>
              </div>
              <div>
                <Input
                  placeholder="Search name to hero"
                  value={filter}
                  onChange={handleFilterChange}
                />
              </div>
            </CardHeader>
            <CardContent
              className="overflow-y-scroll h-[470px] bg-slate-950 px-2 text-white"
            >
              <div
                className={`w-full h-full grid grid-cols-2 gap-4 pt-3 sm:grid-cols-3 lg:grid-cols-4`}
              >
                {filteredData.map(hero => (
                  <div 
                    className="flex flex-col items-center gap-1 border-2 border-slate-400 p-1 rounded"
                    key={hero.id}
                  >
                    <img 
                      className='h-36 w-28 rounded-md sm:h-60 sm:w-40'
                      src={hero.images.md} 
                      alt="Imagem de perfil do herói"
                    />
                    {hero.name}
                    <div
                      className="flex items-center justify-center gap-2"
                    ><Sword/> {hero.powerstats.power}</div>
                    {selectedHeroes.includes(hero) ? (
                      <Button
                        className="w-full bg-slate-900 text-white transition duration-300 ease-in-out hover:bg-slate-900 hover:scale-95"
                        onClick={() => handleRemoveHero(hero)}
                      >
                        <X/>
                      </Button>
                    ):(
                      <Button
                        className="w-full bg-slate-900 text-white transition duration-300 ease-in-out hover:bg-slate-900 hover:scale-95"
                        onClick={() => handleSelectHero(hero)}
                      >
                        Select
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      {isModalOpen && (
        <ModalBattleHero
          heroes={selectedHeroes}
          closeModal={() => {setIsModalOpen(false); resetSelectedHeroes() }}
        />
      )}
    </div>
  )
}
