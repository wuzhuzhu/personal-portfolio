import { SecurePassword } from "@blitzjs/auth"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { Signup } from "../validations"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.create({
    data: {
      email: email.toLowerCase().trim(), hashedPassword, role: "USER", memberships: {
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
            select: {
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
