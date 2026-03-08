import { Award, Target, FileCode, Users } from "lucide-react";

const stats = [
  { icon: Target, value: "10+", label: "Vulnerability Types", color: "text-cyan" },
  { icon: FileCode, value: "6+", label: "Projects Built", color: "text-violet" },
  { icon: Award, value: "3+", label: "Certifications & Training", color: "text-rose" },
  { icon: Users, value: "2+", label: "Team Experiences", color: "text-amber" },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4 border-y border-border bg-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
