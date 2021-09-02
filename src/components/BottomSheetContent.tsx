export const BottomSheetContent: React.FC = ({ children }) => {

  return (

    <div style={{
        overflow: "scroll",
        height: "90vh",
        overscrollBehavior: "auto contain"
    }}>
      { children }
    </div>
  );
}