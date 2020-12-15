import React, { useState } from "react";
import Drawer from "react-bottom-drawer";
import DrawerContent from "./DrawerContent";
import "./BottomDrawer.css";

export default function BottomDrawer(props) {
  const [isVisible, setIsVisible] = useState(false);

  const closeDrawer = () => {
    setIsVisible(false);
  };
  const openDrawer = () => {
    setIsVisible(true);
  };

  return (
    <div className="drawerWrapper">
      <button className="drawerBtn" onClick={openDrawer}>
        ︿
      </button>
      <div className="Drawer">
        <Drawer
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer}
          isVisible={isVisible}
        >
          <DrawerContent weatherData={props.weatherData} unit={props.unit} />
        </Drawer>
      </div>
    </div>
  );
}
