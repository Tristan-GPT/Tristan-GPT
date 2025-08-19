/* eslint-disable @typescript-eslint/no-explicit-any */

// Credit to @iCrawl (https://github.com/iCrawl)

import { useLanyardWS } from "use-lanyard";

export function Status({ initialData, className }: { readonly className?: string; readonly initialData?: any }) {
	const data = useLanyardWS("705425854825496656", { initialData });
	const isOnline = data?.discord_status !== "offline";

	return (
		<div
			className={`${className}`}
		>
			
			{isOnline ? <div><img src="/online.png" alt="" style={{width:'20px',height:'20px',verticalAlign:'middle',marginRight:'8px'}} /> currently online</div> : <div><img src="/offline.png" alt="" style={{width:'20px',height:'20px',verticalAlign:'middle',marginRight:'8px'}} /> currently offline</div>}
		</div>
	);
}