export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center pt-5">
      <div className="w-full max-w-[415px] px-4">{children}</div>
    </section>
  );
}
