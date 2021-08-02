import Illustration from 'components/Illustration'
import Button from 'components/Button'
import styles from './styles'

export default function Home () {
  return (
    <>
      <main>
        <section>
          <h1>
            Foddy es donde tus comidas
            <br /> se organizan 🍓
          </h1>
          <p>
            Foody te ayuda a organizar, planificar y compartir tus
            <br />
            recetas favoritas con cualquier persona.
            <br /> Crea tu cuenta y empieza tu nuevo estilo de vida!
          </p>
          <div>
            <Button primary>PRU&Eacute;BALO GRATIS</Button>
            <Button>INICIAR SESI&Oacute;N</Button>
          </div>
        </section>
        <Illustration />
      </main>
      <style jsx>{styles}</style>
    </>
  )
}
