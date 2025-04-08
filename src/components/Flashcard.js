import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Flashcard = ({ word, showDefinition, onToggle, onMark, onNext }) => {
  const difficulties = ["easy", "medium", "hard"];

  return (
    <Card className="text-center p-4">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">{word.word}</h2>
        {showDefinition ? (
          <p className="text-gray-700 mb-4">{word.definition}</p>
        ) : (
          <Button onClick={onToggle}>Show Definition</Button>
        )}
        <div className="mt-4 space-x-2">
          {difficulties.map((level) => (
            <Button key={level} onClick={() => onMark(level)}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Button>
          ))}
        </div>
        <div className="mt-6">
          <Button onClick={onNext}>Next Word</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Flashcard;
