import type { HttpContext } from '@adonisjs/core/http'

export default class NavigationsController {
  public async home({ response }: HttpContext) {
    return response.request.url('pages/home')
  }

  public async catalogue({ response }: HttpContext) {
    return response.redirect('pages/catalogue')
  }
}
