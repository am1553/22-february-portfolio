function WindowOptions() {
  return (
    <div className="flex gap-2">
      <div className="h-4 w-4 rounded-full bg-[#FF5F57] p-1">
        <div className="h-full w-full rounded-full bg-[#990000]"></div>
      </div>
      <div className="h-4 w-4 rounded-full bg-[#FEBC2E]"></div>

      <div className="h-4 w-4 rounded-full bg-[#28C840]"></div>
    </div>
  );
}

function IDEFigure() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <figure>
        <header className="bg-[#21252B] p-4 rounded-md">
          <WindowOptions />
        </header>
        <div className="bg-[#282C34] p-8'">
          <pre>
            <code>hello</code>
          </pre>
        </div>
      </figure>
    </div>
  );
}

export default IDEFigure;
