// ============================================
// Configuration centrale du bot Famille Lawrence
// ============================================

module.exports = {
  // -- Salons ----------------------------------
  channels: {
    annonces:     '1528759685895684227',
    radio:        '1528759883007135784',
    logs:         '1528760358150471691',
    absence:      '1528759479556898826',
    demandeRole:  '1528758914550861874',
    mediaStorage: '1528764942965014718',  // Salon privé invisible (bot only) pour stocker les images
  },

  // -- Roles -----------------------------------
  roles: {
    accesBot: '1528754729277063168',  // Peut utiliser les commandes du bot
    membreFamille: '1528755396284514495',  // Membres de la Famille Lawrence (peuvent /absence)
    avert1:   '1528755074698838026',  // Avertissement niveau 1
    avert2:   '1528755059876167700',  // Avertissement niveau 2
    avert3:   '1528755037835231393',  // Avertissement niveau 3
  },

  // -- Avertissements --------------------------
  // Mapping niveau -> ID de role (utilise par le systeme d'avertissements)
  avertissements: {
    1: '1528755074698838026',
    2: '1528755059876167700',
    3: '1528755037835231393',
  },

  // -- Couleurs embed --------------------------
  colors: {
    primary:  0x2C3E50, // Bleu nuit - couleur par defaut, a personnaliser
    success:  0x2ECC71,
    danger:   0xE74C3C,
    warning:  0xF39C12,
    info:     0x3498DB,
    dark:     0x000000,
  },

  // -- Divers ----------------------------------
  footerText: 'Famille Lawrence',

  // -- Branding --------------------------------
  // Banniere officielle Famille Lawrence (utilisee sur TOUS les embeds via .setImage)
  // A remplacer par l'URL de votre banniere
  bannerUrl: '',
};
