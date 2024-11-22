import { useState, useEffect } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../services/userService";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    const handleAddOrUpdate = async (user) => {
        if (editingUser) {
            await updateUser(editingUser.id, user);
        } else {
            await addUser(user);
        }
        fetchUsers();
        setEditingUser(null);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        fetchUsers();
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
            <UserForm onSubmit={handleAddOrUpdate} editingUser={editingUser} />
            <UserList users={users} onDelete={handleDelete} onEdit={setEditingUser} />
        </div>
    );
};

export default ManageUser;
