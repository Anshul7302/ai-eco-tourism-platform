"use client";

interface User {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  status: string;
}

interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-700 text-white">

          <tr>

            <th className="p-4 text-left">ID</th>

            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Email</th>

            <th className="p-4 text-left">Phone</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-b hover:bg-gray-100"
            >

              <td className="p-4">{user.id}</td>

              <td className="p-4">{user.full_name}</td>

              <td className="p-4">{user.email}</td>

              <td className="p-4">{user.phone}</td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm text-white ${
                    user.status === "Active"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {user.status}
                </span>

              </td>

              <td className="p-4 text-center space-x-2">

                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  View
                </button>

                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                  Edit
                </button>

                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}