const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/incubateur", "/incubateur"],
    exact: true,
    component: "Incubateur",
  },
  {
    path: "/incubateur/nos-commerces",
    exact: true,
    component: "Noscommerces"
  },
  {
    path: "/incubateur/restauration",
    exact: true,
    component: "Restauration"
  }
];

export default routes;
