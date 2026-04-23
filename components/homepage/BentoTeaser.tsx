import { Badge } from "@/components/ui/badge";

export const BentoTeaser = () => {
  return (
    <section className="px-6 py-20 border-t lg:px-12 bg-zinc-950 border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 relative aspect-video md:aspect-auto overflow-hidden rounded-[2.5rem] glass-morphism p-12 flex flex-col justify-end group">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/theatre/1200/800')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700" />
          <div className="relative z-10 space-y-4">
            <Badge className="text-emerald-500 bg-emerald-500/10 border-emerald-500/20">
              Now Streaming
            </Badge>
            <h3 className="text-4xl font-bold tracking-tighter">
              Premium Theater <br />
              Experience at Home
            </h3>
            <p className="text-zinc-400 max-w-[40ch]">
              Ultra-HD streaming with Dolby Atmos. Feel every heartbeat of the
              cinema.
            </p>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-[2.5rem] bg-brand-primary p-12 flex flex-col justify-between group">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold tracking-tighter text-white">
              Join the <br />
              Pro Club
            </h3>
            <p className="mt-2 text-white/80">Get early access to premieres.</p>
          </div>
          <button className="relative z-10 w-full py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </section>
  );
};
