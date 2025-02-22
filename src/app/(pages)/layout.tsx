import TabsWrapper from "@/components/shared/sidebar/TabsWrapper";
type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return <TabsWrapper>{children}</TabsWrapper>;
}

export default layout;