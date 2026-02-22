import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 rounded-4xl">
      <h1 className="text-center text-6xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">Home</h1>

      <main className="flex align-middle flex-col gap-10">

        <section>
          <h2 className="text-center text-2xl font-bold text-hoverHG">Zona de Usuario</h2>
          <div className="flex gap-2 justify-center">
            <Link href="/admin" className="bg-decoration border-3 border-customPink rounded-4xl px-3.5 py-1.5 hover:border-hoverPink hover:font-bold hover:text-hoverPink">
              Panel de admin
            </Link>
            <Link href="/dashboard" className="bg-decoration border-3 border-customPink rounded-4xl px-3.5 py-1.5 hover:border-hoverPink hover:font-bold hover:text-hoverPink">
              Dashboard del usuario
            </Link>
            <Link href="/about" className="bg-decoration border-3 border-customPink rounded-4xl px-3.5 py-1.5 hover:border-hoverPink hover:font-bold hover:text-hoverPink">
              About
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-center text-2xl font-bold text-hoverHG">Base de datos: Escuela</h2>
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
        </section>
      </main>
    </div>
  )
}

