import { StaticPages } from "@/content/data";
import FooterInfo from "@/components/ui/footer/1-Info";

const FooterLinks = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 justify-between md:items-start flex-1 gap-4">
      {StaticPages.map((pg) => (
        <div key={pg.title} className="">
          <h4 className="inline-block  text-lg leading-normal font-medium border-b border-indigo-light-3 hover:text-indigo-dark-3 hover:border-indigo-dark-3">
            <a href={"/" + pg.link}>{pg.title}</a>
          </h4>
          <ul>
            {pg.pages.map((sp) => (
              <li
                key={sp.id}
                className="mt-1 text-sm leading-normal hover:text-white-400 "
              >
                <a
                  href={
                    pg.id == 4 && sp.id < 3
                      ? sp.link
                      : "/" + pg.link + "/" + sp.link
                  }
                >
                  {sp.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
