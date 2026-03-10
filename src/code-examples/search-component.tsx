import { useMemo, useState } from "react";
import { useCustomDebounce } from "../concepts/custom-react-hooks/use-debounce.";

const animals = [
  "Antelope",
  "Bear",
  "Cheetah",
  "Dolphin",
  "Elephant",
  "Flamingo",
  "Giraffe",
  "Hedgehog",
  "Iguana",
  "Jaguar",
  "Kangaroo",
  "Lion",
  "Monkey",
  "Narwhal",
  "Otter",
  "Penguin",
  "Quokka",
  "Raccoon",
  "Shark",
  "Tiger",
  "Urial",
  "Vulture",
  "Wolf",
  "Xerus",
  "Yak",
  "Zebra",
];

export const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearch = useCustomDebounce(searchQuery, 300)

  const filteredAnimals = useMemo(() => {
    return animals.filter(el => el.toLowerCase().includes(debouncedSearch.toLowerCase()))
  }, [debouncedSearch])
 
  return <div style={{ padding: '25px'}}>
    <input style={{marginBottom: '10px'}} type='text' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
    {filteredAnimals.map((animal, index) => {
      const lowerCaseEl = animal.toLowerCase();
      const lowerCaseQuery = debouncedSearch.toLowerCase();
      const matchIndex = lowerCaseEl.indexOf(lowerCaseQuery);

      if (matchIndex === -1 || !debouncedSearch) {
        return <div key={index}>{animal}</div>;
      }

      const beforeMatch = animal.slice(0, matchIndex);
      const match = animal.slice(matchIndex, matchIndex + debouncedSearch.length);
      const afterMatch = animal.slice(matchIndex + debouncedSearch.length);

      return (
        <div key={index}>
          {beforeMatch}
          <strong>{match}</strong>
          {afterMatch}
        </div>
      );
    })}
  </div>
}
