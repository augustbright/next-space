import { getServerSession } from "next-auth";
import { PageHeader } from "../component/page-header";
import { prisma } from "../prisma";
import { UserForm } from "./user-form";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;    
    if (!email) {
        console.log('SESSION', session);
        throw new Error("Cannot find email in session");
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error(`Cannot find user with email: ${email}`);
    }

    return (
        <>
            <PageHeader title="Dashboard" />
            <UserForm user={user} />
        </>
    );
}