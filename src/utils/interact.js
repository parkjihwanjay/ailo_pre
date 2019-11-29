import interact from 'interactjs';

function dragMoveListener(event) {
	let target = event.target;
	let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	target.style.webkitTransfoㅣrm = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}

function interactInit(id, ga) {
	interact(id).draggable({
		// enable inertial throwing
		cursorChecker: (action, interactable, element, interacting) => {
			switch (action.axis) {
				case 'x':
					return 'ew-resize';
				case 'y':
					return 'ns-resize';
				default:
					return interacting ? 'grabbing' : 'grab';
			}
		},
		inertia: {
			resistance: 30,
			minSpeed: 200,
			endSpeed: 100,
		},
		modifiers: [
			interact.modifiers.restrictRect({
				restriction: 'parent',
				endOnly: true,
				elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
			}),
		],
		autoScroll: true,

		onmove: dragMoveListener,
		onend: function(event) {
			ga.event(`${event.target.id}`, 'dragEnd', `${event.target.id}Drag`, 3);
		},
	});
}

export { interactInit };
