import Link from "next/link";

import { getLastBlogs } from "@/lib/blogs";

import BlogList from "@/components/repo/blog/blogs";

export default async function BlogGrid() {
  const blogs = await getLastBlogs(10);

  return <BlogList h2Title="Son Blog Yazılarım" blogs={blogs} blogHome={1} />;
}
