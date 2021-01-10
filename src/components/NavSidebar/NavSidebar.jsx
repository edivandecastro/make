import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMenus, setActiveMenu } from '../../store/Menus/Menus.action';

const NavSidebar = () => {
  const dispatch = useDispatch();
  const { menus } = useSelector(state => state.menus);
  const { error } = useSelector(state => state.menus);
  const { message } = useSelector(state => state.menus);

  useEffect(() => {
    dispatch(getAllMenus());
  }, [dispatch])

  const renderSubmenu = (submenus) => {
    return <ul className="children collapse">
      { submenus.map(item => <li key={item.code}><Link to={item.resource}>{item.name}</Link></li>) }
    </ul>
  }

  var handleClick = (code) => {
    dispatch(setActiveMenu(code))
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
