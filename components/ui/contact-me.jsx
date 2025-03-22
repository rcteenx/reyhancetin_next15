import { contactMe } from "@/content/data/hero";
import IconComponent from "@/components/ui/IconComponent";

export default function ContactMe() {
  return (
    <div className="my-4 flex flex-row flex-wrap space-x-4 justify-center">
      {contactMe.buttons.map((b, index) => (
        <div key={b.icon} className={b.show}>
          <a
            href={b.link}
            title={`${b.title} Linki`}
            className={` relative transition-all duration-200 gradientTransition btn-hero ${b.gradiant}`}
            role="button"
            target="_blank"
          >
            <IconComponent name={b.icon} size={24} color={b.iconColor} />
            <span className="">{b.title}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
