import { device } from 'styles/devices'
import Google from 'components/Icons/Google'

export default function AppButton ({ children, onClick, disabled, type }) {
  const bgColor = {
    primary: {
      enabled: 'var(--black)',
      disabled: 'var(--gray)'
    },
    cancel: {
      enabled: 'var(--red)',
      disabled: 'var(--pink)'
    },
    google: {
      enabled: '#fff',
      disabled: 'var(--white)'
    }
  }

  const fontColor = {
    primary: {
      enabled: 'var(--white)',
      disabled: 'var(--white)'
    },
    cancel: {
      enabled: 'var(--white)',
      disabled: 'var(--white)'
    },
    google: {
      enabled: 'var(--black)',
      disabled: 'var(--gray)'
    }
  }

  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {type === 'google' && <Google width={20} height={20} />}
        {children}
      </button>
      <style jsx>{`
        button {
          font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          cursor: pointer;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          border: 1px solid transparent;
          width: 20em;
          background-color: ${disabled
            ? bgColor[type].disabled
            : bgColor[type].enabled};
          color: ${disabled
            ? fontColor[type].disabled
            : fontColor[type].enabled};
          border-radius: 6px;
          padding: 0.8em 0;
          margin-top: 2em;
          margin-bottom: 1em;
          box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          -webkit-box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          -moz-box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
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
