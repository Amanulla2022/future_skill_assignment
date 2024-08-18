import React, { useState, useEffect } from "react";

const GetHelpCenterCards = ({ searchTerm }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const baseurl = process.env.REACT_APP_BASE_URL;

  // Initially fetching all cards
  useEffect(() => {
    const fetchHelpCenterCards = async () => {
      try {
        const response = await fetch(`${baseurl}/cards`);
        const data = await response.json();
        setCards(data);
        setFilteredCards(data); // initially should be all cards
      } catch (error) {
        console.error("Unable to fetch the help center cards", error);
      }
    };

    fetchHelpCenterCards();
  }, [baseurl]);

  // filtering and sorting the help cards based on the searched term
  useEffect(() => {
    if (searchTerm) {
      // filter cards based on the title of the help card
      const sortedCards = cards
        .filter((card) =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        // concating filtered card with left out cards
        .concat(
          cards.filter(
            (card) =>
              !card.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      setFilteredCards(sortedCards);
    } else {
      setFilteredCards(cards);
    }
  }, [searchTerm, cards]); // dependency array of searchterm or card changes

  return (
    <div className="p-16 lg:p-28 md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCards.map((card, idx) => (
          <div
            key={idx}
            className="border border-gray-400 py-6 mx-14 rounded-xl bg-gray-100"
          >
            <h4 className="text-2xl font-bold border-b border-gray-400 w-full px-8 pb-2">
              {card.title}
            </h4>
            <p className="mt-2 text-2xl px-8">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetHelpCenterCards;
