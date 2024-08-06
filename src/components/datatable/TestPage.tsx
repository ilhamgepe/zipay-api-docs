import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

const TestPage = ({ data }: any) => {
  console.log("env", process.env.NODE_ENV);

  return (
    <div>
      TestPage
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestPage;
