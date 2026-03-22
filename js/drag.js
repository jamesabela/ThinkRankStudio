// Modern pointer-events based drag (Supports Touch, Pen, Mouse)
function dragElement(elmnt) {
  let pointerStartX = 0, pointerStartY = 0, initialLeft = 0, initialTop = 0;

  elmnt.addEventListener('pointerdown', dragStart, { passive: false });

  function dragStart(e) {
    // Only allow primary pointer (e.g. left click, one finger)
    if (!e.isPrimary) return;
    e.preventDefault();

    pointerStartX = e.clientX;
    pointerStartY = e.clientY;
    initialLeft = elmnt.offsetLeft;
    initialTop = elmnt.offsetTop;
    
    elmnt.setPointerCapture(e.pointerId);
    
    elmnt.classList.add('dragging');

    elmnt.addEventListener('pointermove', dragMove, { passive: false });
    elmnt.addEventListener('pointerup', dragEnd, { passive: false });
    elmnt.addEventListener('pointercancel', dragEnd, { passive: false });
  }

  function dragMove(e) {
    if (!e.isPrimary) return;
    e.preventDefault();

    const dx = e.clientX - pointerStartX;
    const dy = e.clientY - pointerStartY;

    let newLeft = initialLeft + dx;
    let newTop = initialTop + dy;

    // Container bounds checking logic
    const container = document.getElementById('container');
    const containerRect = container.getBoundingClientRect();
    const rect = elmnt.getBoundingClientRect();
    
    // Prevent element from being dragged completely out of bounds
    // allowing half of the element to be outside the container edge at most
    const minLeft = -rect.width / 2;
    const maxLeft = containerRect.width - rect.width / 2;
    const minTop = -rect.height / 2;
    const maxTop = containerRect.height - rect.height / 2;
    
    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    elmnt.style.left = newLeft + "px";
    elmnt.style.top = newTop + "px";
  }

  function dragEnd(e) {
    if (!e.isPrimary) return;
    
    elmnt.removeEventListener('pointermove', dragMove);
    elmnt.removeEventListener('pointerup', dragEnd);
    elmnt.removeEventListener('pointercancel', dragEnd);
    elmnt.releasePointerCapture(e.pointerId);
    
    elmnt.classList.remove('dragging');

    // Elimination drop check
    const trashZone = document.getElementById('trashZone');
    if (trashZone && window.handleEliminationDrop) {
      const trashRect = trashZone.getBoundingClientRect();
      const elmntRect = elmnt.getBoundingClientRect();
      const overlap = !(trashRect.right < elmntRect.left || 
                        trashRect.left > elmntRect.right || 
                        trashRect.bottom < elmntRect.top || 
                        trashRect.top > elmntRect.bottom);
      if (overlap) {
        window.handleEliminationDrop(elmnt);
      }
    }
  }
}
