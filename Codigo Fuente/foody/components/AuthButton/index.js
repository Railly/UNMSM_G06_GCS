import { device } from 'styles/devices'

export default function Button ({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>
        <a>{children}</a>
      </button>
      <style jsx>{`
        button {
          border: 1px solid transparent;
          width: 20em;
          background-color: var(--black);
          color: var(--white);
          border-radius: 6px;
          padding: 0.8em 0;
          margin-top: 4em;
        }
        button:hover,
        button:focus {
          transform: scale(1.03);
          transition: 0.3s;
        }
        button:focus {
          outline: 1px solid #fff;
        }
        button:active {
          transform: scale(0.99);
        }
        @media ${device.mobileL} {
          button {
            width: 15em;
            margin-top: 2em;
          }
        }
      `}</style>
    </>
  )
}