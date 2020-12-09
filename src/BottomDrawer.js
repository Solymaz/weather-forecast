import React, { useState } from "react";
import Drawer from "react-bottom-drawer";
import DrawerContent from "./DrawerContent";

export default function BottomDrawer() {
  const [isVisible, setIsVisible] = useState(false);

  const closeDrawer = () => {
    setIsVisible(false);
  };
  const openDrawer = () => {
    setIsVisible(true);
  };

  return (
    <div className="Drawer">
      <center>
        <button className="open-btn" onClick={openDrawer}>
          ^
        </button>
      </center>
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <DrawerContent />
      </Drawer>
    </div>
  );
}
