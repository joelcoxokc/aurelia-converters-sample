System.register(["moment"], function (_export) {
  "use strict";

  var moment, _prototypeProperties, _classCallCheck, DateFormatValueConverter;
  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DateFormatValueConverter = _export("DateFormatValueConverter", (function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        _prototypeProperties(DateFormatValueConverter, null, {
          toView: {
            value: function toView(value, format) {
              return moment(value).format(format);
            },
            writable: true,
            configurable: true
          }
        });

        return DateFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNC9kYXRlLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTyxNQUFNLHlDQUVBLHdCQUF3Qjs7O0FBRjlCLFlBQU07Ozs7Ozs7QUFFQSw4QkFBd0I7aUJBQXhCLHdCQUF3QjtnQ0FBeEIsd0JBQXdCOzs7NkJBQXhCLHdCQUF3QjtBQUNuQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLHFCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7Ozs7OztlQUhVLHdCQUF3QiIsImZpbGUiOiJzYW1wbGVzLzQvZGF0ZS1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==