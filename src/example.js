import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BiTrash, BiGridVertical, BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Roulette";
import "./styles.css";

import exoticdollslogomini from "./img/exoticdollslogomini.png";
import kiss from "./img/kiss.png";
import fusta from "./img/fusta.png";
import chupito from "./img/chupito.png";
import liga from "./img/liga.png";
import ticket from "./img/ticket.png";
import ticket2 from "./img/ticket2.png";
import ticket3 from "./img/ticket3.png";
import nada from "./img/nada.png";
import trebol from "./img/trebol.png";

export default function BasicExample() {
  return <DraggeableForm />;
}

// You can think of these components as "pages"
// in your app.

const DraggeableForm = () => {
  const [inputList, setInputList] = useState([
    {
      id: uuidv4(),
      text: "exotic",
      props: {
        style: {
          backgroundColor: "black",
        },
        image: {
          offsetY: 200,
          uri: exoticdollslogomini,
        },
      },
    },
    {
      id: uuidv4(),
      text: "Volver a tirar !!",
      props: {
        style: {
            backgroundColor: 'orange'
        },
        image: {
          offsetY: 200,
          uri: trebol,
          sizeMultiplier: 0.8,
        },
      }
    },
    {
      id: uuidv4(),
      text: "kiss",
      props: {
        style: {
          backgroundColor: "#fff",
        },
        image: {
          offsetY: 200,
          uri: kiss,
          sizeMultiplier: 0.8,
        },
      },
    },

    {
      id: uuidv4(),
      text: "fusta",
      props: {
        style: {
          backgroundColor: "#B22222",
        },
        image: {
          offsetY: 200,
          uri: fusta,
          sizeMultiplier: 0.6,
        },
      },
    },
    {
      id: uuidv4(),
      text: "nada",
      props: {
        style: {
            backgroundColor: '#175fa9'
        },
        image: {
          offsetY: 200,
          uri: nada,
          sizeMultiplier: 1,
        },
      },
    },
    {
      id: uuidv4(),
      text: "liga",
      props: {
        style: {
          backgroundColor: "#9b00ff",
        },
        image: {
          offsetY: 200,
          uri: liga,
          sizeMultiplier: 1.4,
        },
      },
    },
    {
      id: uuidv4(),
      text: "ticket",
      props: {
        style: {
          backgroundColor: "#73dd42",
        },
        image: {
          offsetY: 200,
          uri: ticket3,
          sizeMultiplier: 1.2,
        },
      },
    },
    {
      id: uuidv4(),
      text: "chupito",
      props: {
        style: {
          backgroundColor: "yellow",
        },
        image: {
          offsetY: 200,
          uri: chupito,
          sizeMultiplier: 0.6,
        },
      },
    },
  ]);

  const [gift, setGift] = useState(0);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { text: "", id: uuidv4() }]);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(inputList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setInputList(items);
  }

  const onGift = () => {
    const list = [...inputList];
    if (gift === 0) {
      list[list.length - 2].props.image.uri = ticket2;
      setInputList(list);
    } else if (gift === 1) {
      list[list.length - 2].props.image.uri = ticket;
      setInputList(list);
    } else {
      handleRemoveClick(6);
    }
    setGift(gift + 1);
  };

  return (
    <div>
      {/*  */}
      <Roulette data={inputList} onGift={onGift} />
      {/* <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <ul
              className="items"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none" }}
            >
              {inputList.map((x, index) => {
                return (
                  <Draggable key={x.id} draggableId={x.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="list-item"
                      >
                        <div className="item">
                          <BiGridVertical />
                          <input
                            name="text"
                            placeholder="Введи что-нибудь(или нет)"
                            value={x.text}
                            onChange={(e) => handleInputChange(e, index)}
                            className="input"
                          />
                          <div className="btn-box">
                            {inputList.length !== 1 && (
                              <button
                                className="button"
                                onClick={() => handleRemoveClick(index)}
                              >
                                <BiTrash />
                              </button>
                            )}
                          </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext> 
      <button
        onClick={handleAddClick}
        style={{ marginLeft: "2.1rem" }}
        className="button"
      >
        <BiPlus />
      </button>*/}
    </div>
  );
};
