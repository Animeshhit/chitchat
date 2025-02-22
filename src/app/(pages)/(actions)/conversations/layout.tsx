import ConverSationSidebar from "@/components/shared/sidebar/ConversationsSidebar";
import PageWrapper from "@/components/shared/sidebar/PagesWrapper";

type Props = { children: React.ReactNode };

function layout({ children }: Props) {
  return (
    <PageWrapper sidebarComponent={<ConverSationSidebar />}>
      {children}
    </PageWrapper>
  );
}

export default layout;
