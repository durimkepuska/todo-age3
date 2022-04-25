const invoicesData = [
    {
        invoiceId: 1,
        clientName: "Fahria Sh.P.K",
        clientNUI: "111 111 111",
        clientAddress: "Mithat Frasheri",
        clientPhone: "048 800 143",
        productsOrServices: [
            {
                name: "Speca",
                amount: 5,
                unit: "kg",
                pricePerUnit: 8,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 2,
        clientName: "Curri Sh.P.K",
        clientNUI: "222 222 222",
        clientAddress: "Sami Frasheri",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 3,
        clientName: "Doli Sh.P.K",
        clientNUI: "333 333 333",
        clientAddress: "Sami Frasheri",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 3,
                unit: "kg",
                pricePerUnit: 3,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 4,
        clientName: "Dina Sh.P.K",
        clientNUI: "444 444 444",
        clientAddress: "Yll Morina",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 7,
                unit: "kg",
                pricePerUnit: 1,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 5,
        clientName: "Vorfi Sh.P.K",
        clientNUI: "555 555 555",
        clientAddress: "Nene Tereza",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 6,
        clientName: "Doli Sh.P.K",
        clientNUI: "666 666 666",
        clientAddress: "Sadik Stavileci",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 7,
        clientName: "Kepuska Sh.P.K",
        clientNUI: "666 666 666",
        clientAddress: "Ferat Binishi",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 8,
        clientName: "Rogova Sh.P.K",
        clientNUI: "777 777 777",
        clientAddress: "Lidhja Prizrenit",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 9,
        clientName: "Binxhiu Sh.P.K",
        clientNUI: "888 888 888",
        clientAddress: "Deshmoret",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 10,
        clientName: "Curri Sh.P.K",
        clientNUI: "999 999 999 ",
        clientAddress: "Lidhja Pejes",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 11,
        clientName: "Curri Sh.P.K",
        clientNUI: "999 999 999 ",
        clientAddress: "Lidhja Pejes",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 12,
        clientName: "Rogova Sh.P.K",
        clientNUI: "777 777 777",
        clientAddress: "Lidhja Prizrenit",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 13,
        clientName: "Binxhiu Sh.P.K",
        clientNUI: "888 888 888",
        clientAddress: "Deshmoret",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 14,
        clientName: "Curri Sh.P.K",
        clientNUI: "999 999 999 ",
        clientAddress: "Lidhja Pejes",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 15,
        clientName: "Curri Sh.P.K",
        clientNUI: "999 999 999 ",
        clientAddress: "Lidhja Pejes",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 16,
        clientName: "Rogova Sh.P.K",
        clientNUI: "777 777 777",
        clientAddress: "Lidhja Prizrenit",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 17,
        clientName: "Binxhiu Sh.P.K",
        clientNUI: "888 888 888",
        clientAddress: "Deshmoret",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 18,
        clientName: "Curri Sh.P.K",
        clientNUI: "999 999 999 ",
        clientAddress: "Lidhja Pejes",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 19,
        clientName: "Curri Sh.P.K",
        clientNUI: "999 999 999 ",
        clientAddress: "Lidhja Pejes",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    },
    {
        invoiceId: 20,
        clientName: "Curri Sh.P.K",
        clientNUI: "999 999 999 ",
        clientAddress: "Lidhja Pejes",
        clientPhone: "048 8550 143",
        productsOrServices: [
            {
                name: "Tranguj",
                amount: 2,
                unit: "kg",
                pricePerUnit: 4,
                currency: "euro"
            }
        ]
    }
    
]

