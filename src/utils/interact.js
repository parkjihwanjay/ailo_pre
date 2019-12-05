import interact from 'interactjs';

//drag
function dragMoveListener(event) {
	let target = event.target;
	let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	target.style.webkitTransfoㅣrm = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}

function interactDragInit(id, ga) {
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
		// inertia: {
		// 	resistance: 30,
		// 	minSpeed: 200,
		// 	endSpeed: 100,
		// },
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
			// ga.event(`${event.target.id}`, 'dragEnd', `${event.target.id}Drag`, 3);
		},
	});
}

//drop

function interactDropInit(id) {
	interact(id).dropzone({
		overlap: 0.8,
		ondropactivate: function(event) {
			console.log('ondropactivate');
		},
		ondropdeactivate: function(event) {
			console.log('ondropdeactivate');
		},
		ondragenter: function(event) {
			console.log('ondragenter');
		},
		ondragleave: function(event) {
			console.log('ondragleave');
		},
		// ondropactivate: function(event) {
		// 	const item = event.relatedTarget;
		// 	item.classList.add('dragging');
		// },
		// ondragenter: function(event) {
		// 	alert('성공적');
		// },
		// ondropactivate: function(evnet) {
		// 	console.log(id);
		// 	console.log(event.relatedTarget);
		// 	alert('성공적');
		// },
		// ondrop: function(event) {
		// 	alert(event.relatedTarget.id + ' was dropped into ' + event.target.id);
		// },
	});
	// .on('dropactivate', function(event) {
	// 	alert('성공적');
	// 	// event.target.classList.add('drop-activated');
	// });
}
//resize
function interactResizeInit(id, ga) {
	interact(id)
		.draggable({
			onmove: window.dragMoveListener,
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent',
				}),
			],
		})
		.resizable({
			// resize from all edges and corners
			edges: { left: true, right: true, bottom: true, top: true },

			modifiers: [
				// keep the edges inside the parent
				interact.modifiers.restrictEdges({
					outer: 'parent',
					endOnly: true,
				}),

				// minimum size
				// interact.modifiers.restrictSize({
				// 	min: { width: 200, height: 100 },
				// }),
			],

			inertia: true,
		})
		.on('resizemove', function(event) {
			let target = event.target;
			let x = parseFloat(target.getAttribute('data-x')) || 0;
			let y = parseFloat(target.getAttribute('data-y')) || 0;

			// update the element's style
			target.style.width = event.rect.width + 'px';
			target.style.height = event.rect.height + 'px';
			// translate when resizing from top or left edges
			x += event.deltaRect.left;
			y += event.deltaRect.top;

			target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);
			// target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);

			// ga.event(`${event.target.id}`, 'resize', `${event.target.id} Resize`, 4);
		});
}

export { interactDragInit, interactResizeInit, interactDropInit };
