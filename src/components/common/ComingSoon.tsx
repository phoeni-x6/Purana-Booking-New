"use client";

import Link from "next/link";

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
};

export default function ComingSoon({
  eyebrow,
  title,
  highlight,
  description,
  features,
}: ComingSoonProps) {
  return (
    <main className="coming-soon-page">
      <style>{`
        .coming-soon-page {
          min-height: 78vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 90px 24px;
          background: var(--surface, #F8F5E8);
          color: var(--forest-dark, #21452B);
        }

        .coming-soon-page::before,
        .coming-soon-page::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .coming-soon-page::before {
          width: 430px;
          height: 430px;
          top: -210px;
          right: -100px;
          border: 1px solid rgba(47, 93, 57, .13);
          box-shadow:
            0 0 0 35px rgba(47, 93, 57, .025),
            0 0 0 75px rgba(47, 93, 57, .02);
        }

        .coming-soon-page::after {
          width: 350px;
          height: 350px;
          bottom: -190px;
          left: -100px;
          border: 1px solid rgba(193, 76, 56, .15);
          box-shadow:
            0 0 0 35px rgba(193, 76, 56, .025),
            0 0 0 75px rgba(193, 76, 56, .02);
        }

        .coming-soon-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 850px;
          text-align: center;
        }

        .coming-soon-icon {
          width: 78px;
          height: 78px;
          margin: 0 auto 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(223, 194, 77, .7);
          border-radius: 50%;
          background: rgba(223, 194, 77, .15);
          color: var(--forest, #2F5D39);
        }

        .coming-soon-icon svg {
          width: 35px;
          height: 35px;
        }

        .coming-soon-eyebrow {
          margin-bottom: 18px;
          color: var(--terracotta, #C14C38);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .22em;
          text-transform: uppercase;
        }

        .coming-soon-title {
          margin: 0;
          color: var(--forest-dark, #21452B);
          font-family: "Lora", Georgia, serif;
          font-size: clamp(42px, 7vw, 76px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -.04em;
        }

        .coming-soon-highlight {
          display: block;
          color: var(--terracotta, #C14C38);
          font-style: italic;
        }

        .coming-soon-description {
          max-width: 590px;
          margin: 24px auto 0;
          color: var(--text-muted, #6B705C);
          font-size: 16px;
          line-height: 1.9;
        }

        .coming-soon-divider {
          width: 75px;
          height: 2px;
          margin: 32px auto;
          background: var(--gold, #DFC24D);
        }

        .coming-soon-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin: 0 auto 38px;
          padding: 0;
          list-style: none;
        }

        .coming-soon-features li {
          padding: 10px 16px;
          border: 1px solid var(--border, #D8D0A9);
          border-radius: 999px;
          background: rgba(255, 255, 255, .5);
          color: var(--forest-dark, #21452B);
          font-size: 12px;
        }

        .coming-soon-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 52px;
          padding: 14px 26px;
          border: 1px solid var(--forest-dark, #21452B);
          border-radius: 999px;
          background: var(--forest-dark, #21452B);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all .25s ease;
        }

        .coming-soon-button:hover {
          transform: translateY(-3px);
          border-color: var(--terracotta, #C14C38);
          background: var(--terracotta, #C14C38);
        }

        .coming-soon-note {
          margin-top: 22px;
          color: var(--text-muted, #6B705C);
          font-size: 11px;
          letter-spacing: .04em;
        }

        @media (max-width: 600px) {
          .coming-soon-page {
            min-height: 75vh;
            padding: 70px 20px;
          }

          .coming-soon-title {
            font-size: 46px;
          }

          .coming-soon-description {
            font-size: 14px;
          }

          .coming-soon-features {
            gap: 8px;
          }

          .coming-soon-features li {
            font-size: 11px;
            padding: 9px 12px;
          }
        }
      `}</style>

      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 21c-4-2.2-7-6-7-10.5C5 6 8 3 12 3s7 3 7 7.5c0 4.5-3 8.3-7 10.5Z" />
            <path d="M12 21V8" />
            <path d="M12 15c-2.5-1-4-2.5-5-4" />
            <path d="M12 12c2.5-1 4-2.5 5-4" />
          </svg>
        </div>

        <p className="coming-soon-eyebrow">{eyebrow}</p>

        <h1 className="coming-soon-title">
          {title}
          <span className="coming-soon-highlight">{highlight}</span>
        </h1>

        <p className="coming-soon-description">{description}</p>

        <div className="coming-soon-divider" />

        <ul className="coming-soon-features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <Link href="/" className="coming-soon-button">
          Explore Purana Ayurveda <span aria-hidden="true">→</span>
        </Link>

        <p className="coming-soon-note">
          A little more time. A lot more wellbeing.
        </p>
      </div>
    </main>
  );
}