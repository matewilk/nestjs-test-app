import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
