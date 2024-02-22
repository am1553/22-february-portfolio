function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: JSX.Element;
}) {
  return (
    <section title={title} id={id} className="min-h-screen border-b">
      {children}
    </section>
  );
}

export default Section;
