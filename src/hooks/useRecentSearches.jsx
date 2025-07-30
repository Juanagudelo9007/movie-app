import { db } from "../firebase/firebase";
import { useAuthForm } from "./useAuthForm";
import {  useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  limit,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";



export const useRecentSearches = () => {
  const [recent, setRecent] = useState([]);
  const { userId } = useAuthForm();

  const addRecent = async (movie) => {
    if (!userId) return;
   console.log("Intentando guardar en Firestore:", movie);
    await addDoc(collection(db, "recentSearched"), {
      ...movie,
      userId,
      createdAt: serverTimestamp(),
    });
  };

  useEffect(() => {
    if (!userId) return;

    const fetchRecentMovies = async () => {
      const q = query(
        collection(db, "recentSearched"),
        orderBy("createdAt", "desc"),
        limit(6)
      );

      const querySnapshot = await getDocs(q);
      const last = querySnapshot.docs
        .map((doc) => doc.data())
        .filter((d) => d.userId === userId && d.createdAt);

      setRecent(last);
    };

    fetchRecentMovies();
  }, [userId]);

  return {
  recent, addRecent
  }
};


