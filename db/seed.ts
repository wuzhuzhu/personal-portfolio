import db from "./index"

const seed = async () => {
  const project = await db.organization.create({ data: { name: "main" } })
  console.log(project)
}

export default seed
