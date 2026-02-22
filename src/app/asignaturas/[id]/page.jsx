import BackButton from '@/components/back-button'
import { obtenerAsignatura } from '@/lib/data'
import { Suspense, use } from 'react'


async function PaginaAsignatura({ params }) {
    const { id } = await params

    const promesaAsignatura = obtenerAsignatura(id) // Promesa, no usamos AWAIT

    return (
        <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl">
            <BackButton>
                <h1 className="text-center text-4xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">Asignatura</h1>
            </BackButton>

            <Suspense fallback={<p className='text-2xl font-[Delius_Swash_Caps] text-customHG'>Cargando...</p>}>
                <Asignatura promesaAsignatura={promesaAsignatura} />
            </Suspense>

        </div>
    )
}

export default PaginaAsignatura





function Asignatura({ promesaAsignatura }) {
    const asignatura = use(promesaAsignatura)

    return (
        <div className='p-4 md:p-8 flex flex-col items-center gap-1'>
            <p><span className='font-bold'>Asignatura:</span> {asignatura.nombre}</p>
            <p><span className='font-bold'>Profesor:</span> {asignatura.profesor}</p>
            <p>{asignatura.horas_semana} horas a la semana</p>
        </div>
    )
}