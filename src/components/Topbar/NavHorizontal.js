import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavHorizontal extends Component {
  constructor(props) {
    super(props);

    var listMenus = [
      {
        code: "M01",
        name: "Recursos Humanos",
        iconName: "icon-people",
        className: "",
        submenus: [
          {
            code: "SM01",
            name: "Dashboard",
            open: "",
            iconName: "",
            resource: "/recursos_humanos",
          },
          {
            code: "SM02",
            name: "Colaboradores",
            open: "",
            iconName: "fa-users",
            resource: "/recursos_humanos/colaboradores",
            submenus: [
              {
                code: "LSM01",
                name: "Ver Todos",
                iconName: "",
                resource: "/recursos_humanos/colaboradores",
              },
              {
                code: "LSM02",
                name: "Cadastrar Novo",
                iconName: "",
                resource: "/recursos_humanos/colaboradores/cadastro",
              },
            ]
          },
          {
            code: "SM03",
            name: "Funções",
            open: "",
            iconName: "fa-users",
            resource: "/recursos_humanos/colaboradores",
            submenus: [
              {
                code: "LSM01",
                name: "Ver Todos",
                iconName: "",
                resource: "/recursos_humanos/colaboradores",
              },
              {
                code: "LSM02",
                name: "Cadastrar Novo",
                iconName: "",
                resource: "/recursos_humanos/colaboradores/cadastro",
              },
            ]
          },
        ]
      },
      {
        code: "M02",
        name: "Fluxos",
        resource: "localhost:3000/fluxos/dashboard",
        iconName: "icon-shuffle",
        className: "",
        submenus: [
          {
            code: "SM02",
            name: "Recursos Humanos",
            open: "",
            resource: "http://localhost:3000/recursos_humanos/dashboard",
            iconName: "icon-people",
            className: "",
          },
        ]
      },
      {
        code: "M03",
        name: "Processos",
        resource: "localhost:3000/processos/dashboard",
        iconName: "icon-docs",
        className: "",
        submenus: [
          {
            code: "SM04",
            name: "Recursos Humanos",
            resource: "http://localhost:3000/recursos_humanos/dashboard",
            iconName: "icon-people",
            className: "",
          },
        ]
      },
      {
        code: "M04",
        name: "Administração",
        iconName: "icon-docs",
        className: "",
        submenus: [
          {
            code: "SM04",
            name: "Menus",
            resource: "/administracao/menus/cadastro",
            iconName: "icon-people",
            className: "",
          },
        ]
      },
    ]

    this.state = {
      modCode: props.modCode,
      menus: listMenus,
    }
  }

  onMouseOverHandle = (code) => {
    var menus = this.state.menus;

    menus.forEach(item => {
      var submenu = item.submenus.find(submenu => submenu.code === code );
      if (submenu) {
        submenu.open = "open"
      }
    });

    this.setState({menus: menus});
  }

  onMouseOutHandle = (code) => {
    var menus = this.state.menus;

    menus.forEach(item => {
      var submenu = item.submenus.find(submenu => submenu.code === code );
      if (submenu) {
        submenu.open = ""
      }
    });

    this.setState({menus: menus});
  }

  render() {
    var menus = this.state.menus;
    var modCode = this.state.modCode;
    var menu = menus.find(menu => menu.code === modCode);

    return <ul className="nav nav-horizontal">
      { menu.submenus.map(item => this.renderMenu(item)) }
    </ul>
  }

  renderMenu(menu) {
    return <li className={"nav-parent active " + menu.open}
      onMouseOver={this.onMouseOverHandle.bind(this, menu.code)}
      onMouseOut={this.onMouseOutHandle.bind(this, menu.code)} >

      <a href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" data-delay="30">
        <i className={"fa " + menu.iconName}></i> { menu.name } <i className="icons-arrows-06"></i>
      </a>
      { this.renderSubmenu(menu.submenus) }
    </li>
  }

  renderSubmenu(submenus) {
    if (!submenus) return;
    var dropdownMenu = <ul className="dropdown-menu">
      { submenus.map(item => <li className=""><Link to={item.resource}>{item.name}</Link></li>) }
    </ul>
    return dropdownMenu;
  }
}
