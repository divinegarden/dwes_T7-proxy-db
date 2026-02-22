import { loginGoogle, loginGithub, loginDiscord } from "@/lib/actions"

function OauthForm({ className, error }) {

  return (
    <form className={className}>
      <h1 className="text-center text-4xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink mb-4">Iniciar sesión OAuth</h1>

      <div className='flex flex-col gap-3'>
        <button formAction={loginGoogle}
          className="flex gap-3 items-center bg-decoration hover:font-bold border-4 text-center border-hoverHG rounded-4xl px-3 py-2 hover:text-hoverHG disabled:bg-customHG disabled:animate-pulse">
          <img src="/images/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub}
          className="flex gap-3 items-center bg-decoration hover:font-bold border-4 text-center border-hoverHG rounded-4xl px-3 py-2 hover:text-hoverHG disabled:bg-customHG disabled:animate-pulse">
          <img src="/images/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

        <button formAction={loginDiscord}
          className="flex gap-3 items-center bg-decoration hover:font-bold border-4 text-center border-hoverHG rounded-4xl px-3 py-2 hover:text-hoverHG disabled:bg-customHG disabled:animate-pulse">
          <img src="/images/discord.svg" alt="Discord" /> Iniciar sesión con Discord
        </button>
        {error}
      </div>
    </form>
  )
}

export default OauthForm
