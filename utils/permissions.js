const config = require('./config');

function hasAccess(member) {
  return member.roles.cache.has(config.roles.accesBot);
}

function hasFamilyRole(member) {
  return member.roles.cache.has(config.roles.membreFamille);
}

function isAdmin(member) {
  return (
    member.permissions.has('Administrator') ||
    member.permissions.has('ManageGuild') ||
    member.roles.cache.has(config.roles.accesBot)
  );
}

async function denyAccess(interaction, message = "🚫 Tu n'as pas la permission d'utiliser cette commande.") {
  return interaction.reply({ content: message, ephemeral: true });
}

module.exports = { hasAccess, hasFamilyRole, isAdmin, denyAccess };
