import ListaEstudiantes from '@/components/estudiantes/lista'
import { obtenerAsignaturasIdNombre, obtenerEstudiantes, obtenerGruposIdNombre } from '@/lib/data'
import { Suspense } from 'react'
import Link from 'next/link'




export default function PaginaEstudiantes() {

    const promesaEstudiantes = obtenerEstudiantes()  // Promesa, no usamos AWAIT
    const promesaGruposIdNombre = obtenerGruposIdNombre()
    const promesaAsignaturasIdNombre = obtenerAsignaturasIdNombre()


    return (
        <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl">
            

            <div className='flex justify-center items-center gap-4 pb-4'>
                <h1 className="text-center text-6xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">
                    <Link href="/">
                        Estudiantes
                    </Link>
                </h1>
            </div>

            <Suspense fallback={<p className='text-2xl font-[Delius_Swash_Caps] text-customHG'>Cargando...</p>}>
                <ListaEstudiantes
                    promesaEstudiantes={promesaEstudiantes}
                    promesaGruposIdNombre={promesaGruposIdNombre}
                    promesaAsignaturasIdNombre={promesaAsignaturasIdNombre}
                />
            </Suspense>
        </div>
    )
}




