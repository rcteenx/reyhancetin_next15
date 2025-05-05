import LectureContent from "@/components/templates/lectureContent";
import { introJson } from "@/content/data/circle/intro";

export default function CircleIntro() {
  return (
    <>
      <LectureContent lecture={introJson}></LectureContent>
    </>
  );
}
