import AppButton from 'components/Buttons/AppButton'
import Cookbook from 'components/Cookbook'
import FourCharacters from 'components/Icons/FourCharacters'
import Logo from 'components/Icons/Logo'
import { useRouter } from 'next/router'

export default function App () {
  const router = useRouter()
  const handleClick = () => {
    router.push('/browse/add-cookbook')
  }

  return (
    <>
      <section>
        <div>
          <Logo />
        </div>
        <p>Crea un libro de cocina a selecciona uno :)</p>
        {/* TODO* We must fetch all the cookbooks here */}
        <div className="cookbooks"></div>
        <div>
          <AppButton onClick={handleClick} type="primary">
            NUEVO LIBRO DE COCINA
          </AppButton>
        </div>
      </section>
      <section className="second_page">
        <FourCharacters />
      </section>
      <style jsx>{`
        .cookbooks {
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        .second_page {
          align-items: center;
          background-color: var(--blue);
          display: flex;
          justify-content: center;
          margin: 0;
        }
        div {
          display: flex;
          justify-content: center;
        }
        section > :global(svg) {
          fill: red;
        }
        p {
          padding: 1em;
          font-size: 0.9em;
          font-weight: 600;
          color: var(--gray);
          margin: 0;
        }
        section {
          margin-top: 2em;
        }
      `}</style>
    </>
  )
}
