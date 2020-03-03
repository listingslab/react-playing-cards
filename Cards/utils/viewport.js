
const getViewport = () => {
	
	const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let o = 'landscape'
	if (vh > vw){
		o = 'portrait'
	}
	const ratio = vw/vh

	let viewport = {
		width: vw,
		height: vh,
		orientation: o,
		ratio
	}
	return viewport
}

export {getViewport}