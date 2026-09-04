"use client";

interface Booking {
  id: number;
  customer: string;
  homestay: string;
  checkIn: string;
  checkOut: string;
  amount: number;
  payment: string;
  status: string;
}

interface Props {
  bookings: Booking[];
}

export default function BookingTable({ bookings }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-700 text-white">

          <tr>

            <th className="p-4">ID</th>

            <th className="p-4 text-left">Customer</th>

            <th className="p-4 text-left">Homestay</th>

            <th className="p-4">Check In</th>

            <th className="p-4">Check Out</th>

            <th className="p-4">Amount</th>

            <th className="p-4">Payment</th>

            <th className="p-4">Status</th>

            <th className="p-4">Actions</th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr
              key={booking.id}
              className="border-b hover:bg-gray-100"
            >

              <td className="p-4">{booking.id}</td>

              <td className="p-4">{booking.customer}</td>

              <td className="p-4">{booking.homestay}</td>

              <td className="p-4">{booking.checkIn}</td>

              <td className="p-4">{booking.checkOut}</td>

              <td className="p-4">₹{booking.amount}</td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    booking.payment === "Paid"
                      ? "bg-green-600"
                      : "bg-yellow-500"
                  }`}
                >
                  {booking.payment}
                </span>

              </td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    booking.status === "Confirmed"
                      ? "bg-green-600"
                      : booking.status === "Pending"
                      ? "bg-orange-500"
                      : "bg-red-600"
                  }`}
                >
                  {booking.status}
                </span>

              </td>

              <td className="p-4 space-x-2">

                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  View
                </button>

                <button className="bg-green-600 text-white px-3 py-1 rounded">
                  Approve
                </button>

                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Cancel
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}