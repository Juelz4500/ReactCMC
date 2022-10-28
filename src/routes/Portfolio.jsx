import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext'

const Portfolio = () => {
  const [coins, setCoins] = useState([]);
  const [owned, setOwned] = useState('')
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setCoins(doc.data()?.portfolio);
    });
  }, [user?.email]);

  const coinPath = doc(db, 'users', `${user?.email}`);
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid);
      await updateDoc(coinPath, {
        portfolio: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <div>
      <table>
        <tr>
          <p>{coins.name}</p>
        </tr>
      </table>
    </div>
  )
}

export default Portfolio