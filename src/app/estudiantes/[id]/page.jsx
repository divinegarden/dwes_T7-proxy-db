import BackButton from '@/components/back-button'
import { obtenerEstudiante } from '@/lib/data'
import { Suspense, use } from 'react'


async function PaginaEstudiante({ params }) {
    const { id } = await params

    const promesaEstudiante = obtenerEstudiante(id) // Promesa, no usamos AWAIT

    return (
        <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl">
            <BackButton>
                <h1 className="text-center text-4xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">Estudiante</h1>
            </BackButton>

            <Suspense fallback={<p className='text-2xl font-[Delius_Swash_Caps] text-customHG'>Cargando...</p>}>
                <Estudiante promesaEstudiante={promesaEstudiante} />
            </Suspense>

        </div>
    )
}

export default PaginaEstudiante





function Estudiante({ promesaEstudiante }) {
    const estudiante = use(promesaEstudiante)

    return (
        <div className='p-4 md:p-8 flex items-center justify-center gap-5'>
            <img
                src={estudiante.foto || '/images/icon.png'}
                alt="foto"
                className='size-48 rounded-lg'
            />
            <div>
                <p><span className='font-bold'>Nombre:</span> {estudiante.nombre}</p>
                <p><span className='font-bold'>Tutor Legal:</span> {estudiante.tutor_legal}</p>
                <p><span className='font-bold'>Fecha Nacimiento:</span> {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                <p><span className='font-bold'>Grupo:</span> {estudiante?.grupo?.nombre}</p>
                <p><span className='font-bold'>Asignaturas:</span> {estudiante?.asignaturas?.map(a => a.nombre).join(', ')}</p>
            </div>
        </div>
    )
}