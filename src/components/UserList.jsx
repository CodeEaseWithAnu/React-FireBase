const UserList = ({ users, onDelete, onEdit }) => (
    <table className="w-full border-collapse border">
        <thead>
            <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td className="border p-2">{user.name}</td>
                    <td className="border p-2">{user.email}</td>
                    <td className="border p-2">
                        <button
                            onClick={() => onEdit(user)}
                            className="bg-green-500 text-white py-1 px-2 mr-2"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(user.id)}
                            className="bg-red-500 text-white py-1 px-2"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default UserList;
