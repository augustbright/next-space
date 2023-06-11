export default function About() {
    return (
        <>
            <header className="flex justify-center mt-4">
                <h1 className="text-3xl">About Next Space</h1>
            </header>
            <main>
                <section id="about-us" className="mt-8">
                    <h2 className="text-lg">Our Story</h2>
                    <p>Next Space is a MySpace-inspired, simple social network project, founded with a vision to revamp the traditional modes of online social interaction. This platform is not just an application, but a collaborative effort guided by a comprehensive course that aids in creating a full-stack application.</p>
                </section>

                <section id="our-technologies" className="mt-8">
                    <h2 className="text-lg">Technologies We Use</h2>
                    <p>Next Space is built with a stack of leading-edge technologies designed for robust and scalable web applications:</p>
                    <ul>
                        <li><a href="https://nextjs.org/">Next.js 13</a> - Our core application framework</li>
                        <li><a href="https://authjs.dev/">Auth.js</a> - Secure user authentication</li>
                        <li><a href="https://www.prisma.io">Prisma</a> - Modern database access for TypeScript & Node.js</li>
                        <li><a href="https://neon.tech/">Neon Postgres</a> - High-performance PostgreSQL hosting</li>
                    </ul>
                </section>

                <section id="acknowledgements" className="mt-8">
                    <h2 className="text-lg">Acknowledgements</h2>
                    <p>Special thanks to the course instructors for their guidance and mentorship, and the Open-Source Community for the constant inspiration that fuels projects like Next Space.</p>
                </section>
            </main>
        </>
    );
}