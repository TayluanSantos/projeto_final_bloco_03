import React from 'react'

function Home() {
  return (
    <section className="bg-red-400 flex justify-center min-h-screen">
        <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
                <h2 className='text-5xl font-bold'>
                    Farmácia Bem-Estar Popular
                </h2>
                <p className='text-xl'>
                     Sua saúde em boas mãos, a preços que cabem no seu bolso.
                </p>
            </div>

            <div className="flex justify-center items-center ">
                <img
                    src="https://ik.imagekit.io/iixrkkdfp/Loja%20Games%20/flat-pharmacist-attending-customers-background.png?updatedAt=1725453707518/"
                    alt="Imagem Página Home"
                    className='w-[550px] h-[550px]'
                />
            </div>
        </div>
    </section>
  )
}

export default Home