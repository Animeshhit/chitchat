import React from "react";

type Props = {
  sidebarComponent: React.ReactNode;
  children: React.ReactNode;
};

function PagesWrapper({ sidebarComponent, children }: Props) {
  return (
    <div className="flex">
      {/* Sidebar Component (Always Visible) */}
      <div className="h-screen w-[25%] shadow-lg border-r bg-white px-3">
        {sidebarComponent}
      </div>

      {/* Main Content */}
      <div className="w-[75%]">{children}</div>
    </div>
  );
}

export default PagesWrapper;
