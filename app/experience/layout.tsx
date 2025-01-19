export default function Experience({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center mt-7 mx-3">
      {children}
    </section>
  );
}
