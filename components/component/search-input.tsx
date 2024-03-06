"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";

export function SearchComponent() {
    const [search, setSearch] = useState<string>('');
    const router= useRouter()
    const [open, setOpen] = useState(false);
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire
        handleClick(); // Appeler la fonction handleClick pour effectuer la recherche
      }
    };
  
    const handleClick = () => {
      // Effectuer la recherche avec la valeur actuelle de search
      console.log(search);
      router.push(`/product?query=${search}`);
    };
  
    return (
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
        <Input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={handleKeyPress}
          className="w-full max-w-xs"
          placeholder="Search"
        />
        {/* Vous pouvez cacher le bouton s'il n'est pas nécessaire */}
        {/* <button onClick={handleClick}>Search</button> */}
      </form>
    );
  }
  