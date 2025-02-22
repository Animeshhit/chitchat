import ConversationsSidebar from "@/components/shared/sidebar/conversationsSidebar";
import PageWrapper from "@/components/shared/sidebar/PagesWrapper";

type Props = { children: React.ReactNode };

function layout({ children }: Props) {
  return (
    <PageWrapper sidebarComponent={<ConversationsSidebar />}>
      {children}
    </PageWrapper>
  );
}

export default layout;
