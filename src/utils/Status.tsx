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
			
			{isOnline ? <div><img src="/online.png" alt="" /> currently online</div> : <div><img src="/offline.png" alt="" /> currently offline</div>}
		</div>
	);
}