"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const ecommerce_module_1 = require("./ecommerce.module");
const sequelize_typescript_1 = require("sequelize-typescript");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(ecommerce_module_1.ecommerceModule);
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    });
    const sequelize = app.get(sequelize_typescript_1.Sequelize);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await sequelize.sync({ alter: true });
    await app.listen(3001);
}
bootstrap();
