UI IMPLEMENTATION

- [ ] GET|HEAD  / .................................................................................... home
- [ ] GET|HEAD  confirm-password ............... password.confirm › Auth\ConfirmablePasswordController@show
- [ ] GET|HEAD  dashboard ....................................................................... dashboard
- [ ] GET|HEAD  forgot-password ................ password.request › Auth\PasswordResetLinkController@create
- [x] GET|HEAD  login .................................. login › Auth\AuthenticatedSessionController@create
- [x] GET|HEAD  register .................................. register › Auth\RegisteredUserController@create
- [ ] GET|HEAD  reset-password/{token} ................. password.reset › Auth\NewPasswordController@create
- [ ] GET|HEAD  settings/appearance ............................................................ appearance
- [ ] GET|HEAD  settings/password ........................ password.edit › Settings\PasswordController@edit
- [ ] GET|HEAD  settings/profile ........................... profile.edit › Settings\ProfileController@edit
- [ ] GET|HEAD  verify-email ................. verification.notice › Auth\EmailVerificationPromptController
- [ ] GET|HEAD  verify-email/{id}/{hash} ................. verification.verify › Auth\VerifyEmailController
