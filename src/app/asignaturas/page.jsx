import ListaAsignaturas from '@/components/asignaturas/lista'
import { auth } from "@/auth"
import { obtenerAsignaturas } from '@/lib/data'
import { Suspense } from 'react'
import Link from 'next/link'



export default async function PaginaAsignaturas() {
    const promesaAsignaturas = obtenerAsignaturas()  // Promesa, no usamos AWAIT

    return (
        <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl">

            <div className='flex justify-center items-center gap-4 pb-4'>
                <h1 className="text-center text-6xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">
                    <Link href="/">
                        Asignaturas
                    </Link>
                </h1>
            </div>

            <Suspense fallback={<p className='text-2xl font-[Delius_Swash_Caps] text-customHG'>Cargando...</p>}>
                <ListaAsignaturas
                    promesaAsignaturas={promesaAsignaturas}
                    promesaSesion={auth()}
                />
            </Suspense>
        </div>
    )
}


