import React, { useEffect, useRef } from "react";


const Terminal = (props: Props) => {
  const { output, isSuccess } = props;
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    if (output.length) {
     terminalRef.current?.scrollIntoView(false); 
    }
  }, [output]);

  return (
    <div
    ref={terminalRef}
      className={`${
        isSuccess !== null ? "terminal" : "terminal-collapsed"
      } bg-black text-white my-6`}
    >
      {isSuccess !== null && !isSuccess ? (
        <div className="text-red-700 output opacity-0">❌ Execution Failed</div>
      ) : (
        <div className="text-green-700 output opacity-0">Shandaar bhai 🎉</div>
      )}
      {output.map((line) => {
        return (
          <div
            key={line.value}
            className={`${line.isError ? "text-red-500" : ""} output opacity-0`}
          >
            &gt; {line.value}
          </div>
        );
      })}
    </div>
  );
};
type Props = {
  output: {
    value: string;
    isError: boolean;
  }[];
  isSuccess: boolean | null;
};
export default React.memo(Terminal);
