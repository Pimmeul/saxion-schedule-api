import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule.forRoot({
      connectionUrl:
        'https://259d35c18fe711ecb2d7db8afc8d5895-us-east-1.aws.supertokens.io:3572',
      apiKey: 'T2gtSCATSSg8R4OWvFmVkwIXQHbkXl',
      appInfo: {
        appName: 'Saxion-Rooster-Api',
        apiDomain: 'http://localhost:3000',
        apiBasePath: '/api/auth',
        websiteDomain: 'https://saxion-rooster.netlify.app',
        websiteBasePath: '/auth/',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
