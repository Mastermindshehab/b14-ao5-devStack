import type { Technology } from "../../types/technology";
import "./TechnologyCard.css";

interface TechnologyCardProps {
  technology: Technology;
  isSelected: boolean;
  onAdd: () => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="technology-card">

      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="technology-info">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span>⭐ {technology.rating}</span>
      </div>

      <button
        type="button"
        onClick={onAdd}
        disabled={isSelected}
        className={isSelected ? "added-button" : ""}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;