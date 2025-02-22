import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import React from "react";

type Props = {
  userImage: string;
  userName: string;
  userLastMessage: string;
};

function ConversationCard({ userImage, userName, userLastMessage }: Props) {
  return (
    <Card className="rounded-md hover:bg-gray-100 transition cursor-pointer">
      <div className="flex py-3 px-4 items-center gap-3">
        <Avatar className="w-10 h-10 flex-shrink-0">
          <AvatarImage src={userImage} className="rounded-full object-cover" />
          <AvatarFallback className="rounded-full bg-gray-300 text-xs font-medium uppercase">
            {userName.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h4 className="font-semibold line-clamp-1 text-sm">{userName}</h4>
          <p className="text-xs text-gray-500 line-clamp-1">
            {userLastMessage}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default ConversationCard;
