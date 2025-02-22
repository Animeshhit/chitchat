import ConverstationCard from "../conversations/ConverstationCard";

interface ConverstationsType {
  userImage: string;
  userName: string;
  userLastMessage: string;
}

const conversations: ConverstationsType[] = [
  {
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "John Doe",
    userLastMessage: "Hey! How have you been?",
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/45.jpg",
    userName: "Alice Smith",
    userLastMessage: "Let's meet up tomorrow!",
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/28.jpg",
    userName: "Michael Brown",
    userLastMessage: "I'll send you the details soon.",
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/39.jpg",
    userName: "Sarah Johnson",
    userLastMessage: "Did you see the latest update?",
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/47.jpg",
    userName: "David Wilson",
    userLastMessage: "Thanks for your help earlier!",
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/26.jpg",
    userName: "Emma Thomas",
    userLastMessage: "I'll call you in 10 minutes.",
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/51.jpg",
    userName: "James Anderson",
    userLastMessage: "Let's finalize the project today.",
  },
];

function RoomsSidebar() {
  return (
    <>
      <h2 className="font-semibold text-lg pt-6 tracking-tighter">Rooms</h2>
      <div className="conversations__wrapper space-y-2 my-4">
        {conversations.map((conversation, index) => (
          <ConverstationCard key={index} {...conversation} />
        ))}
      </div>
    </>
  );
}

export default RoomsSidebar;
