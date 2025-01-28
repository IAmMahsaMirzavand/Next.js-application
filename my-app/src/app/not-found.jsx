import Image from "next/image";
import React from "react";

const notFound = () => {
  return (
    <Image
      src={"/404-error.jpg"}
      className=" mx-auto p-10"
      width={800}
      height={100}
      alt="404"
    />
  );
};

export default notFound;
