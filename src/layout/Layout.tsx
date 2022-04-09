import { Typography } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import Library from "../library/Library";
import styles from "./Layout.module.css";
import Settings from "./components/Settings";
import ButtonAppBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useAppSelector } from "../store/hooks";
import { Route, Routes } from "react-router-dom";
// import Simulator from "Simulator/Simulator";

export default function Layout() {
  const settingsOpen = useAppSelector((state) => state.ui.settingIsVisible);
  const sideBarOpen = useAppSelector((state) => state.ui.drawerIsVisible);
  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns:
          (sideBarOpen === true ? "250px" : "0px") +
          " auto " +
          (settingsOpen === true ? "350px" : "0px"),
      }}
    >
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.navbar}>
        <ButtonAppBar />
      </div>
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="library" element={<Library />} />
        </Routes>
      </div>
      <div className={styles.settings}>
        <Settings />
      </div>
    </div>
  );
}
