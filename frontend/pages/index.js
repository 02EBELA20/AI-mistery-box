import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrizeList from "../components/PrizeList";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen  flex flex-col items-center">
      {/* ჰედერი */}
      <Header />

      {/* მთავარი ბანერი (Hero Section) */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full">
        <h1 className="text-4xl  font-extrabold drop-shadow-lg">
        🎁 აირჩიე შენი mysteybox-ი და  გამოსცადე შენი იღბალი
        </h1>
       
      </section>

      <section className="text-center  bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full ">
  

  <div className="flex justify-center  mt-1 space-x-9">
    {/* ბიუჯეტური ბორბალი */}
    <div className="text-center">
      <Link href="/spin?category=budget">
        <img src="/boxes/budget.png" className="w-40 h-40 mx-auto cursor-pointer hover:scale-105 transition" alt="ბიუჯეტური ბორბალი"/>
      </Link>
      <p className="mt-2 text-lg font-bold">🌱 ბიუჯეტური    </p>
      <p className="text-sm opacity-80">10₾ </p>
    </div>

    {/* სტანდარტული ბორბალი */}
    <div className="text-center">
      <Link href="/spin?category=standard">
        <img src="/boxes/standard.png" className="w-40 h-40 mx-auto cursor-pointer hover:scale-105 transition" alt="სტანდარტული ბორბალი"/>
      </Link>
      <p className="mt-2 text-lg font-bold">💎 სტანდარტული</p>
      <p className="text-sm opacity-80">30₾ </p>
    </div>

    {/* პრემიუმ ბორბალი */}
    <div className="text-center">
      <Link href="/spin?category=premium">
        <img src="/boxes/premium.png" className="w-40 h-40 mx-auto cursor-pointer hover:scale-105 transition" alt="პრემიუმ ბორბალი"/>
      </Link>
      <p className="mt-2 text-lg font-bold">👑 პრემიუმი</p>
      <p className="text-sm opacity-80">50₾ </p>
    </div>
  </div>
  <Link href="/spin">
          <button className="mt-12 bg-yellow-500 hover:bg-yellow-600 text-white font-bold mb-6 py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105">
            🎡 დაატრიალე ბორბალი!
          </button>
        </Link>
</section>


{/* Swiper - პრიზების სლაიდერი */}
<div className="mt-10 max-w-5xl mx-auto px-4">
  
  {/* სათაური */}
  <h2 className="text-black text-center font-bold text-2xl mt-6">
    ✨ ელიტური პრიზები გამარჯვებულთათვის
  </h2>

  <div className="mt-6">
    <Swiper
      spaceBetween={20} 
      slidesPerView={"auto"} 
      loop={true}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        320: { slidesPerView: 1 },  // მობილური
        640: { slidesPerView: 2 },  // ტაბლეტი
        1024: { slidesPerView: 3 }, // დესკტოპი
        1280: { slidesPerView: 4 }, // დიდი ეკრანი
      }}
      className="overflow-visible"
    >
      <SwiperSlide className="flex justify-center">
        <img src="/prizes/smartwatch.png" className="w-40 h-40" alt="სმარტ საათი" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center">
        <img src="/prizes/airpods.png" className="w-40 h-40" alt="AirPods" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center">
        <img src="/prizes/mc.png" className="w-40 h-40" alt="MacBook" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center">
        <img src="/prizes/iphone.png" className="w-40 h-40" alt="iPhone" />
      </SwiperSlide>

      <SwiperSlide className="flex justify-center">
        <img src="/prizes/vrheadset.png" className="w-40 h-40" alt="VR სათვალე" />
      </SwiperSlide>
    </Swiper>
  </div>
</div>

      {/* როგორ მუშაობს (How it Works) */}
      <section className="text-center py-16 px-6 bg-white w-full" style={{ marginTop: "50px" }}>

      <section className="text-center py-20 px-6 bg-white w-full">
  {/* სათაური */}
  <h2 className="text-4xl font-bold text-gray-900 mb-10">
    🎯 როგორ მუშაობს სისტემა?
  </h2>

  {/* სამი საკითხი ჰორიზონტალურად, თითოეული ვერტიკალური პასუხებით */}
  <div className="flex justify-center space-x-10">
    
    {/* ბლოკი 1: როგორ ვითამაშოთ */}
    <div className="w-80 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">🎡 როგორ ვითამაშოთ?</h3>
      <p className="text-gray-700 mt-3">1️⃣ აირჩიე მისტერი ბოქსი (ბიუჯეტური, სტანდარტული, პრემიუმი)</p>
      <p className="text-gray-700 mt-3">2️⃣ დაატრიალე ბორბალი 4-ჯერ და მოიგე 4 პრიზი</p>
      <p className="text-gray-700 mt-3">3️⃣ მიიღე შენს მისამართზე მისიერი ბოქსი შენი მოგებული ნივთებით</p>
    </div>

    {/* ბლოკი 2: რეფერალური სისტემა */}
    <div className="w-80 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">🤝 რეფერალური სისტემა</h3>
      <p className="text-gray-700 mt-3">1️⃣ მოიწვიე მეგობრები შენი უნიკალური ბმულით</p>
      <p className="text-gray-700 mt-3">2️⃣ როდესაც მეგობარი შეიძენს ბოქსს, შენ მიიღებ უფასო დატრიალებას</p>
      <p className="text-gray-700 mt-3">3️⃣ მეტი მეგობარი = მეტი შანსი, მოიგო დიდი პრიზები</p>
    </div>

    {/* ბლოკი 3: ბონუსები და აქციები */}
    <div className="w-80 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">🎁 ბონუსები და აქციები</h3>
      <p className="text-gray-700 mt-3">1️⃣ "გადაიხადე 10₾ – მოიგე 100₾!" (შანსი, რომ მოიგო ძვირადღირებული პრიზი)</p>
      <p className="text-gray-700 mt-3">2️⃣ სპეციალური ბონუსები რეგულარული მოთამაშეებისთვის</p>
      <p className="text-gray-700 mt-3">3️⃣ გააზიარე შედეგი და მიიღე დამატებითი ბონუსი</p>
    </div>

  </div>
</section>

      </section>

      {/* პრიზების სექცია */}
      <PrizeList />

      {/* მომხმარებელთა რევიუები */}
      <ReviewSection />

      {/* საიტის უსაფრთხოება */}
      <section className="text-center py-12 bg-gray-200 w-full">
        <h2 className="text-3xl font-bold text-gray-800">
          🔒 100% უსაფრთხო და სამართლიანი თამაში
        </h2>
        <p className="text-lg mt-2 text-gray-600">
          ჩვენი სისტემა იყენებს AI-ს, რათა უზრუნველყოს სამართლიანი შედეგები და დაცული ტრანზაქციები.
        </p>
      </section>

      {/* ფუტერი */}
      <Footer />
    </div>
  );
}
