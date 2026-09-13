import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TechnologyCard from "../TechnologyCard/TechnologyCard";
import type { Technology } from "../../types/technology";
import technologiesData from "../../data/technologies.json";

import "./Technologies.css";

const Technologies = () => {
  // Technologies Data
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Loading State
  const [loading, setLoading] = useState(true);

  // Selected Technologies
  const [stack, setStack] = useState<Technology[]>([]);

  // Load JSON Data
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setTechnologies(technologiesData as Technology[]);
      } catch (error) {
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add Technology
  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove Technology
  const removeFromStack = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  // Remove All
  const removeAll = () => {
    if (stack.length === 0) return;

    setStack([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  // Loading State
  if (loading) {
    return (
      <section className="technologies-section loading-section">
        <div className="loading-container">
          <div className="loading-spinner"></div>

          <p>Loading technologies...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="technologies-section">

      <div className="technologies-heading">
        <h2>
          Explore the <span>Technologies</span>
        </h2>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="technologies-layout">

        {/* Technology Cards */}
        <div className="technology-grid">

          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={() => addToStack(technology)}
              isSelected={stack.some(
                (item) => item.id === technology.id
              )}
            />
          ))}

        </div>

        {/* Your Stack */}
        <aside className="your-stack">

          <h3>Your Stack</h3>

          <p className="stack-count">
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>

          <div className="selected-stack">

            {stack.length === 0 ? (
              <p className="empty-stack">
                No technology selected
              </p>
            ) : (
              stack.map((technology) => (
                <div
                  className="selected-item"
                  key={technology.id}
                >

                  <div className="selected-info">

                    <img
                      src={technology.icon}
                      alt={technology.name}
                    />

                    <div>
                      <strong>
                        {technology.name}
                      </strong>

                      <small>
                        {technology.category}
                      </small>
                    </div>

                  </div>

                  {/* Remove Button */}
                  <button
                    className="remove-item"
                    onClick={() =>
                      removeFromStack(technology.id)
                    }
                    aria-label={`Remove ${technology.name}`}
                  >
                    ×
                  </button>

                </div>
              ))
            )}

          </div>

          {/* Remove All */}
          <button
            className="remove-all"
            onClick={removeAll}
            disabled={stack.length === 0}
          >
            Remove All
          </button>

        </aside>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

    </section>
  );
};

export default Technologies;