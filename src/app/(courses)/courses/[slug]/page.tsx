import { CourseDetails as CourseDetailsType } from "@/types/course-details.interface";
import { Rating } from "@/app/_components/rating/rating";
import { Progress } from "@/app/_components/progress";
import { CourseAside } from "./_components/course-aside";
import { Tab } from "@/types/tab.type";
import { Tabs } from "@/app/_components/tabs";
import { Accordion } from "@/app/_components/accordion";
import { Accordion as AccordionType } from "@/types/accordion";

export async function generateStaticParams() {
  const slugs = await fetch(`http://api.classbon.com/api/courses/slugs`).then(
    (res) => res.json()
  );

  return (slugs as string[]).map((slug) => ({
    slug: slug,
  }));
}

async function getCourse(slug: string): Promise<CourseDetailsType> {
  const res = await fetch(`http://api.classbon.com/api/courses/${slug}`);
  return res.json();
}
export default async function CourseDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = await getCourse(slug);

  const faqs: AccordionType[] = course.frequentlyAskedQuestions.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));
  console.log("COURSE API RESPONSE:", course);

  console.log("FAQ DATA:", course.frequentlyAskedQuestions);

  const tabs: Tab[] = [
    {
      label: "مشخصات دوره",
      content: course.description,
    },
    {
      label: "دیدگاه‌ها و پرسش",
      content: "course comments",
    },
    {
      label: "سوالات متداول",
      content: <Accordion data={faqs} />,
    },
  ];

  return (
    <div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">Video Player Component</div>
      </div>
      <div className="col-span-10 xl:col-span-3 ">
        <CourseAside {...course} />
      </div>
      <div className="col-span-10 xl:col-span-6">
        <Tabs tabs={tabs} />
      </div>
      <div className="col-span-10 xl:col-span-4 bg-warning"></div>
    </div>
  );
}
