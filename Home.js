import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import Flashcard from "../components/Flashcard";

const Home = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      const querySnapshot = await getDocs(collection(db, "words"));
      const wordList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setWords(wordList);
    };
    fetchWords();
  }, []);

  const nextWord = () => {
    setShowDefinition(false);
    setCurrentIndex((prev) => (prev + 1) % words.length);
  };

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  const markWord = async (difficulty) => {
    const wordRef = doc(db, "words", words[currentIndex].id);
    await updateDoc(wordRef, { difficulty });
    nextWord();
  };

  if (words.length === 0) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Flashcard
        word={words[currentIndex]}
        showDefinition={showDefinition}
        onToggle={toggleDefinition}
        onMark={markWord}
        onNext={nextWord}
      />
    </div>
  );
};

export default Home;
