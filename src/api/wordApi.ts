import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchUsers = async () => {
  const usersCollectionRef = collection(db, 'words'); // 참조
  const userSnap = await getDocs(usersCollectionRef); // 데이터 스냅 받아오기 - 비동기처리
  const data = userSnap.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
};
