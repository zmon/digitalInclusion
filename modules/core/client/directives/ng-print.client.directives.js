(function (angular) {
    'use strict';

    angular.module('core').directive('ngPrint', [printDirective]);
    console.log("print");

    function printDirective() {
        var printSection = document.getElementById('printSection');
        console.log(printSection);

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
                // console.log(attrs.printElementId);
                var elemToPrint = document.getElementById(attrs.printElementId);
                // console.log(elemToPrint);
                if (elemToPrint) {
                    printElement(elemToPrint);
                    // window.print();
                }
            });

            window.onafterprint = function () {
                // clean the print section before adding new content
                printSection.innerHTML = '';
            }
        }

        function printElement(elem) {
            // clones the element you want to print
            console.log("printElement()");
            console.log(elem);
            var domClone = elem.cloneNode(true);
            console.log(domClone);
            printSection.appendChild(domClone);
            window.print();
        }

        return {
            link: link,
            restrict: 'A'
        };
    }

    // angular.module('core').directive('ngPrint', [printDirective]);
}(window.angular));