/* ========== globalt scope ================= */
/*
    [ namn      ]       [ varde       ]
    [ firstname ]       [ "Sebastian" ]
    [ myFunction ]      [ function    ]
*/
/* Det globala scopet far alla komma at */

// globalt scope

const firstname = "Sebastian";

// globalt scope

function myFunction(x, y) {
    /* ========== lokalt scope ================= */
    /*
        [ namn      ]       [ varde       ]
        [ x         ]       [ 20          ]
        [ y         ]       [ 100         ]
        [ lastname  ]       [ "Karlsson"  ]
        [ coolStuff ]       [ function    ]
    */
    /* Det lokala scopet far bara denna funktionen komma at.*/

    const lastname = "Karlsson";

    console.log(firstname);

    function coolStuff() {
        const apa = 1;
        console.log(lastname);
        console.log(firstname);
    }
}

// globala scopet

console.log(lastname);

// globala scopet

myFunction(20, 100);