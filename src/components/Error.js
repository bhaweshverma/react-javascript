import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oppppps! There is error on this route, please go back!</h1>
      <h3>
        {err.status}:{err.statusText}
      </h3>
      <h4>{err.data}</h4>
    </>
  );
};

export default Error;
