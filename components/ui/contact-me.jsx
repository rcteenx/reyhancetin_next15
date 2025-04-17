import { buttonContactMe } from "@/content/data/buttons";
import IconComponent from "@/components/ui/IconComponent";
var messagex = "Hello";

export default function ContactMe() {
  return (
    <div className="my-4 flex flex-row flex-wrap space-x-4 justify-center">
      {buttonContactMe.buttons.map((b, index) => (
        <div key={b.id} className={b.show}>
          <a
            href={`${b.link}`}
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
