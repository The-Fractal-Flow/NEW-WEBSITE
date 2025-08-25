import { cn } from '@/lib/utils';

interface WavyDividerProps {
  className?: string;
  colorClassName?: string;
  direction?: 'up' | 'down';
}

export function WavyDivider({
  className,
  colorClassName = "fill-background",
  direction = 'up'
}: WavyDividerProps) {
  const pathData = "M0,160L48,181.3C96,203,192,245,288,250.7C384,256,480,224,576,192C672,160,768,128,864,138.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
  
  return (
    <div className={cn(
        "w-full h-20 md:h-32 lg:h-40 overflow-hidden -mb-1",
        direction === 'down' ? 'rotate-180' : '',
        className
    )}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="relative block w-[calc(100%+1.3px)] h-full"
        preserveAspectRatio="none"
      >
        <path
          className={cn('fill-current', colorClassName)}
          d={pathData}
        ></path>
      </svg>
    </div>
  );
}
