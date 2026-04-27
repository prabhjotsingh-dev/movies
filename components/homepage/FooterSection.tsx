import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const FooterSection = () => {
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
        <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 p-10 flex flex-col justify-between group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-700 pointer-events-none from-white/5 group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div>
              <h3 className="text-3xl font-bold tracking-tighter text-white">
                Get in touch
              </h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed max-w-[25ch]">
                Our team is available.
              </p>
            </div>

            <div className="pt-4 space-y-4 border-t border-white/10">
              <a
                href="mailto:hello@cinemapro.studio"
                className="flex gap-3 items-center text-sm font-medium transition-colors text-zinc-300 hover:text-white group/link"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover/link:bg-zinc-700 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <Mail className="size-3.5" />
                </div>
                hello@example.mail
              </a>
              <a
                href="tel:+13128471928"
                className="flex gap-3 items-center text-sm font-medium transition-colors text-zinc-300 hover:text-white group/link"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover/link:bg-zinc-700 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <Phone className="size-3.5" />
                </div>
                +1 (123) 456-7890
              </a>
              <div className="flex gap-3 items-center text-sm font-medium cursor-default text-zinc-300 group/link">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <MapPin className="size-3.5" />
                </div>
                123 Example Street, City, State, 123456
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
