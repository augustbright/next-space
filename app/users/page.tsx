import { PageHeader } from "../component/page-header";
import { prisma } from "../prisma";
import { UserCard } from "./user-card";

export default async function UsersPage() {
    const users = await prisma.user.findMany();
    return (
        <div>
            <PageHeader title="Users" />
            {
                users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))
            }
        </div>
    );
}