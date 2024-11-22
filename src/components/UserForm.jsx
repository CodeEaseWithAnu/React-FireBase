import { useState, useEffect } from "react";

const UserForm = ({ onSubmit, editingUser }) => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser);
        } else {
            setFormData({ name: "", email: "" });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", email: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="block w-full p-2 mb-2 border"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full p-2 mb-2 border"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4">
                {editingUser ? "Update" : "Add"} User
            </button>
        </form>
    );
};

export default UserForm;
