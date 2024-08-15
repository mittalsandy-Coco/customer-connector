"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSuccess = void 0;
/**
 * Send a success response to the client
 *
 * @param {Response} response Express response
 * @param {number} statusCode The status code of the operation
 * @param {Array<UpdateAction>} updateActions The update actions that were made in the process
 * @returns Success response with 200 status code and the update actions array
 */
const apiSuccess = (statusCode, updateActions, response) => {
    const responseBody = {};
    if (updateActions) {
        responseBody.actions = updateActions;
    }
    response.status(statusCode).json(Object.assign({}, responseBody));
};
exports.apiSuccess = apiSuccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWNjZXNzLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQTs7Ozs7OztHQU9HO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FDeEIsVUFBa0IsRUFDbEIsYUFBa0MsRUFDbEMsUUFBa0IsRUFDbEIsRUFBRTtJQUNGLE1BQU0sWUFBWSxHQUFHLEVBQThCLENBQUM7SUFFcEQsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNsQixZQUFZLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLG1CQUMzQixZQUFZLEVBQ2YsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWRXLFFBQUEsVUFBVSxjQWNyQiJ9