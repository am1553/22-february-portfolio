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
      className="w-screen mx-auto overflow-x-hidden"
    >
      {children}
    </section>
  );
}

export default Section;
