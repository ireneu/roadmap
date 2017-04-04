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
    nickname: {
        color: '#ffd9b3',
        name: 'Designer'
    },
    handle: {
        color: '#b3ecff',
        name: 'Salesman'
    },
    username: {
        name: 'Marketer'
    },
    pseudonym: {
        color: '#d9b3ff',
        name: 'SysAdmin'
    }
};

/*
 * List of tasks for the roadmap.
 *
 * Each task can have the following fields:
 *  - month: integer from 1 to 12
 *  - person: team member assigned to the task
 *  - title: task title
 *  - description: general text/html task description
 *  - date: optional field if more precise date information is needed (e.g. 1st, 30th or second week)
 */
var tasksData = [
    {
        month: 9,
        person: team.nickname,
        title: 'Newsletter design',
        description: 'Start designing the newsletter template for the following year.'
    },
    {
        month: 2,
        person: team.handle,
        title: 'Call resellers',
        description: 'Call resellers in areas where newsletters received many clicks with special offers. Get the locality rankings for the previous month from the IT department. <br>Offer guidelines according to ranking evolution, ordered volume and current room temperature can be found on the internal server\'s offer folder.',
    },
    {
        month: 12,
        person: team.username,
        title: 'Write newsletter content',
        description: 'Use your inspiration to write a better description for this task as well.'
    },
    {
        month: 5,
        date: '30th',
        person: team.pseudonym,
        title: 'Get raise',
        description: 'Go see CEO on the day while he is walking to the helicopter that takes him on his bi-annual 3 month vacation so that he sends you a postcard.'
    }
];