import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — BSM Traders Co.`,
    description: post.excerpt,
  };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero crumb={`Blog / ${post.title}`} title={post.title} subtitle={post.excerpt} />

      <section className="about">
        <div className="wrap">
          <article className="blog-post">
            <div className="post-meta">
              By {post.author} · {formatDate(post.date)} · {post.tag}
            </div>
            <div className="post-body">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="share-row">
              <span>Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
              >
                <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M4 4l16 16M20 4 4 20"/></svg>
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
              >
                <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
              >
                <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5 5 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

            <div style={{ marginTop: 32 }}>
              <Link className="btn outline" href="/blog">← Back to all posts</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
