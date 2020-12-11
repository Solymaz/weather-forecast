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
    <div className="Drawer">
      <center>
        <button className="drawerBtn" onClick={openDrawer}>
          ^
        </button>
      </center>
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <DrawerContent weatherData={props.weatherData} />
      </Drawer>
    </div>
  );
}
