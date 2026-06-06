import { Feature } from "./Feature";

const features = [
  {
    title: "Unified task management",
    description:
      "Create, assign, and prioritize tasks with clear ownership so nothing slips through the cracks.",
  },
  {
    title: "Goal tracking & milestones",
    description:
      "Break large projects into measurable steps and monitor progress in real time.",
  },
  {
    title: "Secure team workspace",
    description:
      "Protect your projects with enterprise-grade security and role-based access control.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h1 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything your team needs to execute
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-[#7A7A7A]">
            From planning to launch, keep every task organized and every
            teammate aligned with a workflow built for clarity and speed.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
