
import Link from "next/link";
import { Menu } from "lucide-react";

type Props = {
  onMenuClick: () => void;
};

export default function AccountHeader({ onMenuClick }: Props) {
  return (
    <header className="sticky top-0 z-30 flex min-h-[76px] items-center justify-between border-b border-[var(--border)] bg-[var(--surface)]/95 px-5 backdrop-blur-md sm:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-full border border-[var(--border)] p-2 md:hidden"
          aria-label="Open navigation"
        >
          <Menu size={19} />
        </button>

        <div>
          <p className="font-serif text-xl text-[var(--forest-dark)] sm:text-2xl">
            My Account
          </p>
          <p className="hidden text-[10px] text-[var(--text-muted)] sm:block">
            Your personal wellness space
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="hidden text-xs font-medium text-[var(--forest)] transition hover:text-[var(--terracotta)] sm:block"
        >
          Visit website
        </Link>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--cream)] font-serif text-sm font-semibold text-[var(--forest-dark)]">
          AM
        </div>
      </div>
    </header>
  );
}
