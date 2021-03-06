import { onAuthStateChanged } from 'firebase/client'
import { useRouter } from 'next/router'
import { BROWSE_PAGES } from 'pages/_app'
import { useState, useEffect } from 'react'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser () {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    if (!BROWSE_PAGES[router.pathname]) {
      user !== USER_STATES.NOT_LOGGED && user && router.push('/browse')
    } else {
      user === USER_STATES.NOT_LOGGED && router.push('/register')
    }
  }, [user])

  return user
}
