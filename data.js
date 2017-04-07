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
        color: '#ccffff',
        name: 'Resp. matériel'
    },
    navigation: {
        color: '#ccaaff',
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
 *  - month: integer from 1 to 12 for each month. 0 for a general task, not associated to any particular month.
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
        date: 'fin septembre',
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
        date: 'date à confirmer',
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
        month: 0,
        person: team.tresorier,
        description: '<ul>' +
            '<li>Gérer les comptes et les payements</li>' +
            '<li>Faire écritures comptables</li>' +
            '<li>Tenir à jour le budget de fonctionnement</li>' +
            '<li>Communiquer et consulter le comité pour les réallocations, dépassements...</li>' +
            '<li>Validation des nouvelles inscriptions</li>' +
            '</ul>'
    },
    {
        month: 8,
        date: '31 aout',
        person: team.tresorier,
        title: 'Boucler comptabilité',
        description: 'Préparer bilan, écritures et compta que tout soit vérifié par les vérificateurs de comptes avant l\'AG. Préparer également le budget général et de fonctionnement pour la saison suivante.'
    },
    // secretaire
    {
        month: 2,
        date: 'rentrée universitaire',
        person: team.secretaire,
        title: 'Email aux étudiants',
        description: 'Envoyer email à tous les étudiants pour leur présenter le club et les inviter à la journée de présentation.<br>' +
        '<span class="label label-warning">Note</span> Joindre les infos de la Journée Voile Légère le cas échéant.'
    },
    {
        month: 9,
        date: 'rentrée universitaire',
        person: team.secretaire,
        title: 'Email aux étudiants',
        description: 'Envoyer email à tous les étudiants pour leur présenter le club et les inviter à la journée de présentation.<br>' +
            '<span class="label label-warning">Note</span> Joindre les infos de la Journée Voile Légère le cas échéant.'
    },
    // regate
    {
        month: 3,
        person: team.regates,
        title: 'Annoncer programme de régates lémaniques',
        description: 'Donner aux membres les dates connues pour les régates du début de saison.<br>' +
            '<span class="label label-danger">Important</span> Prévoir la Régate Inter-Écoles.'
    },
    {
        month: 5,
        person: team.regates,
        title: 'Planification automne international',
        description: 'Commencer de fixer les équipages qui partiront aux régates internationales ayant lieu en automne.<br>' +
        '<ul>' +
        '<li>Trophée de l\'Île Pelée</li>' +
        '<li>SYWoC</li>' +
        '</ul>' +
        'Assurer la fin de saison de l\'équipe qui fait la saison lémanique en Surprise.'
    },
    {
        month: 9,
        person: team.regates,
        title: 'Présentation du club et des régates',
        description: 'Présentation du club et des activités du club pour les nouveaux membres intéressés à naviguer ou régater, sur le Léman et à l\'international.'
    },
    {
        month: 10,
        person: team.regates,
        title: 'Planification printemps international',
        description: 'Commencer de fixer les équipages qui partiront aux régates internationales ayant lieu au printemps.<br>' +
            '<ul>' +
                '<li>Voiles étudiantes du Havre</li>' +
                '<li>Course Croisière EDHEC</li>' +
                '<li>Spi-Ouest France</li>' +
                '<li>Match races</li>' +
            '</ul>' +
            'Fixer également l\'équipe ou le noyau qui va régater toute la saison lémanique suivante sur un des Surprises.'
    },
    // sponsoring
    {
        month: 2,
        date: 'date à confirmer',
        person: team.sponsoring,
        title: 'Forum EPFL',
        description: 'Si pas de contrat en vigueur, faire demande de sponsoring au Forum EPFL.'
    },
    {
        month: 10,
        person: team.sponsoring,
        title: 'Mise à jour des dossiers',
        description: 'Mise à jour les dossiers sponsoring (palmarès, offres du club...) pour la recherche de sponsors pour le club et pour les événements de la prochaine saison.'
    },
    {
        month: 12,
        person: team.sponsoring,
        title: 'Demande soutien Ville de Lausanne',
        description: 'Envoyer lettre de demande de soutien avec le dossier au service des sports de la Ville de Lausanne.<br>' +
            '<span class="label label-warning">Note</span> Possibilité de l\'envoyer par email.<br>' +
            '<code>Wimi > Ville de Lausanne</code>'
    },
    // materiel
    {
        month: 3,
        person: team.materiel,
        title: 'Mettre LUC Voile 1 à l\'eau',
        description: 'Débacher le Surprise, le mettre à l\'eau et le préparer pour la saison.'
    },
    {
        month: 4,
        person: team.materiel,
        title: 'Entretien LUC Voile 2',
        description: 'Caréner et assurer que le Surprise est prêt pour la saison.'
    },
    {
        month: 8,
        person: team.materiel,
        title: 'Entretien des Surprises',
        description: 'Assurer que les Surprises sont prêts pour la fin de saison.'
    },
    {
        month: 10,
        person: team.materiel,
        title: 'Hiverner LUC Voile 1',
        description: 'Sortir le Surprise de régate de l\'eau en fin de la saison et le préparer pour l\'hivernage. S\'organiser avec le centre nautique pour l\'entreposer.<br>' +
            '<span class="label label-warning">Note</span> Ne pas enlever les drisses GV et foc des taquets "constrictor".'
    },
    // navigation
    {
        month: 9,
        person: team.navigation,
        title: 'Présenter Surprise aux nouveaux membres',
        description: 'Rendez-vous au port pour faire découvrir le Surprise destinée à la plaisance et régate aux nouveaux membres.'
    },
    // animation
    {
        month: 5,
        date: 'un dimanche après-midi',
        person: team.animation,
        title: 'Journée Voile Légère',
        description: 'Organiser la traditionnelle Journée Voile Légère au centre nautique de Dorigny avec 1h de voile et barbecue pour les participants.<br>' +
        '<span class="label label-danger">Important</span> Réserver la date au moins 2 mois avant auprès du centre nautique.<br>' +
        '<code>Wimi > Journée Voile Légère</code>'
    },
    {
        month: 9,
        date: 'un dimanche après-midi',
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
    // other
    {
        month: 3,
        title: 'Début de saison'
    },
    {
        month: 3,
        title: 'Voiles Étudiantes du Havre'
    },
    {
        month: 4,
        title: 'Course Croisière EDHEC'
    },
    {
        month: 4,
        title: 'Spi-Ouest France'
    },
    {
        month: 6,
        title: 'Genève-Rolle-Genève et Bol d\'Or'
    },
    {
        month: 7,
        title: '6h de Nernier'
    },
    {
        month: 8,
        title: '5 jours du Léman'
    },
    {
        month: 8,
        title: 'Translémanique en solitaire'
    },
    {
        month: 9,
        title: 'La double de Versoix'
    },
    {
        month: 10,
        title: 'Trophée de l\'Île Pelée'
    },
    {
        month: 11,
        title: 'SYWoC'
    },
    {
        month: 11,
        title: 'Fin de saison'
    }
];