export const navItems = [
  {
    name: 'Accueil',
    url: '/home',
    icon: 'icon-home',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  // Ajout
  {
    title: true,
    name: 'Menu',
  },
  {
    name: 'Menu de la semaine',
    url: '/menu/menuList',
    icon: 'icon-map',
  },
  {
    title: true,
    name: 'Compte'
  },
  {
    name: 'Panier',
    url: '/compte/shopping-cart',
    icon: 'icon-basket-loaded',
  },
  {
    name: 'Profil',
    url: '/compte/profil',
    icon: 'icon-user',
  },
  {
    name: 'Déconnexion',
    url: '/deconnnexion',
    icon: 'icon-lock'
  },

  {
    title: true,
    name: 'Cantinière'
  },
  {
    name: 'Liste Commandes',
    url: '/commandes/list-commande',
    icon: 'icon-check',
  },
  {
    name: 'Gérer Menu',
    url: '/gestion-menu/creer-menu',
    icon: 'icon-note'
  },
  {
    name: 'Gérer Plats',
    url: '/gestion-plat/gerer-plat',
    icon: 'icon-pencil'
  },
  {
    name: 'Gérer Users',
    url: '/gestion-user/gerer-user',
    icon: 'icon-pencil'
  },

  // Fin ajout

  {
    divider: true
  },

];
