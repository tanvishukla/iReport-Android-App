'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.post('/user', 'ProfileController.newUser')
Route.post('/edituser', 'ProfileController.profileEdit')
Route.post('/getuser', 'ProfileController.getProfile')
Route.post('/changenotifications', 'ProfileController.changeNotificationSettings')
