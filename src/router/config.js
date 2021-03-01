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
  },
  {
    path: "/incubateur/simplicite",
    exact: true,
    component: "Simplicite"
  },
  {
    path: "/mentions-legales",
    exact: true,
    component: "Mentions"
  },
  {
    path: "/nos-partenaires",
    exact: true,
    component: "Partenaires"
  }
];

export default routes;
