const FooterCopyRight = () => {
  return (
    <div className="py-2 flex justify-between border-t">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} - Tüm hakları saklıdır.
      </p>
      <p className="text-xs">
        <span className=" text-red-700">♥</span>&nbsp; by &nbsp;
        <a
          href="https://github.com/rcteenx"
          className="underline"
          target="_blank"
        >
          rcteenx
        </a>
      </p>
    </div>
  );
};

export default FooterCopyRight;
