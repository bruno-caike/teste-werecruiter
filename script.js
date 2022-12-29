const data = [
    {
        first_name: 'Airi 01',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 02',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 03',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 04',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 05',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 06',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 07',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 08',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 08',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },

    {
        first_name: 'Airi 08',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 08',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
    {
        first_name: 'Airi 08',
        last_name: 'Satou',
        gender: 'female',
        address: 'Tokyo',
        date_of_birth: '04/03/1964'
    },
];

$(() => {
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        paging: {
            pageSize: 10,
        },
        editing: {
            mode: 'popup',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            popup: {
                width: 700,
                height: 250,
            },
            form: {
                items: [{
                    itemType: 'group',
                    colCount: 2,
                    colSpan: 2,
                    items: [
                        {
                            dataField: 'first_name',
                            caption: 'First Name',
                            dataType: 'string',
                        },
                        {
                            dataField: 'last_name',
                            caption: 'Last Name',
                            dataType: 'string',
                        },
                        {
                            dataField: 'gender',
                            caption: 'Gender',
                            dataType: 'string',
                        },
                        {
                            dataField: 'address',
                            caption: 'Address',
                            dataType: 'string',
                        },
                        {
                            dataField: 'date_of_birth',
                            caption: 'Date of Birth',
                            dataType: 'date',
                        },
                    ],
                },],
            },
        },
        pager: {
            displayMode: "compact",
            showInfo: true,
            showPageSizeSelector: true,
            allowedPageSizes: [10, 25, 50, 100],
        },
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true,
        },
        allowColumnReordering: true,
        rowAlternationEnabled: true,
        showBorders: true,
        
        columns: [
            {
                dataField: 'first_name',
                caption: 'First Name',
                dataType: 'string',
                alignment: 'left',
            },
            {
                dataField: 'last_name',
                caption: 'Last Name',
                dataType: 'string',
                alignment: 'left',
            },
            {
                dataField: 'gender',
                caption: 'Gender',
                dataType: 'string',
                alignment: 'left',
            },
            {
                dataField: 'address',
                caption: 'Address',
                dataType: 'string',
                alignment: 'left',
            },
            {
                dataField: 'date_of_birth',
                caption: 'Date of Birth',
                dataType: 'date',
                alignment: 'left',
            },
            {
                caption: 'Action',
                alignment: 'left',
                type: 'buttons',
                buttons: [
                    {
                        name: "edit",
                        cssClass: "btn btn-primary text-white text-decoration-none"
                    }, {
                        name: "delete",
                        cssClass: "btn btn-danger text-white text-decoration-none"
                    }
                ],
            },
        ],
    });
  });
