import { AuthServiceConfig, GoogleLoginProvider, LoginOpt } from 'angularx-social-login';

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};

const oauthConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('112888989739-tlqh9dcdia1o73r4adu5h73vqfsrr833', googleLoginOptions)
  }
]);

export function oauthProvideConfig() {
  return oauthConfig;
}
