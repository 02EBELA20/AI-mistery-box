import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md w-full py-4 px-6 flex justify-between items-center">
      {/* ლოგო */}
      <Link href="/">
        <div className="text-2xl font-bold text-blue-600 flex items-center cursor-pointer">
          <span className="ml-2">🤖 AI გაძლევს შანსს მოიგო მეტი, ვიდრე გადაიხადე!</span>
        </div>
      </Link>

      <nav className="space-x-6 text-gray-600">
  <Link href="/prizes" className="hover:text-blue-500">
    🏆 პრიზები
  </Link>
  <Link href="/reviews" className="hover:text-blue-500">
    💬 კომენტარები
  </Link>
  <Link href="/contact" className="hover:text-blue-500">
    📞 კონტაქტი
  </Link>
</nav>


      <div className=" flex items-center space-x-4 p-4 rounded-lg ">
  {/* ელ.ფოსტა */}
  <div className="flex flex-col ">
    <input 
      type="email "
      placeholder="ელ.ფოსტა"
      className=" mt-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
    />
    <Link href="/forgot-password" className="text-gray-500 hover:text-blue-500 text-xs mt-1 text-left">
      დაგავიწყდა პაროლი?
    </Link>
  </div>

  {/* პაროლი */}
  <div className=" mt-6 flex flex-col">
    <input
      type="password"
      placeholder="პაროლი"
      className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
    />
    <Link href="/register" className="text-blue-500 font-bold hover:underline text-xs mt-1 text-left">
      რეგისტრაცია
    </Link>
  </div>

  {/* შესვლის ღილაკი (ახლა მაღლა) */}
  <div className="self-center mt-[-20px]">
    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
      შესვლა
    </button>
  </div>
</div>


    </header>
  );
}
