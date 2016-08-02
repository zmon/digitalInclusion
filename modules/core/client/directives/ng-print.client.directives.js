(function (angular) {
    'use strict';

    angular.module('core').directive('ngPrint', [printDirective]);
    console.log("print");

    function printDirective() {
        var printSection = document.getElementById('printSection');
        var map = angular.element(document.getElementById('printableMap'))[0];
        console.log("printDirective()");
        // console.log(printSection);
        // console.log(map);

        // if there is no printing section, create one
        if (!printSection) {
            console.log("!printSection");
            printSection = document.createElement('div');
            printSection.id = 'printSection';
            document.body.appendChild(printSection);
        }

        function link(scope, element, attrs) {
            element.on('click', function () {
                console.log("click event");
                console.log(scope);
                // console.log(map);
                // console.log(attrs.printElementId);
                var elemToPrint = document.getElementById(attrs.printElementId);
                console.log(elemToPrint);
                if (elemToPrint) {
                    console.log("elementToPrint");
                    console.log(elemToPrint);
                    printElement(elemToPrint);
                    window.print();
                    window.onafterprint();
                }
            });

            window.onafterprint = function () {
                // clean the print section before adding new content
                console.log("onafterPrint()");
                printSection.innerHTML = '';
            }
        }

        function printElement(elem) {
            // clones the element you want to print
            console.log("printElement()");
            console.log(elem);
            console.log("print--");
            console.log(map);
            map.style.position="absolute";
            // map.style.visibility="visible";
            var domClone = elem.cloneNode(true);
            console.log(domClone);
            // printSection.innerHTML='';
            printSection.appendChild(map);
            printSection.appendChild(domClone);
            console.log("printSection---");
            console.log(printSection);
            // window.print();
        }

        return {
            link: link,
            restrict: 'A'
        };
    }

    // angular.module('core').directive('ngPrint', [printDirective]);
}(window.angular));