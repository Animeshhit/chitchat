import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { MessageCircle, Plus, Users } from "lucide-react";

type Props = { children: React.ReactNode };

function TabsWrapper({ children }: Props) {
  return (
    <main className="flex items-center">
      <div className="h-screen flex flex-col items-center justify-between bg-white py-8 px-3 w-[70px]">
        <nav className="flex flex-col items-center gap-4">
          <Button>
            <MessageCircle size={10} />
          </Button>
          <Button variant="outline">
            <Users size={10} />
          </Button>
          <Button variant="outline">
            <Plus size={10} />
          </Button>
        </nav>
        <UserButton />
      </div>
      <section className="w-[calc(100vw-70px)]">{children}</section>
    </main>
  );
}

export default TabsWrapper;
