import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";

const SidebarNav = () => {
  // const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "black",
          color: "white",
        },
      }}
      className="h-screen w-full"
    >
      {/* <button onClick={() => collapseSidebar()}>
        <MdArrowCircleRight className=" m-5 text-4xl font-semibold" />
      </button> */}
      <Menu
        rootStyles={{
          ["." + menuClasses.button]: {
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              color: "black",
              backgroundColor: "white",
            },
          },
        }}
        renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}
      >
        <MenuItem
          icon={<MdOutlineDashboardCustomize />}
          component={<Link to="/" />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<MdOutlinePointOfSale />}
          component={<Link to="/pos" />}
        >
          {" "}
          POS
        </MenuItem>
        <SubMenu icon={<MdOutlineInventory2 />} label="Inventory">
          <MenuItem
            icon={<MdOutlineManageSearch />}
            component={<Link to="/manage-products" />}
          >
            {" "}
            Manage Products{" "}
          </MenuItem>
          <MenuItem icon={<MdPostAdd />} component={<Link to="/add-product" />}>Add Products</MenuItem>
        </SubMenu>
        <MenuItem icon={<MdShoppingCartCheckout />} component={<Link to="/orders" />}>Orders</MenuItem>
        <MenuItem icon={<MdInsertChartOutlined />}> Reports</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarNav;
