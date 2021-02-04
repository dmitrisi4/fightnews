const insertAfter = (referenceNode, newNode) => {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const moveNode = (node, targetNode, anchorNode, size) => {
	if (window.innerWidth < size && targetNode.nextSibling !== node) {
		insertAfter(node, anchorNode);
		insertAfter(targetNode, node);
	} else if (window.innerWidth >= size && anchorNode.parentNode != null && node.previousSibling !== anchorNode) {
		insertAfter(anchorNode, node);
		node.parentNode.removeChild(anchorNode);
	}
};

const processElement = (node, size) => {
	const targetId = node.dataset[`${size.name}After`];
	console.log(node.dataset)
	const target = document.getElementById(targetId);

	if (target == null) {
		console.warn(`Target with id=${targetId} not found`);
		return;
	}

	if (target.nextSibling === node) {
		console.warn(`Node is already after the target with id=${targetId}`);
		return;
	}

	const anchorNode = document.createComment(targetId);

	moveNode(node, target, anchorNode, size.value);
	window.addEventListener('resize', () => moveNode(node, target, anchorNode, size.value), {passive: true});
};

const sizeMap = {
	// xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200
}

const responsiveElementCarrier = () => {
	Object.entries(sizeMap).forEach(([name, value]) => {
		const smAfterNodes = document.querySelectorAll(`[data-${name}-after]`);

		if (smAfterNodes.length > 0) {
			smAfterNodes.forEach(node => processElement(node, {name, value}));
		}
	});
};

export default responsiveElementCarrier;
