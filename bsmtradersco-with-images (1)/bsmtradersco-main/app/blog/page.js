import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog — BSM Traders Co.",
  description: "Sourcing tips, wholesale buying advice, and updates from BSM Traders Co.",
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Blog"
        title="Sourcing tips & wholesale advice"
        subtitle="Notes from the BSM Traders Co. team on sourcing, buying in bulk, and running a retail supply chain well."
      />

      <section className="categories">
        <div className="wrap">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                <div className="blog-thumb">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                  </svg>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="tag">{post.tag}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-readmore">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
