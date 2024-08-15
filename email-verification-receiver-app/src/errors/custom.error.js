"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(statusCode, message, errors) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        if (errors) {
            this.errors = errors;
        }
    }
}
exports.default = CustomError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tLmVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsTUFBTSxXQUFZLFNBQVEsS0FBSztJQUs3QixZQUNFLFVBQTJCLEVBQzNCLE9BQWUsRUFDZixNQUFvQjtRQUVwQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7Q0FDRjtBQUVELGtCQUFlLFdBQVcsQ0FBQyJ9