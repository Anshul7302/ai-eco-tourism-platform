"use client";

import { useState } from "react";
import {
  Bell,
  CalendarCheck,
  Heart,
  Sparkles,
  Tag,
  CheckCheck,
  Trash2,
  Settings,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "booking",
    title: "Booking Confirmed",
    message:
      "Your booking at Green Valley Eco Resort has been successfully confirmed.",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "wishlist",
    title: "Wishlist Update",
    message:
      "Mountain View Cottage is still available for your selected travel dates.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "ai",
    title: "New AI Recommendation",
    message:
      "EcoStay AI found new sustainable homestays based on your travel preferences.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 4,
    type: "offer",
    title: "Special Eco Travel Offer",
    message:
      "Get special discounts on selected eco-friendly stays this weekend.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    type: "booking",
    title: "Upcoming Trip Reminder",
    message:
      "Your upcoming eco-tour is approaching. Check your booking details and itinerary.",
    time: "2 days ago",
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const displayedNotifications =
    filter === "unread"
      ? notifications.filter((notification) => !notification.read)
      : notifications;

  function markAllAsRead() {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  }

  function markAsRead(id: number) {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  }

  function deleteNotification(id: number) {
    setNotifications(
      notifications.filter(
        (notification) => notification.id !== id
      )
    );
  }

  function clearAll() {
    setNotifications([]);
  }

  function getIcon(type: string) {
    switch (type) {
      case "booking":
        return (
          <div className="bg-green-100 text-green-700 p-3 rounded-xl">
            <CalendarCheck size={24} />
          </div>
        );

      case "wishlist":
        return (
          <div className="bg-red-100 text-red-600 p-3 rounded-xl">
            <Heart size={24} />
          </div>
        );

      case "ai":
        return (
          <div className="bg-purple-100 text-purple-700 p-3 rounded-xl">
            <Sparkles size={24} />
          </div>
        );

      case "offer":
        return (
          <div className="bg-yellow-100 text-yellow-700 p-3 rounded-xl">
            <Tag size={24} />
          </div>
        );

      default:
        return (
          <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
            <Bell size={24} />
          </div>
        );
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-14">

          {/* Header */}

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-700">
                Notifications
              </h1>

              <p className="text-gray-600 mt-3">
                Stay updated with your bookings, wishlist and
                personalized EcoStay AI recommendations.
              </p>
            </div>

            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              <CheckCheck size={20} />

              Mark All as Read
            </button>

          </div>

          {/* Statistics */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-500">
                    Total Notifications
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    {notifications.length}
                  </h2>
                </div>

                <div className="bg-green-100 text-green-700 p-4 rounded-2xl">
                  <Bell size={28} />
                </div>

              </div>

            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-500">
                    Unread
                  </p>

                  <h2 className="text-4xl font-bold text-red-500 mt-2">
                    {unreadCount}
                  </h2>
                </div>

                <div className="bg-red-100 text-red-600 p-4 rounded-2xl">
                  <Bell size={28} />
                </div>

              </div>

            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-500">
                    Account
                  </p>

                  <h2 className="text-xl font-bold mt-2">
                    Notifications Active
                  </h2>
                </div>

                <div className="bg-blue-100 text-blue-700 p-4 rounded-2xl">
                  <Settings size={28} />
                </div>

              </div>

            </div>

          </div>

          {/* Notification Container */}

          <div className="bg-white border rounded-3xl shadow-sm overflow-hidden">

            {/* Filter Header */}

            <div className="p-6 border-b flex flex-col sm:flex-row justify-between gap-5">

              <div className="flex gap-3">

                <button
                  onClick={() => setFilter("all")}
                  className={`px-5 py-2 rounded-xl font-semibold ${
                    filter === "all"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  All ({notifications.length})
                </button>

                <button
                  onClick={() => setFilter("unread")}
                  className={`px-5 py-2 rounded-xl font-semibold ${
                    filter === "unread"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Unread ({unreadCount})
                </button>

              </div>

              {notifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold"
                >
                  <Trash2 size={18} />

                  Clear All
                </button>
              )}

            </div>

            {/* Notification List */}

            {displayedNotifications.length === 0 ? (

              <div className="py-20 text-center">

                <div className="w-20 h-20 mx-auto bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <Bell size={35} />
                </div>

                <h2 className="text-2xl font-bold mt-5">
                  No Notifications
                </h2>

                <p className="text-gray-500 mt-2">
                  You&apos;re all caught up! New updates will appear here.
                </p>

              </div>

            ) : (

              <div>

                {displayedNotifications.map((notification) => (

                  <div
                    key={notification.id}
                    onClick={() =>
                      markAsRead(notification.id)
                    }
                    className={`flex flex-col md:flex-row md:items-center gap-5 p-6 border-b last:border-b-0 cursor-pointer transition hover:bg-gray-50 ${
                      !notification.read
                        ? "bg-green-50/50"
                        : "bg-white"
                    }`}
                  >

                    {/* Icon */}

                    {getIcon(notification.type)}

                    {/* Content */}

                    <div className="flex-1">

                      <div className="flex items-center gap-3">

                        <h3 className="text-lg font-bold">
                          {notification.title}
                        </h3>

                        {!notification.read && (
                          <span className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                        )}

                      </div>

                      <p className="text-gray-600 mt-1">
                        {notification.message}
                      </p>

                      <p className="text-sm text-gray-400 mt-2">
                        {notification.time}
                      </p>

                    </div>

                    {/* Actions */}

                    <div className="flex items-center gap-3">

                      {!notification.read && (

                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            markAsRead(notification.id);
                          }}
                          className="text-sm font-semibold text-green-700 hover:bg-green-100 px-4 py-2 rounded-lg"
                        >
                          Mark as Read
                        </button>

                      )}

                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          deleteNotification(notification.id);
                        }}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 size={19} />
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}