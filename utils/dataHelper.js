export function getTags(data) {
  if (!data) return []
  const { City, Class1, Class2, Class3, Level } = data
  const tags = [City, Class1, Class2, Class3].reduce((stack, tag) => {
    return tag ? stack.concat(tag) : stack
  }, [])
  if (Level && Level !== '非古蹟') tags.push(`${Level}古蹟`)
  return tags
}

export function parseEntitiesToIdArrayAndEntitiesDictionary(entitiesArr = []) {
  let entities = {}, ids = []
  entitiesArr.map(entity => {
    entities[entity.ID] = entity
    ids.push(entity.ID)
  })
  return { entities, ids }
}