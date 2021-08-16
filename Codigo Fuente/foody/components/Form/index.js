import AuthButton from 'components/AuthButton'
import Logo from 'components/Icons/Logo'
import { loginWithGoogle } from 'firebase/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import styles from './styles'

export default function Form ({ handleSubmit, onChange, disabled, buttonText }) {
  const router = useRouter()
  const toPath = {
    'Iniciar Sesion': {
      link: '/register',
      text: 'Registrate'
    },
    Registrarse: {
      link: '/login',
      text: 'Inicia Sesion'
    }
  }
  const handleGoogle = (e) => {
    e.preventDefault()
    loginWithGoogle()
      .then((result) => {
        router.replace('/app')
        console.log(result)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <section>
        <form>
         <h1>{buttonText}</h1>
          <Logo />
          <p>Tu app de recetas digitales favorita</p>
          <label>Correo</label>
          <input onChange={onChange.email} type="email" />
          <label>Contraseña</label>
          <input onChange={onChange.password} type="password" />

          <AuthButton disabled={disabled} onClick={handleSubmit} type="primary">
           {buttonText}
          </AuthButton>
          <AuthButton disabled={disabled} onClick={handleGoogle} type="google">
            Continuar con Google
          </AuthButton>
          <div>
            <p>
              {buttonText === 'Iniciar Sesion' ? 'Aun no ' : 'Ya '}tienes una
              cuenta?{' '}
              <Link href={toPath[buttonText].link}>
                <a>{toPath[buttonText].text}</a>
              </Link>
            </p>
          </div>
          <ToastContainer />
        </form>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
