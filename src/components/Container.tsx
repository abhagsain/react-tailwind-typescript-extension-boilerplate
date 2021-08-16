import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props): ReactElement {
  return (
    <div
      className="flex flex-col items-center justify-center p-0.5 text-gray-100 h-125 w-132 bg-primaryDark rounded-xs main-section max-h-125 overflow-auto"
      id="coingaze-container"
    >
      {children}
    </div>
  );
}
