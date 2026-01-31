import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { listOfFavorites } from './utils/firebase';
import { addContent } from './favorite/favorite';

const SingIn = document.getElementById('sign-in');
const SignOut = document.getElementById('sign-out');
const User = document.getElementById('user');
User.innerHTML = localStorage.getItem('user');
const currentUrl = window.location.href.toString();

if (localStorage.getItem('user')) {
  SignOut.classList.remove('display-none');
  SingIn.classList.add('display-none');
  SingIn.style.display = 'none';
}
