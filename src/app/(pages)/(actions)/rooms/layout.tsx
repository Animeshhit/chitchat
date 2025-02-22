import RoomsSidebar from "@/components/shared/sidebar/RoomsSidebar";
import PagesWrapper from "@/components/shared/sidebar/PagesWrapper";
type Props = { children: React.ReactNode };

function layout({ children }: Props) {
  return (
    <PagesWrapper sidebarComponent={<RoomsSidebar />}>{children}</PagesWrapper>
  );
}

export default layout;
