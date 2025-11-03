export default function PageContent({ h2Title, addClass, children }) {
  return (
    <section className="pgContent">
      <div
        className={`mx-auto px-4 py-8 md:px-8 md:pb-16 max-w-xl shadow-xl ${addClass}`}
      >
        <h2 className="mx-auto inline-block py-1 border-indigo border-b text-2xl md:text-3xl">
          {h2Title}
        </h2>
        {children}
      </div>
    </section>
  );
}
