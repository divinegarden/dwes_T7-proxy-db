import RegisterForm from '@/components/auth/register-form'
import LoginForm from '@/components/auth/login-form'
import OauthForm from '@/components/auth/oauth-form'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import { ClipboardPlus, ClipboardPaste, AppWindow } from 'lucide-react'

// https://next-auth.js.org/configuration/pages#sign-in-page
const errors = new Map();
errors.set('OAuthSignin', "Error al construir una URL de autorización.");
errors.set('OAuthCallback', "Error al manejar la respuesta de un proveedor de OAuth.");
errors.set('OAuthCreateAccount', "No se pudo crear un usuario proveedor de OAuth en la base de datos.");
errors.set('EmailCreateAccount', "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos.");
errors.set('Callback', "Error en la ruta del controlador de devolución de llamada de OAuth.");
errors.set('OAuthAccountNotLinked', "Este email ya está registrado con otro proveedor.");
errors.set('EmailSignin', "Comprueba tu dirección de correo electrónico.");
errors.set('CredentialsSignin', "Fallo al iniciar sesion. Verifique que los datos que proporcionó sean correctos.");
errors.set('SessionRequired', "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.");
errors.set('Default', "No se puede iniciar sesión.");


async function PaginaLogin({ searchParams }) {
  const { error, callbackUrl } = await searchParams
  globalThis.callbackUrl = callbackUrl

  const sesion = await auth()

  if (sesion) redirect('/dashboard')

  return (
    <div className="relative mt-8 mx-auto flex flex-col gap-2 w-[375px]">
      {/* En Tailwind, la clase peer funciona sólo entre hermanos (siblings) */}
      {/* https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-peers */}

      <input
        id="signup"
        type="radio" name="sign"
        className="hidden peer/register"
      />
      <label
        htmlFor="signup"
        title="Registro"
        className='absolute right-0 text-hoverHG peer-checked/register:text-hoverPink'>
        <ClipboardPlus />
      </label>

      <input
        id="signin"
        title="Iniciar sesión"
        type="radio" name="sign"
        className="hidden peer/login"
        defaultChecked={true} />
      <label
        htmlFor="signin"
        title="Iniciar sesión"
        className='absolute right-10 text-hoverHG peer-checked/login:text-hoverPink'>
        <ClipboardPaste />
      </label>

      <input
        id="signoauth"
        title="Iniciar sesión con OAuth"
        type="radio" name="sign"
        className="hidden peer/oauth"
      />
      <label
        htmlFor="signoauth"
        title="Iniciar sesión con OAuth"
        className='absolute right-20 text-hoverHG peer-checked/oauth:text-hoverPink'>
        <AppWindow />
      </label>


      <RegisterForm className="hidden peer-checked/register:block w-full border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl mt-10 " />
      <LoginForm className="hidden peer-checked/login:block w-full border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl mt-10 " />
      <OauthForm className="hidden peer-checked/oauth:block w-full border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl mt-10 " />
      {error && <p className='text-red-400'>{errors.get(error)}</p>}
    </div>
  )
}

export default PaginaLogin