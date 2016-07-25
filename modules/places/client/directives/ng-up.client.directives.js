app.directive('ngUp', function() {
  return {
    scope: {
      select: "&"
    },
    link: function(scope, element, attrs) {
      element.on("keyup", "[selectable]", function(event) {
        var $this = $(this);
        var selectedElement = {};

        scope.$apply(function() {
          if (event.which === 40) {
            selectedElement = $this.next("[selectable]");
            if (selectedElement.length > 0) {
              scope.select({
                element: selectedElement
              });
            }
          } else if (event.which === 38) {
            selectedElement = $this.prev("[selectable]");
            if (selectedElement.length > 0) {
              scope.select({
                element: $this.prev("[selectable]")
              });
            }
          } else {

          }
        });

        if (selectedElement.length > 0) {
          $this.blur();
          selectedElement.focus();
        }

      });
    }
  }
});