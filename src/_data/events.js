// date format: YYYY-MM-DDTHH:mm


const events = [
    {
      name: "Journée Portes Ouvertes",
      imagePath: "",
      type: "jpo",
      startDate: "2025-06-14T10:00",
      endDate: "2025-06-14T19:00",
      description: "Journée Portes ouvertes dans les locaux du Club.",
      adress: "6 rue Saint-Martin à Verneuil sur Seine."
    },
    {
      name: "Journée Portes Ouvertes",
      imagePath: "",
      type: "jpo",
      startDate: "2025-09-10T14:00",
      endDate: "2025-09-10T20:00",
      description: "Journée Portes ouvertes dans les locaux du Club.",
      adress: "6 rue Saint-Martin à Verneuil sur Seine"
    },
    {
      name: "Journée Portes Ouvertes",
      imagePath: "",
      type: "jpo",
      startDate: "2025-09-13T10:00",
      endDate: "2025-09-13T19:00",
      description: "Journée Portes ouvertes dans les locaux du Club.",
      adress: "6 rue Saint-Martin à Verneuil sur Seine"
    },
    {
      name: "Journée Portes Ouvertes",
      imagePath: "",
      type: "jpo",
      startDate: "2025-09-15T14:00",
      endDate: "2025-09-15T20:00",
      description: "Journée Portes ouvertes dans les locaux du Club.",
      adress: "6 rue Saint-Martin à Verneuil sur Seine"
    },
    {
      name: "Journée Portes Ouvertes",
      imagePath: "",
      type: "jpo",
      startDate: "2025-09-17T14:00",
      endDate: "2025-09-17T20:00",
      description: "Journée Portes ouvertes dans les locaux du Club.",
      adress: "6 rue Saint-Martin à Verneuil sur Seine"
    },
    {
      name: "Journée Portes Ouvertes",
      imagePath: "",
      type: "jpo",
      startDate: "2025-09-20T10:00",
      endDate: "2025-09-20T19:00",
      description: "Journée Portes ouvertes dans les locaux du Club.",
      adress: "6 rue Saint-Martin à Verneuil sur Seine"
    },
    {
      name: "Journée Portes Ouvertes",
      imagePath: "",
      type: "jpo",
      startDate: "2025-09-22T14:00",
      endDate: "2025-09-22T20:00",
      description: "Journée Portes ouvertes dans les locaux du Club.",
      adress: "6 rue Saint-Martin à Verneuil sur Seine"
    },
    {
      name: "Stage d’espagnol de la 6ème à la Terminale",
      imagePath: "",
      type: "stage",
      startDate: "2025-08-25",
      endDate: "2025-08-29",
      description: "Du Lundi 25 au Vendredi 29 août  2025 : Stage d’espagnol de la 6ème à la Terminale (2 heures par jour)",
      adress: ""
    },
    {
      name: "Stage d’anglais de la 6ème à la Terminale",
      imagePath: "",
      type: "stage",
      startDate: "2025-08-25",
      endDate: "2025-08-29",
      description: "Du Lundi 25 au Vendredi 29 août  2025 : Stage d’anglais de la 6ème à la Terminale (2 heures par jour)",
      adress: ""
    },
    {
      name: "Forum intercommunal Vernouillet/Verneuil-sur-Seine",
      imagePath: "",
      type: "forum",
      startDate: "2025-09-06",
      endDate: "2025-09-06",
      description: "",
      adress: "Complexe sportif de l'Amandier rue du Pépin 78540 VERNOUILLET"
    },
    {
      name: "Forum des associations de Triel sur Seine",
      imagePath: "",
      type: "forum",
      startDate: "2025-09-06",
      endDate: "2025-09-06",
      description: "",
      adress: ""
    },
]

const MONTHS_FR_SHORT = [
  "Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin",
  "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."
];

//useful for minutes to always have two digits for minutes
// ex: 9h00 instead of 9h0
function padZero(num) {
  return num.toString().padStart(2, '0');
}

const cleanOrganisedEvents = events
  .filter(event => new Date(event.endDate) > new Date()) // keep only events who are not finished
  .sort((a, b) => new Date(a.startDate) - new Date(b.startDate)) // order events from the closest to the furthest
  .map(event => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);

    return {
      ...event,
      startDay: start.getDate(),
      startMonth: MONTHS_FR_SHORT[start.getMonth()], // getMonth return a number between 0 and 11
      startYear: start.getFullYear(),
      startHour: start.getHours(),
      startMinute: padZero(start.getMinutes()),

      endDay: end.getDate(),
      endMonth: MONTHS_FR_SHORT[end.getMonth()],
      endYear: end.getFullYear(),
      endHour: end.getHours(),
      endMinute: padZero(end.getMinutes()),
    }
  })
// Création des tableaux par type
const jpoEvents = cleanOrganisedEvents.filter(event => event.type === "jpo");
const forumEvents = cleanOrganisedEvents.filter(event => event.type === "forum");
const stageEvents = cleanOrganisedEvents.filter(event => event.type === "stage");

// Export multiple
module.exports = {
  allEvents: cleanOrganisedEvents,
  jpoEvents,
  forumEvents,
  stageEvents
};