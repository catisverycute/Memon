import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

export async function getBook() {
  const q = query(
    collection(db, 'vocabularyBooks'),
    orderBy('createdAt', 'desc')
  );
  console.log(q, 'qqqq');
  const snap = await getDocs(q);
  console.log(snap, 'snapppp');
  return snap.docs.map((d) => console.log(d.data));
}
