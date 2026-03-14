'use client'
import { useActionState } from 'react'
import { login } from '@/lib/actions'



export function LoginForm({ className }) {
    const [state, action, pending] = useActionState(login, {})

    return (
        <form action={action} className={className}>
            <h1 className="text-center text-6xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink mb-4">Iniciar sesión</h1>
            <div className='flex flex-col gap-4'>
                <label>Email
                    <input type='email'
                        name='email'
                        defaultValue={state.fields?.email || ''}
                        placeholder="ejemplo@ejemplo.com"
                        className='peer block w-full py-2 px-4 hover:outline-customHG focus:outline-customHG rounded-md'
                        required
                    />
                    <p className="invisible peer-invalid:visible text-red-300">
                        Por favor, introduce un email válido.
                    </p>
                </label>
                <label>Password
                    <input type="password"
                        name='password'
                        defaultValue={state.fields?.password || ''}
                        placeholder="******"
                        className='block w-full py-2 px-4 hover:outline-customHG focus:outline-customHG rounded-md'
                    />
                </label>

                <div className='h-10' /> {/* Separación */}

                <button type="submit" disabled={pending} className="bg-decoration hover:font-bold border-4 text-center border-hoverHG rounded-4xl px-3 py-2 hover:text-hoverHG disabled:bg-customHG disabled:animate-pulse">
                    {pending ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>

                <p className={state?.error ? 'text-red-500' : 'hidden'}> {state.error} </p>
            </div>
        </form>
    )
}

export default LoginForm