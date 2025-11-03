"use client";

export default function ModalWayAttendece({
  open,
  onClose,
  id,
  title,
  paragraphs,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6 relative">
        {/* Kapat */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Başlık */}
        <h3 className="text-xl font-semibold text-purple-800 mb-4">
          {id}. {title}
        </h3>

        {/* Paragraflar */}
        <div className="space-y-3 text-gray-700 leading-relaxed max-h-96 overflow-y-auto pr-2">
          {paragraphs.map((p, i) => (
            <p key={i}>
              {i + 1}- {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
