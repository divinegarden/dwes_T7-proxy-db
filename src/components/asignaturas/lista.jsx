'use client'
import Link from 'next/link'
import { use } from 'react'
import Modal from '@/components/modal'
import Form from '@/components/asignaturas/form'
import { eliminarAsignatura, insertarAsignatura, modificarAsignatura } from '@/lib/actions'
import { IconoInsertar, IconoModificar, IconoEliminar } from '@/components/icons'



export default function Lista({ promesaAsignaturas, promesaSesion }) {
    const asignaturas = use(promesaAsignaturas)
    const sesion = use(promesaSesion)
    const isAdminSession = sesion.user?.role


    const Insertar = () =>
        <Modal openElement={<IconoInsertar />}>
            <h2 className='text-2xl font-bold'>INSERTAR ASIGNATURA</h2>
            <Form
                action={insertarAsignatura}
                textSubmit="Insertar"
            />
        </Modal>


    const Editar = ({ asignatura }) =>
        <Modal openElement={<IconoModificar />}>
            <h2 className='text-2xl font-bold'>ACTUALIZAR ASIGNATURA</h2>
            <Form
                action={modificarAsignatura}
                asignatura={asignatura}
                textSubmit="Actualizar"
            />
        </Modal>


    const Eliminar = ({ asignatura }) =>
        <Modal openElement={<IconoEliminar />}>
            <h2 className='text-2xl font-bold'>ELIMINAR ASIGNATURA</h2>
            <Form
                action={eliminarAsignatura}
                asignatura={asignatura}
                textSubmit="Eliminar"
                disabled
            />
        </Modal>


    const Card = ({ asignatura, children }) =>
        <div className='p-4 rounded-lg bg-customPink'>
            <Link className='flex flex-col gap-1' href={`/asignaturas/${asignatura.id}`} >
                <p><span className='font-bold'>Asignatura:</span> {asignatura.nombre}</p>
                <p><span className='font-bold'>Profesor:</span> {asignatura.profesor}</p>
                <p>{asignatura.horas_semana} horas a la semana</p>
            </Link>
            <div className='flex gap-2 justify-end'>
                {children}
            </div>
        </div>




    return (
        <div className="flex flex-col gap-4">
            <div className='flex justify-end items-center gap-4 pb-4'>
                {isAdminSession === 'ADMIN' &&
                    <Insertar />
                }
            </div>

            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10'>
                {asignaturas.map((asignatura) =>
                    <Card key={asignatura.id} asignatura={asignatura}>
                        {isAdminSession === 'ADMIN' &&
                            <>
                                <Editar asignatura={asignatura} />
                                <Eliminar asignatura={asignatura} />
                            </>
                        }
                    </Card>
                )}
            </div>
        </div>
    )
}


