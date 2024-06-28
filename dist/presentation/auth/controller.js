"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
class AuthController {
    constructor(authRepository //9
    ) {
        this.authRepository = authRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerUser = (req, res) => {
            const [error, registerUserDto] = domain_1.RegisterUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            this.authRepository
                .register(registerUserDto)
                .then((user) => res.json(user))
                .catch((error) => this.handleError(error, res));
        };
        this.loginUser = (req, res) => {
            res.json('loginUser controller');
        };
    }
}
exports.AuthController = AuthController;
