export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white p-6">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">📞 კონტაქტი</h1>
        <p className="text-gray-600 mb-6 text-lg">
          მოგვწერეთ თქვენი შეკითხვები და ჩვენ მალე გიპასუხებთ!
        </p>

        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="📛 თქვენი სახელი"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          />
          <input
            type="email"
            placeholder="✉️ თქვენი ელ.ფოსტა"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          />
          <textarea
            placeholder="📝 შეტყობინება..."
            rows="4"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            📤 გაგზავნა
          </button>
        </form>
      </div>
    </div>
  );
}
