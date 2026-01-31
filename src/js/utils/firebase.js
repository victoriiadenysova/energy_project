import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';

export const updateFirestore = async card => {
  const user = auth.currentUser;
  if (user) {
    try {
      setDoc(doc(db, user.email, card._id), card);
    } catch (er) {
      console.log(er.message);
    }
  }
  if (!user) {
    return;
  }
};

export const deleteFavorites = async id => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      deleteDoc(doc(db, user, id));
    } catch (er) {
      console.log(er.message);
    }
  }
  if (!user) {
    return;
  }
};

export const listOfFavorites = async () => {
  const user = localStorage.getItem('user');

  const favorites = [];

  if (!user) return;

  const querySnapshot = await getDocs(collection(db, user));

  querySnapshot.forEach(doc => {

    favorites.push(doc.data());
  });

  localStorage.setItem('favorites', JSON.stringify(favorites));
};
