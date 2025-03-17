UI IMPLEMENTATION

- [x] GET|HEAD  dashboard ....................................................................... dashboard
- [x] GET|HEAD  login .................................. login › Auth\AuthenticatedSessionController@create
- [x] GET|HEAD  register .................................. register › Auth\RegisteredUserController@create
- [x] GET|HEAD  settings/appearance ............................................................ appearance
- [x] GET|HEAD  settings/password ........................ password.edit › Settings\PasswordController@edit
- [x] GET|HEAD  settings/profile ........................... profile.edit › Settings\ProfileController@edit
- [ ] GET|HEAD  confirm-password ............... password.confirm › Auth\ConfirmablePasswordController@show
- [ ] GET|HEAD  forgot-password ................ password.request › Auth\PasswordResetLinkController@create
- [ ] GET|HEAD  reset-password/{token} ................. password.reset › Auth\NewPasswordController@create
- [ ] GET|HEAD  verify-email ................. verification.notice › Auth\EmailVerificationPromptController
- [ ] GET|HEAD  verify-email/{id}/{hash} ................. verification.verify › Auth\VerifyEmailController
