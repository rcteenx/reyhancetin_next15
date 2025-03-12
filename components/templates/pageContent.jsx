export default function PageContent({ h2Title, children }) {
  return (
    <section id="pgContent" className="mx-auto container-p md:my-8 ">
      <div className="mx-auto px-4 py-8 md:px-8 md:pb-16 max-w-xl flex flex-col gap-4 text-left shadow-xl">
        <h2 className="mx-auto inline-block py-1 border-indigo border-b text-center text-2xl md:text-3xl">
          {h2Title}
        </h2>
        {children}
      </div>
    </section>
  );
}
