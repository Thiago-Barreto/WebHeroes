import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import axios from "axios";
import { apiConfig } from './api/apiConfig'
import { Header } from "./components/Header";

interface Heroes {
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

const getHeroes = async () => {
  const response = await axios.get<Heroes[]>(apiConfig.apiUrl)
  return response.data
}
export default async function Home() {

  const heros = await getHeroes()

  return (
    <main
      className="flex items-center justify-center h-screen w-full flex-col p-3"
    >
      <Header
        disabled={true}
      />
      <Card
        className="w-full h-[570px] mt-20 overflow-hidden"
      >
        <CardHeader>
          <CardTitle>WebHeroes</CardTitle>
        <CardDescription>Escolha os Heróis para a batalha</CardDescription>
        </CardHeader>
        <CardContent
          className="overflow-y-scroll h-[465px] bg-slate-300 p-2"
        >
          <ul
            className={`w-full h- grid grid-cols-4 gap-4 items-center justify-center`}
          >
            {heros.map((index) => {
              return (
                <li 
                  key={index.id}
                >
                  <img 
                    className='h-60 w-40 rounded-md'
                    src={index.images.md} 
                    alt="Imagem de perfil do herói" />
                  {index.name}
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    </main>
  )
}
