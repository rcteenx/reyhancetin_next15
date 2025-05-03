import Lecture from "@/components/templates/lecture";
import { lecture1 } from "@/content/lecture";

export default function CircleIntro() {
  return (
    <>
      <Lecture lecture={lecture1[0]}></Lecture>
    </>
  );
}
