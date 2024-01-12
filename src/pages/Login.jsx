import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function Login( {setIsAuth} ) {

  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })}

  return (
    <div>
      <p>Se connecter avec Google</p>
      <button onClick={signInWithGoogle}>Connection</button>
    </div>
  )
}