export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-5">
      <div className="w-full max-w-[700px] mx-auto px-3">{children}</div>
    </section>
  );
}
