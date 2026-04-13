import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ServiceBusModule } from './service-bus/service-bus.module';
import { LeadRegistrationModule } from './lead-registration/lead-registration.module';
import { LeadScoreModule } from './lead-score/lead-score.module';
import { OauthModule } from './oauth/oauth.module';
import { MarketingSyncModule } from './marketing-sync/marketing-sync.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      expandVariables: true,
    }),
    DatabaseModule,
    ServiceBusModule,
    LeadRegistrationModule,
    LeadScoreModule,
    OauthModule,
    MarketingSyncModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
