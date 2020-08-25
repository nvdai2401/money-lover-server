import Joi from '@hapi/joi'

export const createUser = Joi.object({
  user: Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
    name: Joi.string().min(3).max(255).required(),
  }),
})
