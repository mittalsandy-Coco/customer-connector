"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProject = exports.createApiRoot = void 0;
const build_client_1 = require("./build.client");
const platform_sdk_1 = require("@commercetools/platform-sdk");
const config_utils_1 = require("../utils/config.utils");
/**
 * Create client with apiRoot
 * apiRoot can now be used to build requests to de Composable Commerce API
 */
exports.createApiRoot = ((root) => () => {
    if (root) {
        return root;
    }
    root = (0, platform_sdk_1.createApiBuilderFromCtpClient)((0, build_client_1.createClient)()).withProjectKey({
        projectKey: (0, config_utils_1.readConfiguration)().projectKey,
    });
    return root;
})();
/**
 * Example code to get the Project details
 * This code has the same effect as sending a GET
 * request to the commercetools Composable Commerce API without any endpoints.
 *
 * @returns {Promise<ClientResponse<Project>>} apiRoot
 */
const getProject = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, exports.createApiRoot)().get().execute();
});
exports.getProject = getProject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaURBQThDO0FBRTlDLDhEQUE0RTtBQUU1RSx3REFBMEQ7QUFHMUQ7OztHQUdHO0FBQ1UsUUFBQSxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQWlDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUN4RSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ1QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxHQUFHLElBQUEsNENBQTZCLEVBQUMsSUFBQSwyQkFBWSxHQUFFLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDbEUsVUFBVSxFQUFFLElBQUEsZ0NBQWlCLEdBQUUsQ0FBQyxVQUFVO0tBQzNDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMOzs7Ozs7R0FNRztBQUNJLE1BQU0sVUFBVSxHQUFHLEdBQVMsRUFBRTtJQUNuQyxPQUFPLE1BQU0sSUFBQSxxQkFBYSxHQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0MsQ0FBQyxDQUFBLENBQUM7QUFGVyxRQUFBLFVBQVUsY0FFckIifQ==