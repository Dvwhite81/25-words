import { CategoryType, Difficulty } from '@/utils/types';

type CategoryBtnProps = {
  category: CategoryType;
  changeCategory: (difficulty: Difficulty) => void;
  disabled: boolean;
};

export default function CategoryBtn({
  category,
  changeCategory,
  disabled,
}: CategoryBtnProps) {
  const { difficulty } = category;

  const btnClass = disabled ? ' selected' : '';

  return (
    <button
      type="button"
      className={'btn category-btn' + btnClass}
      onClick={() => changeCategory(difficulty)}
      disabled={disabled}
    >
      <span className="shine"></span>
      {difficulty}
    </button>
  );
}
