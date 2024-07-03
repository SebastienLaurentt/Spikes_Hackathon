interface SectionProps {
  id?: string;
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "mb-10" : "";
  const isMarginTop = marginTop ? "mt-10 " : "";

  return (
    <section
      id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} xl:mx-auto 2xl:max-w-[1600px]`}
    >
      {children}
    </section>
  );
};

export default Section;
