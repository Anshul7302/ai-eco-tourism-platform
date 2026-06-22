"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui";

export default function ComponentDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        EcoStay AI - UI Components Demo
      </h1>

      {/* Button */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Button Component
        </h2>

        <Button onClick={() => alert("Button Clicked!")}>
          Explore Homestays
        </Button>
      </div>

      {/* Input */}
      <div className="mb-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          Input Component
        </h2>

        <Input
          label="Destination"
          placeholder="Enter destination"
        />
      </div>

      {/* Modal */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Modal Component
        </h2>

        <Button onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Booking Confirmation"
        >
          <p>
            Your homestay booking has been confirmed
            successfully.
          </p>
        </Modal>
      </div>

      {/* Toast */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Toast Component
        </h2>

        <Button
          onClick={() => {
            setShowToast(true);

            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          }}
        >
          Show Toast
        </Button>

        {showToast && (
          <Toast message="Booking Successful!" />
        )}
      </div>

      {/* Loader */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Loader Component
        </h2>

        <Loader />
      </div>
    </div>
  );
}