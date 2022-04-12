export function getSimplifiedPosts(posts) {
  return posts.map((post) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.frontmatter.slug,
    tags: post.node.frontmatter.tags,
    categories: post.node.frontmatter.categories,
    title: post.node.frontmatter.title,
    description: post.node.frontmatter.description,
  }));
}

export function slugify(inString: String) {
  const newString = inString.replace(" ", "-");
  return newString.toLowerCase();
}
