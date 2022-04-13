export function getSimplifiedposts(posts) {
  return posts.map((post) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.frontmatter.slug,
    tags: post.node.frontmatter.tags,
    title: post.node.frontmatter.title,
    description: post.node.frontmatter.description,
  }));
}

export function slugify(inString: String) {
  const newString = inString.replace(" ", "-");
  return newString.toLowerCase();
}
