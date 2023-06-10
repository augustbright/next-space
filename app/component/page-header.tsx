type TProps = {
    title: string;
};

export const PageHeader = ({ title }: TProps) => (
    <header className="flex justify-center mt-4 mb-8">
        <h1 className="text-3xl">{title}</h1>
    </header>
);