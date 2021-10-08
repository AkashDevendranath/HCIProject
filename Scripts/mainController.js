// Akash Devendranath(Z1907154)
// Yashwanth Yarlagadda(Z1909103)
"use strict";
$('#cover-spin').show();
setTimeout(function(){
    fetch("Scripts/data.json").then(function (response) {
        return response.json();
    }).
    then(function (data) {
        displayGrid(data);
        $('#cover-spin').hide();
        //$("#ClientContent").dxDataGrid("instance").searchByText("ABB");
        //$("#dataGridContainer").dxDataGrid("instance").clearFilter("search");
    });
},1000);

function displayGrid(amTrakData) {
    $("#ClientContent").dxDataGrid({
        dataSource: amTrakData,
        showBorders: true,
        allowColumnReordering: false,
        showRowLines: true,
        rowAlternationEnabled: true,
        columnAutoWidth: true,
        filterRow: {
            visible: false
        },
        scrolling: {
            columnRenderingMode: "virtual"
        },
        showBorders: true,
        searchPanel: {
            visible: true
        },
        grouping:{
            autoExpandAll: false
        },
        summary: {
            totalItems: [{
                column: "Code",
                summaryType: "count"
            }],
            groupItems: [{
                column: "Station Type",
                summaryType: "count"
            }]
        },
        paging: {
            pageSize: 20
        },
        groupPanel: {
            visible: true
        },
        columns: [
            {
                dataField: "Code",
                width: 100
            },
            {
                dataField: "StationName",
                width: 200
            },
            {
                dataField: "Staffed",
                width: 75
            },
            {
                dataField: "StationType",
                width: 250
            },
            {
                dataField: "City",
                width: 150
            },
            {
                dataField: "State",
                width: 100
            },
            {
                dataField: "Zip",
                width: 150
            },
            {
                dataField: "Country",
                width: 100
            },
            {
                dataField: "Division",
                width: 150
            },
            {
                dataField: "TicketOffice",
                width: 125
            },
            {
                dataField: "QuikTrak",
                width: 125
            },
            {
                dataField: "MetrolinkTVM",
                width: 125
            },
            {
                dataField: "CheckedBaggage",
                width: 135
            },
            {
                dataField: "AmtrakExpress",
                width: 125
            },
            {
                dataField: "HandleUSMail",
                width: 125
            },
            {
                dataField: "Lounge",
                width: 125
            },
            {
                dataField: "TimeZone",
                width: 125
            },
            {
                dataField: "ObserveDayLightSaving",
                width: 185
            },
            {
                dataField: "Elevation",
                width: 150
            },
            {
                dataField: "Population",
                width: 150
            }
        ],
        export: {
            enabled: true
        },
        pager: {
            visible: true,
            allowedPageSizes: [15, 20, 'all'],
            showPageSizeSelector: true,
            showInfo: true,
            showNavigationButtons: true
        },
        onContentReady: function(e){
            $("#ClientContent .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        },
        onCellPrepared: function (e) {
            if (e.rowType === "header" && e.column.command == "edit") {
                e.cellElement.text("Action");
                e.cellElement.css({
                    "text-align": "center"
                });
            }
            if (e.rowType === "header") {
                e.cellElement.css({
                    "color": "#000000",
                    "font-weight": "500"
                });
            }
        }
    }).dxDataGrid("instance");
}

$("#newYorkPenn").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("instance").searchByText("New York (Penn Station)");
    location.href = "#";
    location.href = "#tableBox";
});
$("#phily30").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("instance").searchByText("Philadelphia (30th St)");
    location.href = "#";
    location.href = "#tableBox";
});
$("#elevation").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("instance").searchByText("9070");
    location.href = "#";
    location.href = "#tableBox"; 
});
$("#dlsave").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("columnOption", "ObserveDayLightSaving", "filterValue", "No");
    location.href = "#";
    location.href = "#tableBox";
});
$("#lounge").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("columnOption", "Lounge", "filterValue", "Yes");
    location.href = "#";
    location.href = "#tableBox";
});
$("#cst").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("columnOption", "TimeZone", "filterValue", "C");
    location.href = "#";
    location.href = "#tableBox"; 
});
$("#est").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("columnOption", "TimeZone", "filterValue", "E");
    location.href = "#";
    location.href = "#tableBox";
});
$("#mst").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("columnOption", "TimeZone", "filterValue", "M");
    location.href = "#";
    location.href = "#tableBox";
});
$("#pst").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("columnOption", "TimeZone", "filterValue", "P");
    location.href = "#";
    location.href = "#tableBox"; 
});
$("#kansas").click(function(e) {
    e.preventDefault();
    $("#ClientContent").dxDataGrid("instance").clearFilter();
    $("#ClientContent").dxDataGrid("instance").refresh();
    $("#ClientContent").dxDataGrid("instance").searchByText("Kansas City, Missouri");
    location.href = "#";
    location.href = "#tableBox";
});
