/**
* @author: Ireneu Pla
*
* Requires jQuery's $ to be in the namespace.
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

var monthPanels = {}, monthCollapsers = {};

function setHeader(generalData) {
    document.getElementsByTagName('title')[0].innerHTML = generalData.title;
    document.getElementById('roadmap-header').innerHTML = generalData.title + ' <small>' + generalData.description + '</small>';
}

function createMonthPanels() {
    var monthsContainer = $('#months');
    var filterMonthDropdown = $('#filter-month-dropdown');
    for (var i = 1; i < 13; i++) {
        var monthContainerId = monthNames[i] + i;
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

function filterMonth(month) {
    for (var i = 1; i < 13; i++) {
        if (i === month) {
            monthCollapsers[i].collapse('show');
        } else {
            monthCollapsers[i].collapse('hide');
        }
    }
}

function showAllMonths() {
    for (var i = 1; i < 13; i++) { monthCollapsers[i].collapse('show'); }
}

function filterPerson(personName) {
    $('.task').css('display', 'none');
    $('[data-person="' + personName + '"]').css('display', 'block');
}

function showAllPeople() {
    $('.task').css('display', 'block');
}

function populatePeopleList() {
    var filterPeopleDropdown = $('#filter-person-dropdown');
    for (var person in team) {
        filterPeopleDropdown.append('<li><a href="#" onclick="filterPerson(\'' + team[person].name + '\')">' + team[person].name + '</a></li>');
    }
}

function displayTasks(taskData) {
    for (var task in taskData) {
        monthPanels[taskData[task].month].append(
            '<div class="panel panel-default task" style="background-color:' + (taskData[task].person.color || '#ffffff') + '" data-person="' + taskData[task].person.name + '">' +
                '<div class="media panel-body">' +
                    '<div class="media-body">' +
                        '<span class="task-title">' + taskData[task].title + '</span> ' +
                        '<span class="task-person"> - ' + (taskData[task].person.name || '') + '</span> ' +
                        '<span class="task-date">' + (taskData[task].date || '') + '</span><br />' +
                        taskData[task].description +
                    '</div>' +
                '</div>' +
            '</div>');
    }
}

window.onload = function () {
    setHeader(generalData);
    createMonthPanels();
    populatePeopleList();
    displayTasks(tasksData);
};