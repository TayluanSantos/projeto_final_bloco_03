import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
    let data = new Date().getFullYear()
  return (
    <footer className='flex justify-center bg-red-500 text-white'>
        <div className='flex flex-col gap-y-1 items-center py-4 container'>
            <p className='font-bold text-lg'>
                Farmácia Bem-Estar Popular | Copyright: {data}
            </p>
            <p className='text-base'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
                <a href="https://www.linkedin.com/in/tayluan-de-jesus-dos-santos/" target="_blank">
                    <LinkedinLogo size={32} weight='bold' />
                </a>
                <a href="https://github.com/TayluanSantos" target="_blank">
                    <GithubLogo size={32} weight='bold' />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer