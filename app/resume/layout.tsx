export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center pt-5">
      <div className="w-full px-4">{children}</div>
    </section>
  );
}
