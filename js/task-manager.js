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
                    '<div class="panel-body">' +
                    '</div>' +
            '</div>');
        monthCollapsers[i] = $('#' + monthContainerId);
        monthPanels[i] = $('#' + monthContainerId + '> .panel-body');
        filterMonthDropdown.append('<li><a href="#" onclick="showMonth(' + i + ')">' + monthNames[i] + '</a></li>');
    }
}

function showMonth(month) {
    for (var i = 1; i < 13; i++) {
        if (i === month) {
            monthCollapsers[i].collapse('show');
        } else {
            monthCollapsers[i].collapse('hide');
        }
    }
}

function populatePeopleList() {
    var filterPeopleDropdown = $('#filter-person-dropdown');
    for (var person in team) {
        filterPeopleDropdown.append('<li><a href="#" onclick="">' + team[person].name + '</a></li>');
    }
}

window.onload = function () {
    setHeader(generalData);
    createMonthPanels();
};