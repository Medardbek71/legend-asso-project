/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router
  .get('/', (ctx) => {
    return ctx.view.render('pages/home')
  })
  .as('home')

router
  .get('catalogue', (ctx) => {
    return ctx.view.render('pages/catalogue')
  })
  .as('catalogue')

router
  .get('suppliers', (ctx) => {
    return ctx.view.render('pages/suppliers')
  })
  .as('suppliers')
