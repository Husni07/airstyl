"use client";
import React, { useState, useEffect, Suspense } from "react";
import propertiesData from "../data/properties.json";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const InputField = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-700">{label}</label>
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      {...props}
    />
  </div>
);

const SuccessView = ({ formData, formattedTotal, totalPrice, onReset }) => {
  const generateDynamicQRIS = (amount) => {
    const baseQRIS = "00020101021226610014COM.GO-JEK.WWW01189360091435491122040210G5491122040303UMI51440014ID.CO.QRIS.WWW0215ID10254642370600303UMI5204899953033605405500005802ID5912BARR DIGITAL6013JAKARTA BARAT61051141062070703A0163048D8C";
    let qrisData = baseQRIS.slice(0, -4);
    let amountStr = amount.toString();
    let amountLen = amountStr.length.toString().padStart(2, "0");
    let newAmountTag = "54" + amountLen + amountStr;
    
    qrisData = qrisData.replace("540550000", newAmountTag);
    
    let crc = 0xFFFF;
    for (let i = 0; i < qrisData.length; i++) {
      crc ^= qrisData.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) crc = (crc << 1) ^ 0x1021;
        else crc = crc << 1;
      }
    }
    const crcHex = (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, "0");
    return qrisData + crcHex;
  };

  const dynamicQRIS = formData.paymentMethod === "QRIS" ? generateDynamicQRIS(totalPrice) : "";
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(dynamicQRIS)}`;

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-purple-50 rounded-2xl">
      <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Diterima!</h2>
      <p className="text-gray-600 mb-4">
        Terima kasih <strong>{formData.name}</strong>. Anda telah berhasil mereservasi <strong>{formData.property}</strong>.
      </p>
      
      <div className="mb-6 w-full max-w-sm mx-auto">
        <p className="text-gray-600 mb-4">
          Silakan selesaikan pembayaran sebesar <strong className="text-purple-600 text-lg">{formattedTotal}</strong> menggunakan <strong>{formData.paymentMethod}</strong>.
        </p>
        
        {formData.paymentMethod === "QRIS" && (
          <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl">
            <p className="mb-3 text-sm font-semibold text-gray-700">Scan QRIS di bawah ini:</p>
            <img src={qrImageUrl} alt="QRIS" className="w-48 h-48 object-contain rounded-lg border border-gray-100" />
          </div>
        )}

        {["Transfer Bank", "GoPay", "DANA", "Visa / Mastercard"].includes(formData.paymentMethod) && (
          <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-1">
              {formData.paymentMethod === "Visa / Mastercard" ? "Bayar melalui Virtual Account:" : "Transfer ke Rekening / Nomor:"}
            </p>
            <p className="font-mono text-xl font-bold text-gray-800 my-2 tracking-wider">
              {formData.paymentMethod === "Transfer Bank" ? "BCA 0032 3885 0367" : 
               formData.paymentMethod === "GoPay" ? "GoPay 0858-6624-2248" : 
               formData.paymentMethod === "DANA" ? "DANA 0858-6624-2248" : 
               "VA 9876-5432-1012"}
            </p>
            <p className="text-sm text-gray-600 font-semibold uppercase">a.n. Husni Mubarrok</p>
          </div>
        )}
      </div>

      <button onClick={onReset} className="px-6 py-3 font-bold text-white transition bg-purple-500 rounded-full hover:bg-purple-600 w-full max-w-sm">
        Saya Sudah Bayar
      </button>
    </div>
  );
};

const BookingForm = () => {
  const searchParams = useSearchParams();
  const propertySlugQuery = searchParams.get("property");

  const [formData, setFormData] = useState({
    name: "", phone: "", property: propertiesData[0].name, checkIn: "", duration: 1, guests: 1, paymentMethod: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const selected = propertiesData.find((p) => p.slug === propertySlugQuery);
    if (selected) setFormData((prev) => ({ ...prev, property: selected.name }));
  }, [propertySlugQuery]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const currentProperty = propertiesData.find((p) => p.name === formData.property) || propertiesData[0];
  const totalPrice = parseInt(currentProperty.price.replace(/\./g, ""), 10) * formData.duration;
  const formattedTotal = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(totalPrice);

  const resetForm = () => {
    setFormData({
      name: "", phone: "", property: propertiesData[0].name, checkIn: "", duration: 1, guests: 1, paymentMethod: "",
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <SuccessView formData={formData} formattedTotal={formattedTotal} totalPrice={totalPrice} onReset={resetForm} />;
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (!formData.paymentMethod) return alert("Silakan pilih metode pembayaran terlebih dahulu.");
      setIsSubmitted(true);
    }} className="grid grid-cols-1 lg:grid-cols-3 gap-8 open-sans">
      
      {/* Kolom Kiri: Form Input */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <InputField label="Nama Lengkap" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Masukkan nama Anda" />
        <InputField label="Nomor WhatsApp" type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="081234567890" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Pilih Properti</label>
            <select name="property" value={formData.property} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              {propertiesData.map((item) => (
                <option key={item.slug} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <InputField label="Jumlah Tamu" type="number" name="guests" min="1" required value={formData.guests} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Check-In" type="date" name="checkIn" required value={formData.checkIn} onChange={handleChange} />
          <InputField label="Durasi Menginap" type="number" name="duration" min="1" required value={formData.duration} onChange={handleChange} />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-semibold text-gray-700">Metode Pembayaran</label>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {["GoPay", "DANA", "Transfer Bank", "Visa / Mastercard", "QRIS"].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => handleChange({ target: { name: "paymentMethod", value: method } })}
                className={`p-3 border rounded-lg transition-all duration-300 ${
                  formData.paymentMethod === method
                    ? "border-purple-500 bg-purple-50 font-bold text-purple-700 ring-2 ring-purple-200"
                    : "border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-gray-50"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Ringkasan Pesanan & Tombol */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        {currentProperty.images && currentProperty.images.length > 0 && (
          <Link href={`/property/${currentProperty.slug}`}> 
            <img 
              src={currentProperty.images[0]} 
              alt={currentProperty.name} 
              className="w-full h-48 object-cover rounded-xl shadow-sm border border-gray-200" 
            />
          </Link>
        )}
        
        <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
          <h3 className="mb-4 font-bold text-gray-800 border-b pb-2">Ringkasan Pesanan</h3>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Properti</span><span className="font-semibold text-right max-w-[150px] truncate">{currentProperty.name}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Harga per Malam</span><span>Rp. {currentProperty.price}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <span>Durasi Menginap</span><span>{formData.duration} Hari</span>
          </div>
          <div className="flex justify-between items-center text-gray-800 font-bold border-t pt-3">
            <span>Total</span><span className="text-xl text-purple-600">{formattedTotal}</span>
          </div>
        </div>

        <button type="submit" className="w-full px-6 py-4 font-bold text-white transition duration-300 ease-in-out bg-purple-500 rounded-xl hover:bg-purple-600 hover:shadow-lg focus:outline-none">
          Bayar Sekarang
        </button>
      </div>

    </form>
  );
};

const BookingPage = () => {
  return (
    <main className="container pt-32 pb-16 min-h-screen">
      <div className="max-w-4xl p-8 mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl">
        <h1 className="mb-2 text-3xl font-bold text-center text-purple-500 italic playfair-display md:text-4xl">
          Booking Form
        </h1>
        <p className="mb-8 text-center text-gray-500 open-sans">
          Isi form di bawah ini untuk mereservasi properti impian Anda.
        </p>
        <Suspense fallback={<div>Memuat form booking...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </main>
  );
};

export default BookingPage;
