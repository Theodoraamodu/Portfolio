
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ThankYou = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🎉 Message Sent!</h1>
      <p className="text-slate-300 text-lg mb-6">
        Thank you for reaching out. I’ll get back to you soon!
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-lg transition duration-300"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ThankYou;
