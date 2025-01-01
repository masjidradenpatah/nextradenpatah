import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({title, subtitle}: SectionTitleProps) => {
  return (
    <>
      <div className={"flex flex-col mb-4"}>
        <h2 className={"text-3xl font-bold text-center"}>
          {title}
        </h2>
        <p className={"text-center"}>
          {subtitle}
        </p>
      </div>
    </>
  );
};
export default SectionTitle;
