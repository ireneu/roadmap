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

var monthPanels = {};

function createMonthPanels() {
    var monthsContainer = $('#months');
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
        monthPanels[i] = $('#' + monthContainerId + '> .panel-body');
    }
}

window.onload = function () {
    createMonthPanels();
};