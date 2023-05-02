import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  const server = app.getHttpServer();

  const router = server._events.request._router;

  const existingRoutes: [] = router.stack
    .map((routeObj) => {
      if (routeObj.route) {
        return {
          route: {
            path: routeObj.route?.path,
            method: routeObj.route?.stack[0].method,
          },
        };
      }
    })
    .filter((item) => item !== undefined);
  console.log(existingRoutes);
}
bootstrap();
