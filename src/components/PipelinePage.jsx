import React, { useEffect, useState } from "react";

function PipelinePage() {
  const [pipelineStatus, setPipelineStatus] = useState("Ready");
  const [currentStage, setCurrentStage] = useState(-1);
  const [runNumber, setRunNumber] = useState(() => {
    const saved = localStorage.getItem("pipeline-run-number");

    return saved ? Number(saved) : 24;
  });

  const [lastRun, setLastRun] = useState(() => {
    const saved = localStorage.getItem("pipeline-last-run");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }

    return {
      number: 23,
      status: "Success",
      duration: "4m 32s",
      date: "Today",
    };
  });

  const stages = [
    {
      number: "01",
      name: "GitHub",
      description: "Source code checkout",
      icon: "🌿",
    },
    {
      number: "02",
      name: "Build",
      description: "Compile application",
      icon: "🔨",
    },
    {
      number: "03",
      name: "Test",
      description: "Run automated tests",
      icon: "🧪",
    },
    {
      number: "04",
      name: "Docker",
      description: "Build container image",
      icon: "🐳",
    },
    {
      number: "05",
      name: "Deploy",
      description: "Deploy application",
      icon: "🚀",
    },
    {
      number: "06",
      name: "Monitor",
      description: "Check application health",
      icon: "📊",
    },
  ];

  useEffect(() => {
    if (pipelineStatus !== "Running") {
      return;
    }

    if (currentStage >= stages.length - 1) {
      const timer = setTimeout(() => {
        const completedRun = {
          number: runNumber,
          status: "Success",
          duration: "4m 32s",
          date: "Just now",
        };

        setPipelineStatus("Success");
        setLastRun(completedRun);

        localStorage.setItem(
          "pipeline-last-run",
          JSON.stringify(completedRun)
        );
      }, 1500);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentStage((previousStage) => previousStage + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pipelineStatus, currentStage, runNumber, stages.length]);

  const startPipeline = () => {
    const nextRunNumber = runNumber + 1;

    setRunNumber(nextRunNumber);
    setCurrentStage(0);
    setPipelineStatus("Running");

    localStorage.setItem(
      "pipeline-run-number",
      String(nextRunNumber)
    );
  };

  const resetPipeline = () => {
    setPipelineStatus("Ready");
    setCurrentStage(-1);
  };

  const getStageStatus = (index) => {
    if (pipelineStatus === "Ready") {
      return "pending";
    }

    if (pipelineStatus === "Success") {
      return "success";
    }

    if (index < currentStage) {
      return "success";
    }

    if (index === currentStage) {
      return "running";
    }

    return "pending";
  };

  return (
    <div className="pipeline-page">

      {/* HEADER */}

      <section className="pipeline-header">

        <div>
          <span className="section-label">
            CI/CD AUTOMATION
          </span>

          <h1>
            Deployment Pipeline
          </h1>

          <p>
            Build, test, containerize and deploy
            DevOps applications through a complete
            CI/CD workflow.
          </p>
        </div>

        <div className="pipeline-header-actions">

          {pipelineStatus === "Running" ? (
            <button
              className="pipeline-running-button"
              disabled
            >
              <span className="pipeline-spinner">
                ◌
              </span>

              Pipeline Running...
            </button>
          ) : (
            <button
              className="primary-button"
              onClick={startPipeline}
            >
              ▶ Run Pipeline
            </button>
          )}

          {pipelineStatus !== "Ready" &&
            pipelineStatus !== "Running" && (
              <button
                className="secondary-button"
                onClick={resetPipeline}
              >
                ↻ Reset
              </button>
            )}

        </div>

      </section>

      {/* PIPELINE OVERVIEW */}

      <section className="pipeline-overview-grid">

        <div className="pipeline-info-card">

          <span>
            PIPELINE
          </span>

          <strong>
            DevOps Application CI/CD
          </strong>

          <p>
            GitHub → Jenkins → Docker →
            Deployment
          </p>

        </div>

        <div className="pipeline-info-card">

          <span>
            CURRENT STATUS
          </span>

          <strong
            className={`pipeline-status-text ${pipelineStatus.toLowerCase()}`}
          >
            {pipelineStatus}
          </strong>

          <p>
            Pipeline #{runNumber}
          </p>

        </div>

        <div className="pipeline-info-card">

          <span>
            BRANCH
          </span>

          <strong>
            main
          </strong>

          <p>
            Production branch
          </p>

        </div>

        <div className="pipeline-info-card">

          <span>
            LAST RUN
          </span>

          <strong>
            #{lastRun?.number || 23}
          </strong>

          <p>
            {lastRun?.date || "Today"}
          </p>

        </div>

      </section>

      {/* PIPELINE FLOW */}

      <section className="pipeline-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              PIPELINE WORKFLOW
            </span>

            <h2>
              CI/CD Stages
            </h2>
          </div>

          <span
            className={`pipeline-badge pipeline-badge-${pipelineStatus.toLowerCase()}`}
          >
            {pipelineStatus}
          </span>

        </div>

        <div className="pipeline-flow">

          {stages.map((stage, index) => {

            const status = getStageStatus(index);

            return (
              <React.Fragment key={stage.number}>

                <div
                  className={`pipeline-stage pipeline-stage-${status}`}
                >

                  <div className="pipeline-stage-top">

                    <span className="pipeline-stage-number">
                      {stage.number}
                    </span>

                    <span className="pipeline-stage-icon">
                      {stage.icon}
                    </span>

                  </div>

                  <h3>
                    {stage.name}
                  </h3>

                  <p>
                    {stage.description}
                  </p>

                  <div className="pipeline-stage-status">

                    {status === "success" && (
                      <>
                        <span>✓</span>
                        Success
                      </>
                    )}

                    {status === "running" && (
                      <>
                        <span className="pipeline-small-spinner">
                          ◌
                        </span>
                        Running
                      </>
                    )}

                    {status === "pending" && (
                      <>
                        <span>○</span>
                        Pending
                      </>
                    )}

                  </div>

                </div>

                {index < stages.length - 1 && (
                  <div
                    className={`pipeline-connector ${
                      index < currentStage ||
                      pipelineStatus === "Success"
                        ? "connector-complete"
                        : ""
                    }`}
                  >
                    →
                  </div>
                )}

              </React.Fragment>
            );
          })}

        </div>

      </section>

      {/* BUILD INFORMATION */}

      <section className="pipeline-details-grid">

        {/* SOURCE */}

        <div className="pipeline-detail-card">

          <div className="pipeline-detail-icon">
            🌿
          </div>

          <div>

            <span>
              SOURCE CONTROL
            </span>

            <h3>
              GitHub
            </h3>

            <p>
              Repository
            </p>

            <strong>
              devops-projecthub
            </strong>

            <p>
              Branch: main
            </p>

          </div>

        </div>

        {/* BUILD */}

        <div className="pipeline-detail-card">

          <div className="pipeline-detail-icon">
            🔨
          </div>

          <div>

            <span>
              BUILD SYSTEM
            </span>

            <h3>
              Jenkins
            </h3>

            <p>
              Build Tool
            </p>

            <strong>
              Maven
            </strong>

            <p>
              Automated CI build
            </p>

          </div>

        </div>

        {/* DOCKER */}

        <div className="pipeline-detail-card">

          <div className="pipeline-detail-icon">
            🐳
          </div>

          <div>

            <span>
              CONTAINER
            </span>

            <h3>
              Docker
            </h3>

            <p>
              Image
            </p>

            <strong>
              devops-projecthub:latest
            </strong>

            <p>
              Containerized application
            </p>

          </div>

        </div>

        {/* DEPLOYMENT */}

        <div className="pipeline-detail-card">

          <div className="pipeline-detail-icon">
            ☁️
          </div>

          <div>

            <span>
              DEPLOYMENT
            </span>

            <h3>
              AWS / Kubernetes
            </h3>

            <p>
              Environment
            </p>

            <strong>
              Production
            </strong>

            <p>
              Application deployment
            </p>

          </div>

        </div>

      </section>

      {/* PIPELINE EXECUTION */}

      <section className="pipeline-execution-card">

        <div className="pipeline-execution-header">

          <div>
            <span className="section-label">
              EXECUTION DETAILS
            </span>

            <h2>
              Pipeline #{runNumber}
            </h2>
          </div>

          <div
            className={`execution-status execution-${pipelineStatus.toLowerCase()}`}
          >
            {pipelineStatus === "Running" &&
              "● Running"}

            {pipelineStatus === "Success" &&
              "✓ Successful"}

            {pipelineStatus === "Ready" &&
              "○ Ready"}
          </div>

        </div>

        <div className="execution-grid">

          <div>
            <span>
              TRIGGER
            </span>

            <strong>
              Manual
            </strong>
          </div>

          <div>
            <span>
              BRANCH
            </span>

            <strong>
              main
            </strong>
          </div>

          <div>
            <span>
              COMMIT
            </span>

            <strong>
              a7f91c2
            </strong>
          </div>

          <div>
            <span>
              DURATION
            </span>

            <strong>
              {pipelineStatus === "Running"
                ? "Running..."
                : lastRun?.duration || "4m 32s"}
            </strong>
          </div>

        </div>

      </section>

      {/* RECENT RUNS */}

      <section className="pipeline-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              HISTORY
            </span>

            <h2>
              Recent Pipeline Runs
            </h2>
          </div>

        </div>

        <div className="pipeline-history">

          <div className="pipeline-history-row">

            <div>
              <strong>
                #{runNumber}
              </strong>

              <span>
                Manual execution
              </span>
            </div>

            <span className="history-running">
              {pipelineStatus}
            </span>

            <span>
              {pipelineStatus === "Running"
                ? "Running..."
                : pipelineStatus === "Success"
                ? "4m 32s"
                : "--"}
            </span>

            <span>
              Just now
            </span>

          </div>

          <div className="pipeline-history-row">

            <div>
              <strong>
                #{Math.max(runNumber - 1, 1)}
              </strong>

              <span>
                Git push
              </span>
            </div>

            <span className="history-success">
              Success
            </span>

            <span>
              4m 32s
            </span>

            <span>
              Earlier
            </span>

          </div>

          <div className="pipeline-history-row">

            <div>
              <strong>
                #{Math.max(runNumber - 2, 1)}
              </strong>

              <span>
                Git push
              </span>
            </div>

            <span className="history-success">
              Success
            </span>

            <span>
              5m 08s
            </span>

            <span>
              Yesterday
            </span>

          </div>

        </div>

      </section>

      {/* DEVOPS PRACTICE */}

      <section className="pipeline-practice-card">

        <div>
          <span className="section-label">
            DEVOPS PRACTICE
          </span>

          <h2>
            CI/CD Workflow
          </h2>

          <p>
            This pipeline represents the complete
            workflow used to take application source
            code from GitHub through automated build,
            testing, containerization and deployment.
          </p>
        </div>

        <div className="pipeline-practice-steps">

          <div>
            <strong>
              01
            </strong>

            <span>
              Push code to GitHub
            </span>
          </div>

          <div>
            <strong>
              02
            </strong>

            <span>
              Jenkins detects changes
            </span>
          </div>

          <div>
            <strong>
              03
            </strong>

            <span>
              Build & test application
            </span>
          </div>

          <div>
            <strong>
              04
            </strong>

            <span>
              Build Docker image
            </span>
          </div>

          <div>
            <strong>
              05
            </strong>

            <span>
              Deploy to infrastructure
            </span>
          </div>

          <div>
            <strong>
              06
            </strong>

            <span>
              Monitor application
            </span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default PipelinePage;