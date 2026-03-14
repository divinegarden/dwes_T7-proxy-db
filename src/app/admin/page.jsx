import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link";

// Iconos
import { Shield } from 'lucide-react';


async function page() {
  const sesion = await auth()

  if (sesion?.user.role !== 'ADMIN')
    redirect('/dashboard')

  return (
      <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl">
            <div className="flex gap-3 justify-center items-center text-center text-6xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">
                <Shield className="h-12 w-12"/>
                <h1> Admin Panel </h1>
            </div>

            <div className="flex items-center justify-center gap-5">
                <img className="rounded-full border-5 border-customPink h-1/5 w-1/5 p-5" src={sesion?.user.image || '/images/icon.png'}/>
                <div>
                    <p className="font-bold font-[Delius_Swash_Caps] text-customHG text-3xl"> {sesion?.user.name}</p>
                    <p> {sesion?.user.email} </p>
                    <p className="bg-customHG py-1 px-3 rounded-3xl w-fit"> {sesion?.user.role} </p>
                </div>
            </div>
            
            <div>
              <h1 className="text-center text-6xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">Lista de tablas</h1>
        
              <div className="flex gap-2 justify-center">
                <Link href="/estudiantes" className="bg-decoration border-3 border-customPink rounded-4xl px-3.5 py-1.5 hover:border-hoverPink hover:font-bold hover:text-hoverPink">
                  Estudiantes
                </Link>
                <Link href="/asignaturas" className="bg-decoration border-3 border-customPink rounded-4xl px-3.5 py-1.5 hover:border-hoverPink hover:font-bold hover:text-hoverPink">
                  Asignaturas
                </Link>
                <Link href="/grupos" className="bg-decoration border-3 border-customPink rounded-4xl px-3.5 py-1.5 hover:border-hoverPink hover:font-bold hover:text-hoverPink">
                  Grupos
                </Link>
              </div>

            </div>

            
        </div>
  )
}

export default page