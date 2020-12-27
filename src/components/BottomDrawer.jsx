import React, { useState } from "react";
import Drawer from "react-bottom-drawer";
import DrawerContent from "./DrawerContent.jsx";
import "./BottomDrawer.css";

export default function BottomDrawer({ forecast, unit }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="drawerWrapper">
      <button className="drawerBtn" onClick={() => setIsVisible(true)}>
        ︿
      </button>
      <div className="Drawer">
        <Drawer
          duration={250}
          hideScrollbars={true}
          onClose={() => setIsVisible(false)}
          isVisible={isVisible}
        >
          <DrawerContent forecast={forecast} unit={unit} />
        </Drawer>
      </div>
    </div>
  );
}
