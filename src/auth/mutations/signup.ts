import { SecurePassword } from "@blitzjs/auth"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { Signup } from "../validations"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password, name }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  console.log('in comming user', { email, password, name })
  const user = await db.user.create({
    data: {
      email: email.toLowerCase().trim(), hashedPassword, role: "USER", name, memberships: {
        create: {
          role: 'USER',
          organization: {
            connect: {
              name: 'main'
            }
          }
        }
      }
    },
    include: {
      memberships: {
        select: {
          role: true,
          organization: {
            select: {+
              name: true
            }
        },
        organizationId: true
      }
    },
    tokens: false,
    sessions: false,
  },
  })

await ctx.session.$create({
  userId: user.id,
  roles: [user.role, (user.memberships && user.memberships[0]) ? user.memberships[0].role : 'VISITOR'],
  orgId: user.memberships && user.memberships[0]?.organizationId
})
return user
})
