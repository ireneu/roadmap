/**
 * @author: Ireneu Pla
 *
 * Requires jQuery's $ to be in the namespace, as well as variables generalData, team and tasksData, normally found in
 * data.js (in the folder's root folder).
 */

// Useful variables.
var monthNames = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

var monthPanels = {}, monthCollapsers = {}, JSONtasks;

/**
 * Sets roadmap's header title and description. Also adds all months to filter by month dropdown.
 * @param {object} generalData
 */
function setHeader(generalData) {
    document.getElementsByTagName('title')[0].innerHTML = generalData.title;
    document.getElementById('roadmap-header').innerHTML = generalData.title + ' <small>' + generalData.description + '</small>';
}

/** Creates monthly task panels and adds them to DOM. */
function createMonthPanels() {
    var monthsContainer = $('#months');
    var filterMonthDropdown = $('#filter-month-dropdown');
    for (var i = 1; i < 13; i++) {
        var monthContainerId = i;
        monthsContainer.append(
            '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                    '<h5 class="panel-title">' +
                        '<a role="button" href="#' + monthContainerId + '" data-toggle="collapse">' +
                            monthNames[i] +
                        '</a>' +
                    '</h5>' +
                '</div>' +
                '<div id="' + monthContainerId + '" class="panel-collapse collapse in">' +
                    '<div class="panel-body month">' +
                    '</div>' +
            '</div>');
        monthCollapsers[i] = $('#' + monthContainerId);
        monthPanels[i] = $('#' + monthContainerId + '> .panel-body');
        filterMonthDropdown.append('<li><a href="#" onclick="filterMonth(' + i + ')">' + monthNames[i] + '</a></li>');
    }
}

/**
 * Collapses all months except parameter.
 * @param {number} month - ideally between 1 and 12
 */
function filterMonth(month) {
    for (var i = 1; i < 13; i++) {
        if (i === month) {
            monthCollapsers[i].collapse('show');
        } else {
            monthCollapsers[i].collapse('hide');
        }
    }
}

/** Uncollapses all month panels */
function showAllMonths() {
    for (var i = 1; i < 13; i++) { monthCollapsers[i].collapse('show'); }
}

/**
 * Display tasks assigned to the team member of mentioning her/him in DOM.
 * @param {string} personName
 */
function filterPerson(personName) {
    clearTasks();
    personTasks = JSON.search(JSONtasks, '//*[name="' + personName + '"]/.. | //*[contains(description, "' + personName + '")]');
    displayTasks(personTasks);
    showAllMonths();
}

/** Duh! */
function showAllPeople() {
    clearTasks();
    displayTasks(JSONtasks.src);
}

/**
 * Adds all roles in team to filter by person dropdown.
 * @param {object} team
 */
function populatePeopleList(team) {
    var filterPeopleDropdown = $('#filter-person-dropdown');
    for (var person in team) {
        filterPeopleDropdown.append('<li><a href="#" onclick="filterPerson(\'' + team[person].name + '\')">' + team[person].name + '</a></li>');
    }
}

/**
 * Unleashed Defiant.js' power.
 */
function generateTasksJSON() {
    var tasksJSON = JSON.parse(JSON.stringify(tasksData));
    for (var task in tasksJSON) {
        tasksJSON[task].description = tasksJSON[task].description.replace(/(^|\s)@(\w+)($|\s|\.)/gi, function(match, before, username, after) { return before + '<em>' + team[username].name + '</em>' + after })
    }
    JSONtasks = Defiant.getSnapshot(tasksJSON);
}

/**
 * Generates HTML to display a task.
 * @param {object} task
 * @return {string} HTML for given task
 */
function renderTaskHTML(task) {
    return '' +
        '<div class="panel panel-default task" style="background-color:' + (task.person.color || '#ffffff') + '">' +
            '<div class="media panel-body">' +
                '<div class="media-body">' +
                    '<span class="task-title">' + task.title + '</span> ' +
                    '<span class="task-person"> - ' + (task.person.name || '') + '</span> ' +
                    '<span class="task-date">' + (task.date || '') + '</span><br />' +
                    (task.description || '') +
                '</div>' +
            '</div>' +
        '</div>'
}

/**
 * Adds given tasks to appropriate month panel in DOM.
 * @param {object[]} tasks
 */
function displayTasks(tasks) {
    for (var task in tasks) {
        monthPanels[tasks[task].month].append(renderTaskHTML(tasks[task]));
    }
}

/** Clears all tasks from month panels */
function clearTasks() {
    $('.month').empty();
}

window.onload = function () {
    setHeader(generalData);
    createMonthPanels();
    populatePeopleList(team);
    generateTasksJSON();
    displayTasks(JSONtasks.src);
};