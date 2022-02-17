import { Inject, Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import { AuthModuleConfig, ConfigInjectionToken } from '../../config.interface';
import Session from 'supertokens-node/recipe/session';

@Injectable()
export class SupertokensService {
  constructor(@Inject(ConfigInjectionToken) private config: AuthModuleConfig) {
    supertokens.init({
      appInfo: config.appInfo,
      supertokens: {
        connectionURI: config.connectionUrl,
        apiKey: config.apiKey,
      },
      recipeList: [EmailPassword.init(), Session.init()],
    });
  }
}
