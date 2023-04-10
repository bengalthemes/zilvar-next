function Alert({ message }: { message?: string }) {
  return (
    <div className="container py-[100px] md:py-28 lg:py-32 xl:py-[150px]">
      <div className="flex items-center justify-center h-full px-5 py-4 text-sm font-semibold text-red-600 border border-red-200 rounded">
        {message}
      </div>
    </div>
  );
}

export default Alert;
