export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-5">
      <div className="w-full max-w-[700px] px-3 mx-auto">{children}</div>
    </section>
  );
}
