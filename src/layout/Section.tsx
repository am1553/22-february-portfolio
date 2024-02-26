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
    <section
      title={title}
      id={id}
      className="min-h-screen max-w-screen-2xl mx-auto px-8 overflow-x-hidden"
    >
      {children}
    </section>
  );
}

export default Section;
