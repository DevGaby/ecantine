export const navItems = [
  {
    name: 'Accueil',
    url: '/home',
    icon: 'icon-speedometer',
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
    icon: 'icon-layers',
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
    name: 'Commandes',
    url: '/commandes/list-commande',
    icon: 'icon-pencil',
  },
  {
    name: 'Menus Hebdomadaire',
    url: '/gestion-menu/creer-menu',
    icon: 'icon-puzzle'
  },
  {
    name: 'Plats',
    url: '/gestion-plat/ajouter-plat',
    icon: 'icon-puzzle'
  },

  // Fin ajout

  {
    divider: true
  },

];
