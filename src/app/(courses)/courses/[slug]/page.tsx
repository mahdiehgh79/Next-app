import { CourseDetails as CourseDetailsType } from "@/types/course-details.interface";
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

  const courseData = await getCourse(slug);

  return (
    <div className="text-5xl flex justify-center items-center w-full">
      <h1>{courseData.title}</h1>
    </div>
  );
}
