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
  const isMarginBottom = marginBottom ? "pb-24 md:pb-32 xl:pb-24" : "";
  const isMarginTop = marginTop ? "mt-24 md:mt-32 xl:mt-24" : "";

  return (
    <section
      id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} px-2 md:px-6 lg:px-10 xl:mx-auto xl:px-16 2xl:max-w-[1400px]`}
    >
      {children}
    </section>
  );
};

export default Section;
