const validation = {
  Mutation: async (resolve, parent, args, context, info): Promise<any> => {
    const mutationField = info.schema.getMutationType()
    const mutationDefinition = mutationField.getFields()[info.fieldName]
    const mutationValidationSchema =
      mutationDefinition.extensions.validationSchema
    if (mutationValidationSchema) {
      await mutationValidationSchema.validateAsync(args)
    }
    return resolve(parent, args, context, info)
  },
}

export default validation
