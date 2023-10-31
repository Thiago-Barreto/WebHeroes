import React from 'react'
import { Button } from '@mui/material'

interface HeaderProps {
  disabled: boolean,
  onClickBattle: () => void
}

export function Header({ disabled, onClickBattle }: HeaderProps) {
  return (
    <header
      className='fixed top-0 left-0 w-full bg-slate-950 text-slate-50'
    >
      <nav
        className='flex items-center justify-around py-5'
      >
        <h1
          className='text-3xl'
        >WebHeroes</h1>
        
        <Button
          className='bg-slate-700 text-slate-50 transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-700'
          disabled={disabled}
          onClick={onClickBattle}
        >
          View Battle
        </Button>
      </nav>
    </header>
  )
}
