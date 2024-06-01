import React from "react";

type Capsule = {
  title: string;
  summary: string;
  img: string;
  component: React.ReactNode;
};

type PostProps = {
  capsule: Capsule | null;
};

function Post({ capsule }: PostProps) {
  if (!capsule) {
    return <div>No capsule selected</div>;
  }

  return <div>{capsule.component}</div>;
}

export default Post;
