import { cn } from "@/lib/utils"
import React from "react"
import { IoShieldCheckmark } from "react-icons/io5";



interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}


const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" },
  { id: "5", text: "Item 5" },
  { id: "6", text: "Item 6" },
  { id: "7", text: "Item 7" },
  { id: "8", text: "Item 8" },
  { id: "9", text: "Item 1" },
  { id: "10", text: "Item 2" },
  { id: "11", text: "Item 3" },
  { id: "12", text: "Item 4" },
  { id: "13", text: "Item 5" },
  { id: "14", text: "Item 6" },
  { id: "15", text: "Item 7" },
  { id: "16", text: "Item 8" }
]

export function TiltedScroll({ 
  items = defaultItems,
  className 
}: TiltedScrollProps) {
  const CheckIcon = IoShieldCheckmark;
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[250px] w-[300px] gap-5 animate-skew-scroll grid-cols-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-2 cursor-pointer rounded-md border border-border/40 bg-gradient-to-b from-background/80 to-muted/80 p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl dark:border-border"
            >
              <CheckIcon className="pl-2 w-4 h-4 text-teal-500" />
              <p className="text-foreground/80 transition-colors group-hover:text-foreground">
                {item.text}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
