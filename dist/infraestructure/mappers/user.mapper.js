"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const domain_1 = require("../../domain");
class UserMapper {
    static userEntityFromObject(object) {
        const { id, _id, name, email, password, roles } = object;
        if (!_id || !id) {
            throw domain_1.CustomError.badRequest("Missing id");
        }
        if (!name)
            throw domain_1.CustomError.badRequest("Missing name");
        if (!email)
            throw domain_1.CustomError.badRequest("Missing email");
        if (!password)
            throw domain_1.CustomError.badRequest("Missing password");
        if (!roles)
            throw domain_1.CustomError.badRequest("Missing roles");
        return new domain_1.UserEntity(_id || id, name, email, password, roles);
    }
}
exports.UserMapper = UserMapper;
