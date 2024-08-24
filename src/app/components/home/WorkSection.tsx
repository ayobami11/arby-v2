import works from "@/components/home/works.json";

import WorkItem from "@/components/home/WorkItem";

const WorkList = () => {

    return (
        <section>
            <header>
                <h2 className="font-extralight italic text-2xl mb-8">My Works</h2>
            </header>
            <ul className="flex flex-col gap-8">
                {works.map(work => <WorkItem key={work.id} {...work} />)}
            </ul>
        </section>
    )
}

export default WorkList;