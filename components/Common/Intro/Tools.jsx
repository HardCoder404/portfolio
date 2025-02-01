import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Badge from "../Badge";
import { TECH_STACK } from "../../../constants/constants";
import { RotateCcw } from "lucide-react";
import useToolsStore from "../../../store/useToolsStore";

const Tools = () => {
  const { toolsOrder, setToolsOrder } = useToolsStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOrder = localStorage.getItem("toolsOrder");
      if (savedOrder) {
        setToolsOrder(JSON.parse(savedOrder));
      } else {
        setToolsOrder(TECH_STACK);
      }
      setIsHydrated(true);
    }
  }, [setToolsOrder]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination || source.index === destination.index) {
      return;
    }

    const updatedItems = Array.from(toolsOrder);
    const [movedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, movedItem);

    setToolsOrder(updatedItems);
    localStorage.setItem("toolsOrder", JSON.stringify(updatedItems));
  };

  const resetOrder = () => {
    setToolsOrder(TECH_STACK);
    localStorage.setItem("toolsOrder", JSON.stringify(TECH_STACK));
    localStorage.removeItem("toolsOrder");
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs flex items-center justify-between font-bold">
          Technologies & Tools
          <RotateCcw
            size={15}
            className="cursor-pointer"
            onClick={resetOrder}
          />
        </span>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tools-list">
            {(provided) => (
              <div
                className="flex flex-wrap gap-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {toolsOrder.map((item, index) => (
                  <Draggable key={index} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="cursor-move"
                      >
                        <Badge title={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Tools;
