import { auth } from '@/firebase/config'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
function googleLogin() {
    try{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    }catch(e){
        console.log(e)
    }
}

export default googleLogin