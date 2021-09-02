export const BottomSheetContent: React.FC = ({ children }) => {

  return (

    <div style={{
        overflow: "scroll",
        height: "100vh"
    }}>
      { children }
    </div>
  );
}