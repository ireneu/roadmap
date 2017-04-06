/*
 * General information for the Roadmap.
 *
 * Fields: title, description.
 */
var generalData = {
    title: 'Roadmap',
    description: '<span class="glyphicon glyphicon-ok"></span> A simple interface for a team\'s or organization\'s tasks.'
};

/*
 * Team members to assign tasks to.
 *
 * Each team member can have the following fields:
 *  - color: optional background color for tasks assigned to member.
 *           css color format (e.g. #fafafa, yellow, rgb(255, 200, 200)...)
 *           makes roadmap nicer, light colors make good backgrounds.
 *  - name: display name for member's tasks
 */
var team = {
    president: {
        color: '#ffcccc',
        name: 'Président'
    },
    tresorier: {
        color: '#ffebcc',
        name: 'Trésorier'
    },
    secretaire: {
        color: '#ccffcc',
        name: 'Secrétaire'
    },
    regates: {
        color: '#ccccff',
        name: 'Resp. régates'
    },
    sponsoring: {
        color: '#f5d6eb',
        name: 'Resp. sponsoring'
    },
    materiel: {
        color: '#ffe6cc',
        name: 'Resp. matériel'
    },
    navigation: {
        color: '#ccf5ff',
        name: 'Resp. navigation'
    },
    animation: {
        color: '#ffffcc',
        name: 'Resp. animation'
    },
    communication: {
        color: '#e0e0eb',
        name: 'Resp. communication'
    }
};

/*
 * List of tasks for the roadmap.
 *
 * Each task can have the following fields:
 *  - month: integer from 1 to 12
 *  - person: team member assigned to the task
 *  - title: task title
 *  - description: general text/html task description.
 *                 Team members can be tagged in description using @identifier notation (e.g. @nickname)
 *  - date: optional field if more precise date information is needed (e.g. 1st, 30th or second week)
 */
var tasksData = [
    // president
    {
        month: 9,
        person: team.president,
        title: 'AG',
        description: 'Envoyer convocation et ordre du jour aux membres pour l\'assemblée générale qui se déroule pendant le mois de septembre.<br>' +
        '<span class="label label-danger">Important</span> Envoyer convocation et OJ minimum 2 semaines avant !<br>' +
        '<code>Wimi > Documents officiels > PVAG</code>'
    },
    {
        month: 9,
        date: 'Fin du mois',
        person: team.president,
        title: 'Demande subside SSU',
        description: 'Préparer et envoyer la demande de subside annuelle au Service du Sport Universitaire. Documents:<br />' +
                     '<ul>' +
                        '<li>Feuille d\'auto-évaluation du club.</li>' +
                        '<li>Comptabilité (bilan et écritures) approuvée par l\'AG et comparatif des comptes (@tresorier).</li>' +
                        '<li>Liste des membres avec statut universitaire (@secretaire).</li>' +
                        '<li>Rapport retombés médiatiques et résultats significatifs (@communication).</li>' +
                     '</ul>' +
                     '<code>Wimi > SSU</code>'
    },
    {
        month: 10,
        date: 'Date à confirmer',
        person: team.president,
        title: 'Demande subvention DAF',
        description: 'Préparer et envoyer la demande de subvention annuelle au DAF (EPFL). Documents:<br />' +
        '<ul>' +
            '<li>Formulaire du DAF.</li>' +
            '<li>Bilan approuvée par l\'AG (@tresorier).</li>' +
            '<li>PV de l\'AG.</li>' +
            '<li>Liste du comité avec données de contact.</li>' +
            '<li>Dossier sponsoring général du club (@sponsoring).</li>' +
            '<li>Budget pour l\'an suivant (@tresorier).</li>' +
            '<li>Pour le rapport d\'activité les reférer au site web du club (doit être complèt !)</li>' +
        '</ul>' +
        '<code>Wimi > EPFL DAF</code>'
    },
    // tresorier
    {
        month: 8,
        date: '31',
        person: team.tresorier,
        title: 'Boucler comptabilité'
    },
    // secretaire
    {
        month: 2,
        date: 'Rentrée universitaire',
        person: team.secretaire,
        title: 'Email aux étudiants',
        description: 'Envoyer email à tous les étudiants pour leur présenter le club et les inviter à la journée de présentation.<br>' +
        'Joindre les infos de la Journée Voile Légère le cas échéant.'
    },
    {
        month: 9,
        person: team.secretaire,
        title: 'Email aux étudiants',
        description: 'Envoyer email à tous les étudiants pour leur présenter le club et les inviter à la journée de présentation.<br>' +
            'Joindre les infos de la Journée Voile Légère le cas échéant.'
    },
    // sponsoring
    {
        month: 12,
        person: team.sponsoring,
        title: 'Demande soutien Ville de Lausanne',
        description: 'Envoyer lettre de demande de soutien avec le dossier au service des sports de la Ville de Lausanne.<br>' +
            '<span class="label label-warning">Note</span> Possibilité de l\'envoyer par email.<br>' +
            '<code>Wimi > Ville de Lausanne</code>'
    },
    // animation
    {
        month: 5,
        person: team.animation,
        title: 'Journée Voile Légère',
        description: 'Organiser la traditionnelle Journée Voile Légère au centre nautique de Dorigny avec 1h de voile et barbecue pour les participants.<br>' +
        '<span class="label label-danger">Important</span> Réserver la date au moins 2 mois avant auprès du centre nautique.<br>' +
        '<code>Wimi > Journée Voile Légère</code>'
    },
    {
        month: 9,
        person: team.animation,
        title: 'Journée Voile Légère',
        description: 'Organiser la traditionnelle Journée Voile Légère au centre nautique de Dorigny avec 1h de voile et barbecue pour les participants.<br>' +
            '<span class="label label-danger">Important</span> Réserver la date au moins 2 mois avant auprès du centre nautique.<br>' +
            '<code>Wimi > Journée Voile Légère</code>'
    },
    {
        month: 11,
        person: team.animation,
        title: 'Repas des membres',
        description: 'Organiser repas pour les members à faire avant la fin de l\'année et des examens de fin de semestre ; )'
    },
];