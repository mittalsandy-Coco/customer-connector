"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfiguration = void 0;
const custom_error_1 = __importDefault(require("../errors/custom.error"));
const env_validators_1 = __importDefault(require("../validators/env.validators"));
const helpers_validators_1 = require("../validators/helpers.validators");
/**
 * Read the configuration env vars
 * (Add yours accordingly)
 *
 * @returns The configuration with the correct env vars
 */
const readConfiguration = () => {
    const envVars = {
        clientId: process.env.CTP_CLIENT_ID,
        clientSecret: process.env.CTP_CLIENT_SECRET,
        projectKey: process.env.CTP_PROJECT_KEY,
        scope: process.env.CTP_SCOPE,
        region: process.env.CTP_REGION,
    };
    const validationErrors = (0, helpers_validators_1.getValidateMessages)(env_validators_1.default, envVars);
    if (validationErrors.length) {
        throw new custom_error_1.default('InvalidEnvironmentVariablesError', 'Invalid Environment Variables please check your .env file', validationErrors);
    }
    return envVars;
};
exports.readConfiguration = readConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBFQUFpRDtBQUNqRCxrRkFBeUQ7QUFDekQseUVBQXVFO0FBRXZFOzs7OztHQUtHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7SUFDcEMsTUFBTSxPQUFPLEdBQUc7UUFDZCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUF1QjtRQUM3QyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBMkI7UUFDckQsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBeUI7UUFDakQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUztRQUM1QixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFvQjtLQUN6QyxDQUFDO0lBRUYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLHdDQUFtQixFQUFDLHdCQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFckUsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QixNQUFNLElBQUksc0JBQVcsQ0FDbkIsa0NBQWtDLEVBQ2xDLDJEQUEyRCxFQUMzRCxnQkFBZ0IsQ0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFwQlcsUUFBQSxpQkFBaUIscUJBb0I1QiJ9