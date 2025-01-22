import { footerReyhan } from "@/public/assets/images";

const FooterInfo = () => {
  return (
    <div className="flex justify-around items-center md:ml-8 ">
      <div>
        <a href="/reyhan">
          <img
            src={footerReyhan.src}
            alt="reyhan çetin"
            title="reyhan çetin"
            className="m-0 p-2 h-28 w-28 border-2 border-indigo-light-1 rounded-full gradientTransition"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterInfo;
