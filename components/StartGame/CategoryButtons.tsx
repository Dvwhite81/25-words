'use client';

import { useAppContext } from '@/context/AppContext';
import { CategoryType, Difficulty } from '@/utils/types';
import { CATEGORIES } from '@/utils/constants';
import CategoryBtn from './CategoryBtn';

export default function CategoryButtons() {
  const { category, setCategory } = useAppContext();

  const changeCategory = (difficulty: Difficulty) => {
    const newCategory = CATEGORIES.find(
      (c) => c.difficulty === difficulty
    ) as CategoryType;
    setCategory(newCategory);
  };

  return (
    <div>
      {CATEGORIES.map((c) => {
        const disabled = c.difficulty === category.difficulty;
        return (
          <CategoryBtn
            key={c.difficulty}
            category={c}
            changeCategory={changeCategory}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
}
