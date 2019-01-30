export class Ticket {

  constructor(
    public id_ticket: number,    // Id du ticket
    public creatorId: number,    // ID du createur du ticket
    public label: string,        // Titre du ticket
    public category: string,
    public type: string,
    public description: string, // Description de la demande
    public date: Date,           // Date de céation du ticket
    public siteId: number,       // Id de site ou a été creer le ticket
    public stateId: number,      // Id statut du ticket
    public actif: boolean,       // Etat du ticket (false=archivage)
    public upload: {},           // Tableau du/des pieces jointe(s) du ticket
    public assignorId: number,   // Id de l'admin qui assigne le ticket
    public assigneeId: number,   // Id technicien qui recoit le ticket
    public usersId: {}           // Tableau de tous les utilisateurs
  ) {
    this.id_ticket = id_ticket;
    this.creatorId = creatorId;
    this.label = label;
    this.category = category;
    this.type = type;
    this.description = description;
    this.date = date;
    this.siteId = siteId;
    this.stateId = stateId;
    this.actif = actif;
    this.upload = upload;
    this.assignorId = assignorId;
    this.assigneeId = assigneeId;
    this.usersId = usersId;
  }
}
