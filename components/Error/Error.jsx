const ErrorPage = () => {
  return (
    <div className="fixed top-20 left-0 w-screen h-screen flex flex-col items-center justify-center">
      <h3 className="font-bold text-2xl">Oops Something went wrong</h3>
      <p className="font-bold text-sm">Please try Again Later</p>
    </div>
  );
};

export default ErrorPage;
