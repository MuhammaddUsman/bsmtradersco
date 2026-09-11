import Link from "next/link";

export default function PageHero({ crumb, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="wrap inner">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / {crumb}
        </div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
