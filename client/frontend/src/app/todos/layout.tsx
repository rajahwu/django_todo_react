import Link from "next/link";
import React from "react";

export default function TodosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="navbar bg-base-100">
        <Link href="/todos" className="btn btn-ghost normal-case text-xl">Todos Apps</Link>
      </header>
      <div className="container">
      {children}
      </div>
      <footer className="navbar bg-base-300">
        <Link className="mx-auto" href="#">About the Project</Link>
      </footer>
    </div>
  );
}
