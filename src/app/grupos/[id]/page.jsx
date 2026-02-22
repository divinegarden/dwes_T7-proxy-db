import BackButton from '@/components/back-button'
import { obtenerGrupo } from '@/lib/data'
import { Suspense, use } from 'react'


async function PaginaGrupo({ params }) {
    const { id } = await params

    const promesaGrupo = obtenerGrupo(id) // Promesa, no usamos AWAIT

    return (
        <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl">
            <BackButton>
                <h1 className="text-center text-4xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">Grupo</h1>
            </BackButton>

            <Suspense fallback={<p className='text-2xl font-[Delius_Swash_Caps] text-customHG'>Cargando...</p>}>
                <Grupo promesaGrupo={promesaGrupo} />
            </Suspense>

        </div>
    )
}

export default PaginaGrupo





function Grupo({ promesaGrupo }) {
    const grupo = use(promesaGrupo)

    return (
        <div className='p-4 md:p-8 flex flex-col items-center gap-1'>
            <p><span className='font-bold'>Grupo:</span> {grupo.nombre}</p>
            <p><span className='font-bold'>Tutor:</span> {grupo.tutor}</p>
            <p><span className='font-bold'>Aula:</span> {grupo.aula}</p>
        </div>
    )
}