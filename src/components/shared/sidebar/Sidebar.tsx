"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plus, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DialogContainer from "../Dialog";

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center gap-4">
      <Link href="/conversations">
        <Button variant={pathname === "/conversations" ? "default" : "outline"}>
          <MessageCircle size={18} />
        </Button>
      </Link>
      <Link href="/rooms">
        <Button variant={pathname === "/rooms" ? "default" : "outline"}>
          <Users size={18} />
        </Button>
      </Link>
      <DialogContainer>
        <Button
          variant="outline"
          onClick={() => console.log("Add button clicked")}
        >
          <Plus size={18} />
        </Button>
      </DialogContainer>
    </nav>
  );
}

export default Sidebar;
