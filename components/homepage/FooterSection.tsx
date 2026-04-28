import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const FooterSection = () => {
  return (
    <section className="px-6 py-10 border-t lg:px-12 bg-background border-border">
      <div className="grid grid-cols-1 gap-6 mx-auto max-w-full md:grid-cols-3">
        <Card className="md:col-span-2 relative aspect-auto md:aspect-auto overflow-hidden rounded-[2.5rem] bg-card/50 glass-morphism border-border p-0 flex flex-col justify-end group shadow-none">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/theatre/1200/800')] bg-cover bg-center opacity-40 dark:opacity-20 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none" />
          <CardHeader className="relative z-10 p-12 mt-auto space-y-4">
            <Badge className="text-emerald-600 bg-emerald-500/10 border-emerald-500/20 dark:text-emerald-400 w-fit">
              Now Streaming
            </Badge>
            <CardTitle className="text-4xl font-bold tracking-tighter text-foreground">
              Premium Theater Experience at Home
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground max-w-[40ch]">
              Ultra-HD streaming with Dolby Atmos. Feel every heartbeat of the
              cinema.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="relative overflow-hidden rounded-[2.5rem] bg-card border-border p-0 flex flex-col justify-between group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/theatre/1200/800')] bg-cover bg-center opacity-40 dark:opacity-20 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none" />
          <div className="flex relative z-10 flex-col justify-between h-full">
            <CardHeader className="p-10 pb-0 space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                Get in touch
              </CardTitle>
            </CardHeader>
            <div className="mx-4 mt-2 border-t border-border"></div>
            <CardContent className="p-10 pt-8 space-y-3">
              <div className="flex flex-row gap-2">
                <div className="flex justify-center items-center rounded-xl transition-colors size-10 shrink-0 bg-muted text-muted-foreground group-hover/link:bg-foreground group-hover/link:text-background">
                  <Mail className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                    Email
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    hello@cinemapro.studio
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex justify-center items-center rounded-xl transition-colors size-10 shrink-0 bg-muted text-muted-foreground group-hover/link:bg-foreground group-hover/link:text-background">
                  <Phone className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                    Phone
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    +1 (312) 847-1928
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex justify-center items-center rounded-xl transition-colors size-10 shrink-0 bg-muted text-muted-foreground group-hover/link:bg-foreground group-hover/link:text-background">
                  <MapPin className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    123 Cinema Ave, NY 10012
                  </span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};
