import React, {Children, isValidElement, ReactNode, useEffect, useRef} from "react";

interface Props {
    isSwapping: (id1: string, id2: string) => boolean,
    onDrag: () => void,
    onDragStop: () => void,
    onSwap: (id1: string, id2: string) => void,
    children: ReactNode
}

interface DragState {
    isMouseDown: boolean;
    // eslint-disable-next-line
    draggedItem:  React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
}

function byId(id: string) {
    return document.getElementById(id)
}

function addAnimation(id1: string, id2: string) {
    const obj1 = document.getElementById(id1);
    const obj2 = document.getElementById(id2);

    if (obj1 && obj2) {
        obj1.style.animation = "slide-animation 0.3s ease";
        obj2.style.animation = "slide-animation 0.3s ease";

        const obj1Rect = obj1.getBoundingClientRect();
        const obj2Rect = obj2.getBoundingClientRect();

        obj1.style.setProperty('--m', `${obj2Rect.top - obj1Rect.top}px`)
        obj2.style.setProperty('--m', `${obj1Rect.top - obj2Rect.top}px`)
    }
}

function removeAnimation(id1: string, id2: string) {
    const obj1 = document.getElementById(id1);
    const obj2 = document.getElementById(id2);

    if (obj1 && obj2) {
        obj1.style.removeProperty('animation');
        obj2.style.removeProperty('animation');
    }
}

export default function Swappable(props: Props) {
    const dragState = useRef<DragState>({ isMouseDown: false, draggedItem: null });

    const onMouseMoveFn = (event: React.MouseEvent) => {
        event.stopPropagation()
        if (dragState.current.isMouseDown) {
            props.onDrag();
            if (!dragState.current.draggedItem) {
                for (const child of Children.toArray(props.children)) {
                    if (!isValidElement(child)) {
                        continue;
                    }
                    if (byId(child.props.id) && byId(child.props.id)?.matches(":hover")) {
                        dragState.current.draggedItem = child;
                        break;
                    }
                }
            }

            if (dragState.current.draggedItem) {
                // @ts-ignore
                byId(dragState.current.draggedItem.props.id).style.border = "2px solid blue";

                for (const child of Children.toArray(props.children)) {
                    if (!isValidElement(child)) {
                        continue;
                    }
                    if (byId(child.props.id)?.matches(":hover") && child.props.id != dragState.current.draggedItem.props.id) {
                        if (props.isSwapping(child.props.id, dragState.current.draggedItem.props.id)) {
                            addAnimation(child.props.id, dragState.current.draggedItem.props.id);
                            setTimeout(() => {
                                props.onSwap(child.props.id, dragState.current.draggedItem?.props.id);
                                removeAnimation(child.props.id, dragState.current.draggedItem?.props.id);
                            }, 250);
                        }
                    }
                }

                for (const child of Children.toArray(props.children)) {
                    if (!isValidElement(child)) {
                        continue;
                    }
                    if (child.props.id != dragState.current.draggedItem.props.id) {
                        byId(child.props.id)?.style.removeProperty('border');
                    }
                }
            }
        }
    }

    useEffect(() => {
        // Captures click to prevent propagation into children
        const captureClick = (e: MouseEvent) => {
            e.stopPropagation();
            document.removeEventListener('click', captureClick, true);
        }

        const onMouseUp = () => {
            props.onDragStop();
            dragState.current.isMouseDown = false;
            if (dragState.current.draggedItem) {
                document.addEventListener("click", captureClick, true);
                byId(dragState.current.draggedItem.props.id)?.style.removeProperty('border')
            }
            dragState.current.draggedItem = null;
        }

        const onMouseDown = () => {
            dragState.current.isMouseDown = true;
        }

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        }
    }, [props]);

    return (
        <div onMouseMove={onMouseMoveFn}>
            {props.children}
        </div>
    )
}
