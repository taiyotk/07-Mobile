import { useState } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../services/credenciaisFirebase';

const useFirebase = () => {
  const [loading, setLoading] = useState(false);

  const addUser = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'User'), data);
    } finally {
      setLoading(false);
    }
  };

  const addCliente = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'clientes'), data);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, 'User'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const fetchClientes = async () => {
    const snapshot = await getDocs(collection(db, 'clientes'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const getUserById = async (id) => {
    const document = await getDoc(doc(db, 'User', id));
    return document.data();
  };

  return { addUser, addCliente, fetchUsers, getUserById, loading, fetchClientes };
};

export default useFirebase;
