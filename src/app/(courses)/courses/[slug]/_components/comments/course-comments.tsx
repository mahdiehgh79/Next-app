"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";

const CourseComments = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: comments } = useCourseComments({
    params: {
      slug,
      page: 1,
    },
  });

  return (
    <>
      {comments?.data.map((comment) => (
        <Comment key={`comment-${comment.id}`} {...comment} variant="info" />
      ))}
    </>
  );
};

export default CourseComments;
