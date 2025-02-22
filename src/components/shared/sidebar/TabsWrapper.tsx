import { UserButton } from "@clerk/nextjs";
import Sidebar from "./Sidebar";

type Props = { children: React.ReactNode };

function TabsWrapper({ children }: Props) {
  return (
    <main className="flex items-center">
      <div className="h-screen flex flex-col items-center justify-between bg-white py-8 px-3 w-[70px]">
        <Sidebar />
        <UserButton />
      </div>
      <section className="w-[calc(100vw-70px)]">{children}</section>
    </main>
  );
}

export default TabsWrapper;
