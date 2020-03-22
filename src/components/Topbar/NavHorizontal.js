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
            iconName: "",
            resource: "/recursos_humanos",
          },
          {
            code: "SM02",
            name: "Colaboradores",
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
            code: "SMSRV02",
            name: "Recursos Humanos",
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
            code: "SMSRV03",
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
            code: "SM01",
            name: "Menus",
            resource: "/administracao/menus/cadastro",
            iconName: "icon-people",
            className: "",
          },
        ]
      },
    ]

    this.state = {
      menuState: "",
      modCode: props.modCode,
      menus: listMenus,
    }
  }

  onMouseOverHandle = () => {
    this.setState({menuState: "open"});
  }

  onMouseOutHandle = () => {
    this.setState({menuState: ""});
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
    console.log(menu.submenus);
    return <li className={"nav-parent active " + this.state.menuState}
      onMouseOver={this.onMouseOverHandle}
      onMouseOut={this.onMouseOutHandle} >

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
