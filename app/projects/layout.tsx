export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-5 px-3">
      <div className="w-full">{children}</div>
    </section>
  );
}
