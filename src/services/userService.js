import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const usersCollection = collection(db, 'users');

// Add a new user
export const addUser = async (user) => {
    return await addDoc(usersCollection, user);
};

// Get all users
export const getUsers = async () => {
    const snapshot = await getDocs(usersCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Update a user
export const updateUser = async (id, updatedData) => {
    const userDoc = doc(db, 'users', id);
    return await updateDoc(userDoc, updatedData);
};

// Delete a user
export const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    return await deleteDoc(userDoc);
};
