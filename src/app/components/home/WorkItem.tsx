import Image from "next/image"

interface WorkItemProps {
    id: string,
    category: string,
    title: string,
    description: string,
    imageUrl: string
}

const WorkItem: React.FC<WorkItemProps> = ({ category, title, description, imageUrl }) => {

    return (
        <li className="rounded-3xl py-8 px-5 [&:nth-child(odd)]:bg-gray-300 [&:nth-child(even)]:bg-gray-100/40 [&:nth-child(even)]:border [&:nth-child(even)]:border-white">
            <article className="flex flex-col items-center text-center">
                <header>
                    <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">{category}</span>
                    <h3 className="italic font-light text-2xl mb-6 leading-8">{title}</h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">{description}</p>
                <div className="relative w-full h-56">
                    <Image
                        src={imageUrl}
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
            </article>
        </li>
    )
}

export default WorkItem;