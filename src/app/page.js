import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full md:max-w-6xl lg:max-w-7xl flex-col items-start border-t-0 border border-dashed border-muted-foreground/50 bg-white dark:bg-black">
        <Navbar />
        <div className="relative px-12 py-20 flex flex-col items-start gap-4">
          <Badge variant="outline" className="bg-blue-50 text-blue-400 dark:text-blue-400">Next-Gen Prompt Engineering</Badge>
        <h1 className="text-6xl font-bold tracking-tight text-center text-black dark:text-white sm:text-left">
          Master the Art of
        </h1>
        <h1 className="text-blue-600 text-6xl font-bold tracking-tight text-center dark:text-blue-400 sm:text-left">AI Prompting</h1>
        <p className="w-xl  text-md text-gray-600 dark:text-gray-400 sm:text-left">
          Write,test and optimize your AI prompts with ease. Unlock the full potential of AI and create powerful, effective prompts that drive results.
        </p>
        </div>
      </main>
    </div>
  );
}
