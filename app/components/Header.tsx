import React from 'react'
import { Button } from './ui/button'

interface HeaderProps {
  disabled: boolean
}

export function Header({ disabled }: HeaderProps) {
  return (
    <header
      className='fixed top-0 left-0 w-full bg-slate-950 text-slate-50'
    >
      <nav
        className='flex items-center justify-around py-5'
      >
        <h1>WebHeroes</h1>
        <Button
          className='bg-slate-700 hover:bg-slate-800'
          disabled={disabled}
        >View Battle</Button>
      </nav>
    </header>
  )
}
