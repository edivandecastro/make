import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { GetMenus } from '../../service/ChefApi';

const NavSidebar = () => {

  const getMenuApi = async () => {
    let menus = [];
    await GetMenus().then(res => {
      menus = res.data.menus;
    });
    return menus;
  }

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenuApi().then((menus) => setMenus(menus))
  }, [])

  const deactivateMenus = (menus, menu) => {
    menus.forEach(item => {
      if (item.code !== menu.code) item.className = ""
    });
    return menus;
  }

  const renderSubmenu = (submenus) => {
    return <ul className="children collapse">
      { submenus.map(item => <li key={item.code}><Link to={item.resource}>{item.name}</Link></li>) }
    </ul>
  }

  var handleClick = (code) => {
    var menu = menus.find(menu => menu.code === code );
    var index = menus.findIndex(menu => menu.code === code );

    if (menu.className === "") {
      menu.className = "active"
    } else {
      menu.className = ""
    }
    menus.splice(index, 1, menu);
    deactivateMenus(menus, menu)

    setMenus(menus);
  }

  const renderMenu = (item) => {
    return <li key={item.code} className={"nav-parent "+ item.className}>
      <a href="#" onClick={handleClick.bind(this, item.code)}>
        <i className={item.iconName}></i>
        <span>{item.name}</span>
        <span className="fa arrow"></span>
      </a>
      { renderSubmenu(item.submenus) }
    </li>
  }

  return (
    <ul className="nav nav-sidebar">
      { menus.map(item => renderMenu(item)) }
    </ul>
  );
}

export default withRouter(NavSidebar);
