import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { GetMenus } from '../../service/ChefApi';

  // const loadMenus = () => {
    // return [
    //   {
    //     code: "M01",
    //     name: "Recursos Humanos",
    //     iconName: "icon-people",
    //     className: "",
    //     submenus: [
    //       {
    //         code: "SM01",
    //         name: "Dashboard",
    //         iconName: "",
    //         resource: "/recursos_humanos",
    //       },
    //       {
    //         code: "SM02",
    //         name: "Colaboradores",
    //         iconName: "",
    //         resource: "/recursos_humanos/colaboradores",
    //         submenus: [
    //           {
    //             code: "LSM01",
    //             name: "Ver Todos",
    //             iconName: "",
    //             resource: "/recursos_humanos/colaboradores",
    //           },
    //           {
    //             code: "LSM02",
    //             name: "Cadastrar Novo",
    //             iconName: "",
    //             resource: "/recursos_humanos/colaboradores/cadastro",
    //           },
    //         ]
    //       },
    //     ]
    //   },
    //   {
    //     code: "M02",
    //     name: "Fluxos",
    //     resource: "localhost:3000/fluxos/dashboard",
    //     iconName: "icon-shuffle",
    //     className: "",
    //     submenus: [
    //       {
    //         code: "SMSRV02",
    //         name: "Recursos Humanos",
    //         resource: "http://localhost:3000/recursos_humanos/dashboard",
    //         iconName: "icon-people",
    //         className: "",
    //       },
    //     ]
    //   },
    //   {
    //     code: "M03",
    //     name: "Processos",
    //     resource: "localhost:3000/processos/dashboard",
    //     iconName: "icon-docs",
    //     className: "",
    //     submenus: [
    //       {
    //         code: "SMSRV03",
    //         name: "Recursos Humanos",
    //         resource: "http://localhost:3000/recursos_humanos/dashboard",
    //         iconName: "icon-people",
    //         className: "",
    //       },
    //     ]
    //   },
    //   {
    //     code: "M04",
    //     name: "Administração",
    //     iconName: "icon-docs",
    //     className: "",
    //     submenus: [
    //       {
    //         code: "SM03",
    //         name: "Menus",
    //         resource: "/administracao/menus/cadastro",
    //         iconName: "icon-people",
    //         className: "",
    //       },
    //     ]
    //   },
    // ]
  // }

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
