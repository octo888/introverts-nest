import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    EventsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../client/dist', 'client'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
