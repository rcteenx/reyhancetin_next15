"use client";

export default function WhatsappForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const phone = "905443087402";
    const message = `Merhaba, adım ${name}. Çalışmalara atılmak istiyorum.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-8 space-y-6">
      <h3 className="text-2xl font-bold text-purple-900 text-center">
        Yol Arkadaşlığına Katıl
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          required
          className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-700 text-white font-semibold py-3 rounded-xl hover:bg-purple-800 transition"
        >
          WhatsApp ile Gönder →
        </button>
      </form>
    </div>
  );
}
