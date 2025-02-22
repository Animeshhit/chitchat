function page() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <h2>No Conversations Are Opened Yet....</h2>
      </div>
    </>
  );
}

/*
app 
  -- Layout.tsx
      (pages)
      - page.tsx
      - layout.tsx --> (smallNavbar)
        - (otherpages)
        - conversations
          - page.tsx
        - rooms 
          - page.tsx
      - layout.tsx --> (MainSidebar)
 components 
   -- shared
      --sidebar
       - ConversationsSidebar.tsx (Page specific sidebar)
       - MainSidebar.tsx (MainSidebar)
       - SideBarWrapper.tsx (smallNavbar)
   -- ui
*/

export default page;
