function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: JSX.Element;
  className?: string;
}) {
  return (
    <section
      title={title}
      id={id}
      className={`w-screen mx-auto overflow-x-hidden ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
