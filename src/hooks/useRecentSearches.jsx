import { db } from "../firebase/firebase";
import { useAuthForm } from "./useAuthForm";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  limit,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export const useRecentSearches = () => {
  const [recent, setRecent] = useState([]);
  const { userId } = useAuthForm();

  const addRecent = async (movie) => {
    if (!userId || !movie) return;

    const q = query(
      collection(db, "recentSearched"),
      where("userId", "==", userId),
      where("searchTerm", "==", movie.title),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      await addDoc(collection(db, "recentSearched"), {
        userId,
        searchTerm: movie.title,
        movie,
        createdAt: serverTimestamp(),
      });
    }
  };

  useEffect(() => {
    if (!userId) return;

    const fetchRecentSearches = async () => {
      const q = query(
        collection(db, "recentSearched"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc"),
        limit(5)
      );

      const querySnapshot = await getDocs(q);
      const last = querySnapshot.docs.map((doc) => doc.data());

      setRecent(last);
    };

    fetchRecentSearches();
  }, [userId]);

  return {
    recent,
    addRecent,
  };
};
