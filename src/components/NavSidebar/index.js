import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavSidebar extends Component {
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
            iconName: "",
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
            code: "SM03",
            name: "Menus",
            resource: "/administracao/menus/cadastro",
            iconName: "icon-people",
            className: "",
          },
        ]
      },
    ]

    this.state = {menus: listMenus};
  }

  handleClick = (code) => {
    var menus = this.state.menus;

    var menu = menus.find(menu => menu.code === code );
    var index = menus.findIndex(menu => menu.code === code );

    if (menu.className === "") {
      menu.className = "active"
    } else {
      menu.className = ""
    }
    menus.splice(index, 1, menu);
    this.deactivateMenus(menus, menu)

    this.setState({menus: menus});
  }

  deactivateMenus = (menus, menu) => {
    menus.forEach(item => {
      if (item.code != menu.code) item.className = ""
    });
    return menus;
  }

  render() {
    return <ul className="nav nav-sidebar">
      { this.state.menus.map(item => this.renderMenu(item)) }
    </ul>
  }

  renderMenu(item) {
    return <li className={"nav-parent "+ item.className}>
      <a href="#" onClick={this.handleClick.bind(this, item.code)}>
        <i className={item.iconName}></i>
        <span>{item.name}</span>
        <span className="fa arrow"></span>
      </a>
      { this.renderSubmenu(item.submenus) }
    </li>
  }

  renderSubmenu(submenus) {
    return <ul className="children collapse">
      { submenus.map(item => <li><Link to={item.resource}>{item.name}</Link></li>) }
    </ul>
  }
}

export default withRouter(NavSidebar);
