export const BottomSheetContent: React.FC = ({ children }) => {

  return (
    
    //  Some work needed for inner content of a sheet-modal
    //  Scroll is a bit buggy when sheet is full height
    //  Scroll the content down, then try and scroll up

    //  Maybe some functionality needed on the Sheet Modal component to keep track of inner content scroll position and only interact with modal if scroll position of inner content is back to top OR if only interacting with the modal container (edges, top, etc)
    <div style={{
        overflow: "scroll",
        height: "100vh"
    }}>
      { children }
    </div>
  );
}