import { useState } from "react";
import Image from "next/image";

const items = [
  "AI Smart Watch",
  "VR Headset",
  "AirPods",
  "Mystery Tech",
  "Lucky Surprise",
];

export default function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [degree, setDegree] = useState(0);
  const [selected, setSelected] = useState(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomDegree = 360 * 5 + randomIndex * (360 / items.length);
    setDegree(randomDegree);

    setTimeout(() => {
      setSelected(items[randomIndex]);
      setSpinning(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">🎰 Spin the Wheel</h1>
      <div className="relative flex items-center justify-center">
        <Image
          src="/wheel.png"
          alt="Spin Wheel"
          width={300}
          height={300}
          className="transition-transform duration-[5000ms] ease-out"
          style={{ transform: `rotate(${degree}deg)`, transition: "transform 5s ease-out" }}
        />
        <Image
          src="/arrow.png"
          alt="Arrow"
          width={50}
          height={50}
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2"
        />
      </div>
      <button
        onClick={spin}
        className={`mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg ${
          spinning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Spin Now! 🎁"}
      </button>
      {selected && (
        <p className="mt-6 text-2xl font-bold">🎉 You got: {selected} 🎉</p>
      )}
    </div>
  );
}
