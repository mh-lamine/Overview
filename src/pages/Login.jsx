import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 text-center">
      <p>A venir: connexion avec authentification whitelist + parrainage</p>
      <span className="opacity-50 text-sm">en attendant...</span>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-300 p-3 rounded tracking-wide"
      >
        Se connecter avec Google
      </button>
    </div>
  );
}
