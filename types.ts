import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { User, GlobalRole, MembershipRole, Organization } from "db"

export type Role = MembershipRole | GlobalRole

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<GlobalRole>
    PublicData: {
      userId: User["id"]
      roles: Role[]
      orgId?: Organization["id"]
    }
  }
}
